#!/usr/bin/env bash
# 将 BNMB 官网构建并发布到 GitHub Pages 的 gh-pages 分支
# 用法：./deploy.sh
# 前置条件：
#   1. 已在当前仓库配置 origin 远程，且本机有推送权限
#   2. GitHub 仓库 Settings → Pages → Source 选择「Deploy from a branch」，分支选 gh-pages / (root)

set -euo pipefail

cd "$(dirname "$0")"

if ! REMOTE_URL="$(git remote get-url origin 2>/dev/null)"; then
  echo "错误：当前仓库没有配置 origin 远程。" >&2
  exit 1
fi

BRANCH="gh-pages"

echo "==> 检查依赖"
if [ ! -d node_modules ]; then
  echo "node_modules 不存在，执行 npm ci ..."
  npm ci
else
  echo "依赖已存在，跳过安装。"
fi

echo "==> 构建生产版本"
npm run build

if [ ! -f dist/index.html ]; then
  echo "错误：构建产物 dist/index.html 不存在。" >&2
  exit 1
fi

echo "==> 准备发布目录"
TMP_DIR="$(mktemp -d)"
cleanup() {
  rm -rf "$TMP_DIR"
}
trap cleanup EXIT

# 复制构建产物到独立的临时目录，避免在 dist 内生成 .git
cp -R dist/. "$TMP_DIR"/
# 关闭 GitHub Pages 的 Jekyll 处理，直接按静态文件发布
touch "$TMP_DIR/.nojekyll"

cd "$TMP_DIR"
git init -q
git checkout -q -b "$BRANCH"
git add -A
git -c user.name="${GIT_AUTHOR_NAME:-BNMB Deploy}" \
    -c user.email="${GIT_AUTHOR_EMAIL:-deploy@users.noreply.github.com}" \
    commit -q -m "deploy: $(date '+%Y-%m-%d %H:%M:%S')"

echo "==> 推送到 ${BRANCH} 分支"
git push --force "$REMOTE_URL" "HEAD:${BRANCH}"

# 拼出 Pages 地址，兼容 https 与 ssh 两种远程写法
SLUG="$(printf '%s' "$REMOTE_URL" | sed -E 's#^(git@|https://|ssh://git@)github.com[:/]##; s#\.git$##')"
OWNER="${SLUG%%/*}"
REPO="${SLUG#*/}"
if [ "$REPO" = "${OWNER}.github.io" ]; then
  PAGE_URL="https://${OWNER}.github.io/"
else
  PAGE_URL="https://${OWNER}.github.io/${REPO}/"
fi

echo ""
echo "✅ 部署完成：${PAGE_URL}"
echo "首次发布或 Pages 尚未开启时，请在仓库 Settings → Pages 中选择："
echo "   Source: Deploy from a branch"
echo "   Branch: ${BRANCH} / (root)"
echo "GitHub 通常需要几十秒到几分钟来刷新页面。"
