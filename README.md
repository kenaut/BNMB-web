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

推送到 `main` 分支后，GitHub Actions 会自动构建并发布到 GitHub Pages，工作流见
`.github/workflows/deploy.yml`。也可以在 Actions 页面手动运行 `Deploy to GitHub Pages`。

首次使用前，请在 GitHub 仓库 Settings → Pages 中将 Source 设为 **GitHub Actions**。

线上地址：`https://kenaut.github.io/BNMB-web/`

## 相关链接

- 网页版应用：<https://kenaut.github.io/BNMB/>
- Web 版源码：<https://github.com/kenaut/BNMB>
- Android 版：<https://github.com/kenaut/BNMB-android>
- Android 下载：<https://github.com/kenaut/BNMB-android/releases/download/2/BNMB_android-v0.2.apk>

## License

MIT
