<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import SiteIcon from "./SiteIcon.vue";
import { LINKS } from "../data/site.js";

const scrolled = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 8;
};

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onBeforeUnmount(() => window.removeEventListener("scroll", handleScroll));
</script>

<template>
  <header class="site-header" :class="{ 'is-scrolled': scrolled }">
    <div class="shell header-inner">
      <a class="brand" href="#top" aria-label="变にまび 首页">
        <span class="brand-mark" aria-hidden="true">変</span>
        <span class="brand-text">
          <span class="brand-name">变にまび</span>
          <span class="brand-sub">BNMB</span>
        </span>
      </a>

      <nav class="nav" aria-label="主导航">
        <a href="#features">功能</a>
        <a href="#forms">活用形</a>
        <a href="#path">学习路径</a>
        <a href="#words">词库</a>
        <a href="#screens">界面</a>
        <a href="#download">下载</a>
      </nav>

      <div class="header-actions">
        <a
          class="header-github"
          :href="LINKS.githubWeb"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
          <SiteIcon name="external" :size="13" :stroke-width="2" />
        </a>
        <a class="btn btn--primary btn--sm" :href="LINKS.androidApk" target="_blank" rel="noopener noreferrer">
          <SiteIcon name="download" :size="16" />
          Android 下载
        </a>
      </div>
    </div>
  </header>
</template>
