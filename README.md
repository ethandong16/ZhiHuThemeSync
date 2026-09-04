# ZhihuThemeSync

一个用于知乎网页的 Tampermonkey 用户脚本：自动让知乎页面主题（深色/浅色）与系统主题保持一致。

## 功能

- 自动检测系统主题（`prefers-color-scheme`）。
- 在打开知乎页面时自动设置 `theme` 参数。
- 当系统主题切换时自动更新页面主题并刷新页面。
- 适配 `https://*.zhihu.com/*` 下的知乎页面。

## 工作原理

脚本通过 `window.matchMedia('(prefers-color-scheme: dark)')` 监听系统主题变化，并将当前页面 URL 的 `theme` 参数设置为：

- 深色模式：`theme=dark`
- 浅色模式：`theme=light`

当检测到页面主题与系统主题不一致时，脚本会重载页面使主题生效。

## 安装方式

### 1) 安装用户脚本管理器

先在浏览器安装以下任一扩展：

- [Tampermonkey](https://www.tampermonkey.net/)
- [Violentmonkey](https://violentmonkey.github.io/)

### 2) 安装脚本

可通过以下地址直接安装：

- GreasyFork（推荐）：`https://greasyfork.org/scripts/552535-zhihuthemesync`
- 直链安装：`https://update.greasyfork.org/scripts/552535/ZhihuThemeSync.user.js`

## 使用说明

1. 安装脚本后，打开任意知乎页面（如 `www.zhihu.com`）。
2. 保持浏览器/系统允许网站读取系统主题偏好。
3. 当系统在深色与浅色间切换时，知乎页面会自动同步主题。

## 兼容性

- 现代 Chromium 内核浏览器（Chrome / Edge / Brave 等）
- Firefox（配合 Tampermonkey 或 Violentmonkey）

## 仓库结构

```text
.
├── userscript.js   # 用户脚本主文件
└── LICENSE         # MIT 许可证
```

## 开发与调试

1. 修改仓库根目录下的 `userscript.js`。
2. 在脚本管理器中重新加载脚本。
3. 打开浏览器开发者工具查看日志输出和行为。

## 许可证

本项目基于 [MIT License](./LICENSE) 开源。
