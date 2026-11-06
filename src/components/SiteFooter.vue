<script setup>
import SiteIcon from "./SiteIcon.vue";
import { LINKS } from "../data/site.js";
const year = new Date().getFullYear();
</script>

<template>
  <footer class="site-footer">
    <div class="shell">
      <div class="footer-top">
        <div class="footer-brand">
          <a class="brand" href="#top">
            <span class="brand-mark" aria-hidden="true">変</span>
            <span class="brand-text">
              <span class="brand-name">变にまび</span>
              <span class="brand-sub">BNMB</span>
            </span>
          </a>
          <p>
            开源日语动词活用训练工具。12 种活用形、597 个动词、双向出题，
            无需账号，数据只留在本地。
          </p>
        </div>

        <div class="footer-links">
          <div class="footer-col">
            <h4>产品</h4>
            <a :href="LINKS.web" target="_blank" rel="noopener noreferrer">网页版</a>
            <a :href="LINKS.androidApk" target="_blank" rel="noopener noreferrer">Android 下载</a>
            <a href="#forms">活用形一览</a>
            <a href="#faq">常见问题</a>
          </div>
          <div class="footer-col">
            <h4>源码</h4>
            <a :href="LINKS.githubWeb" target="_blank" rel="noopener noreferrer">Web 版仓库</a>
            <a :href="LINKS.githubAndroid" target="_blank" rel="noopener noreferrer">Android 版仓库</a>
            <a :href="LINKS.githubSite" target="_blank" rel="noopener noreferrer">官网仓库</a>
          </div>
          <div class="footer-col">
            <h4>关于</h4>
            <span>MIT License</span>
            <span>Web 版 · React</span>
            <span>官网 · Vue 3</span>
            <a :href="`${LINKS.githubWeb}/issues`" target="_blank" rel="noopener noreferrer">
              反馈问题
              <SiteIcon
                name="external"
                :size="11"
                :stroke-width="2"
                style="display: inline-block; vertical-align: -1px"
              />
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© {{ year }} 变にまび BNMB · MIT License</span>
        <span>本站使用 Vue 3 + Vite 构建 · 示例由活用引擎生成</span>
      </div>
    </div>
  </footer>
</template>
