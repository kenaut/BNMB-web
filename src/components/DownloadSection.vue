<script setup>
import SiteIcon from "./SiteIcon.vue";
import { LINKS } from "../data/site.js";
</script>

<template>
  <section id="download" class="section">
    <div class="shell">
      <div class="download-panel" data-reveal>
        <div class="download-head">
          <div>
            <h2 class="download-title">现在开始，<br />把活用练成本能。</h2>
            <p class="download-lead">
              选一个平台就可以直接开始，不需要注册。移动端更适合每天刷几局，
              网页版适合在电脑上安静地过一遍活用表。
            </p>
          </div>
          <span class="download-version">ANDROID v0.4.0 · WEB</span>
        </div>

        <div class="download-cards">
          <article class="download-card download-card--android">
            <div class="download-card-top">
              <span class="platform-icon"><SiteIcon name="phone" :size="21" /></span>
              <div>
                <div class="download-card-name">Android 版</div>
                <div class="download-card-meta">APK · 12.7 MB · Android 7.0+ · v0.4.0</div>
              </div>
            </div>
            <p>
              学习资源全部内置，<strong>练习与词库完全离线</strong>。
              联网只用于「设置 → 版本更新」检查与下载新版本。
              适合通勤、地铁里每天练几局，进度保存在本机。
            </p>
            <a class="btn btn--primary" :href="LINKS.androidApk" target="_blank" rel="noopener noreferrer">
              <SiteIcon name="download" :size="17" />
              下载 v0.4.0
            </a>
            <a
              class="download-alt-link"
              :href="LINKS.androidApkMigrate"
              target="_blank"
              rel="noopener noreferrer"
            >
              从 v0.3.0 升级？先下载迁移包（12.4 MB）
            </a>
            <div class="download-tags">
              <span class="download-tag">离线练习</span>
              <span class="download-tag">应用内更新</span>
              <span class="download-tag">正式签名</span>
              <span class="download-tag">597 词</span>
            </div>
          </article>

          <article class="download-card">
            <div class="download-card-top">
              <span class="platform-icon"><SiteIcon name="globe" :size="21" /></span>
              <div>
                <div class="download-card-name">Web 版</div>
                <div class="download-card-meta">浏览器 · 免安装 · GitHub Pages</div>
              </div>
            </div>
            <p>
              打开网页即可练习，桌面与手机浏览器都能用。适合先体验，或在大屏幕上完整过一遍 12 种形态。
            </p>
            <a class="btn btn--ghost-light" :href="LINKS.web" target="_blank" rel="noopener noreferrer">
              前往网页版
              <SiteIcon name="external" :size="16" />
            </a>
            <div class="download-tags">
              <span class="download-tag">免安装</span>
              <span class="download-tag">本地存储</span>
              <span class="download-tag">JSON 备份</span>
            </div>
          </article>
        </div>

        <div class="migrate-panel">
          <div class="migrate-head">
            <div>
              <b>只有从 v0.3.0 升级才需要迁移</b>
              <p>
                v0.3.1 起改用正式签名，系统不允许直接覆盖 v0.3.0 的 debug 签名安装包。
                按下面 5 步操作，学习进度可以完整带过来。
              </p>
            </div>
            <a
              class="btn btn--ghost-light"
              :href="LINKS.androidApkMigrate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiteIcon name="download" :size="16" />
              下载迁移包
            </a>
          </div>
          <ol class="migrate-steps">
            <li>
              <strong>安装迁移包</strong>
              先装 v0.3.0 迁移包，可直接覆盖旧版，数据不受影响。
            </li>
            <li>
              <strong>导出备份</strong>
              打开「主页 → 数据管理 → 导出数据」，保存 JSON 文件。
            </li>
            <li>
              <strong>卸载旧版</strong>
              卸载 BNMB，系统会清除应用内的旧数据。
            </li>
            <li>
              <strong>安装 v0.4.0</strong>
              安装上方下载的最新正式签名安装包。
            </li>
            <li>
              <strong>导入备份</strong>
              打开「主页 → 数据管理 → 导入数据」，选择刚才的 JSON。
            </li>
          </ol>
          <p class="migrate-note">
            迁移只需做这一次。v0.3.1 之后签名固定，后续版本可以直接覆盖升级。
          </p>
        </div>

        <div class="install-steps">
          <div class="install-step">
            <b>1</b>
            <span><strong>下载 APK</strong><br />保存到手机后点击安装。</span>
          </div>
          <div class="install-step">
            <b>2</b>
            <span><strong>允许未知来源</strong><br />按系统提示为浏览器开启安装权限。</span>
          </div>
          <div class="install-step">
            <b>3</b>
            <span><strong>后续可直接覆盖</strong><br />0.3.1 起签名固定，升级保留进度。</span>
          </div>
        </div>

        <p class="download-footnote">
          v0.4.0 把学习页活用速查表改为竖屏折叠列表，动词一览支持关键词与类型／级别／形态筛选，
          设置页新增做题偏好（振假名、形态徽章、动词属性提示）。包名仍为 com.kenaut.bnmb，
          已安装 0.3.1 / 0.3.2 的用户可直接覆盖升级并继承进度；「设置 → 版本更新」可检查后续版本。
        </p>
      </div>
    </div>
  </section>
</template>
