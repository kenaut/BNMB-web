# BNMB-web

变にまび（BNMB）的官方网站。

## 技术栈

- Vue 3 + Vite，纯静态单页，无后端与运行时第三方依赖
- 相对路径构建（`base: "./"`），可直接部署到 GitHub Pages 或任意静态目录
- 页面内演示的 12 种活用形与站内活用引擎输出一致

## 本地开发

```bash
npm install
npm run dev      # 开发服务器
npm run build    # 构建到 dist/
npm run preview  # 预览构建产物
```

## 部署

仓库内置 `deploy.sh`，会构建项目并把 `dist/` 发布到 GitHub Pages 的 `gh-pages` 分支：

```bash
./deploy.sh
```

首次使用前，请在 GitHub 仓库 Settings → Pages 中将 Source 设为：
`Deploy from a branch` → 分支 `gh-pages` → `/ (root)`。

也可以将 `dist/` 目录手动上传到任意静态托管服务。

## 相关链接

- 网页版应用：<https://kenaut.github.io/BNMB/>
- Web 版源码：<https://github.com/kenaut/BNMB>
- Android 版：<https://github.com/kenaut/BNMB-android>
- Android 下载：<https://github.com/kenaut/BNMB-android/releases/download/2/BNMB_android-v0.2.apk>

## License

MIT
