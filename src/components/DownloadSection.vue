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
          <span class="download-version">ANDROID v0.2.0 · WEB</span>
        </div>

        <div class="download-cards">
          <article class="download-card download-card--android">
            <div class="download-card-top">
              <span class="platform-icon"><SiteIcon name="phone" :size="21" /></span>
              <div>
                <div class="download-card-name">Android 版</div>
                <div class="download-card-meta">APK · 12.3 MB · Android 7.0+</div>
              </div>
            </div>
            <p>
              资源全部内置，<strong>完全离线运行</strong>，不申请联网权限。
              适合通勤、地铁里每天练几局，进度保存在本机。
            </p>
            <a class="btn btn--primary" :href="LINKS.androidApk" target="_blank" rel="noopener noreferrer">
              <SiteIcon name="download" :size="17" />
              下载 APK
            </a>
            <div class="download-tags">
              <span class="download-tag">无需联网</span>
              <span class="download-tag">覆盖升级保留进度</span>
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
            <span><strong>直接覆盖安装</strong><br />相同包名与签名，学习进度自动保留。</span>
          </div>
        </div>

        <p class="download-footnote">
          当前安卓包为 debug 签名，适合个人安装与分发测试；如需上架应用商店，请替换为正式签名并配置 release 构建。
        </p>
      </div>
    </div>
  </section>
</template>
