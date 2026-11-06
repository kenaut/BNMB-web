<script setup>
import { ref } from "vue";
import PhoneFrame from "./PhoneFrame.vue";
import SiteIcon from "./SiteIcon.vue";
import { LINKS } from "../data/site.js";
import { detectDevice } from "../utils/device.js";
import homeShot from "../../jpgs/主页.jpg";

/** 电脑访问时高亮网页版，手机／平板访问时高亮 Android 下载 */
const isHandheld = ref(detectDevice() === "mobile");
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <span class="hero-watermark" aria-hidden="true">変</span>
    <div class="shell hero-grid">
      <div class="hero-copy">
        <p class="eyebrow"><span class="eyebrow-dot"></span>开源 · 本地优先 · 无账号</p>
        <p class="hero-jp">
          <span class="hero-jp-main">変にまび</span>
          <span class="hero-jp-note">BNMB · HEN NI MABI</span>
        </p>
        <h1 id="hero-title" class="hero-title">
          把日语动词活用，<br />练成<span class="accent">条件反射</span>。
        </h1>
        <p class="hero-lead">
          像多邻国一样，用一回合 10 题反复练习
          <strong>12 种活用形</strong>；从「書く」到「書かせられる」，让变形不再靠临时回想。
          无需注册，数据只留在你的设备里。
        </p>

        <div class="hero-actions">
          <a
            class="btn"
            :class="isHandheld ? 'btn--primary' : 'btn--outline'"
            :href="LINKS.androidApk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiteIcon name="download" :size="18" />
            下载 Android 版
          </a>
          <a
            class="btn"
            :class="isHandheld ? 'btn--outline' : 'btn--primary'"
            :href="LINKS.web"
            target="_blank"
            rel="noopener noreferrer"
          >
            网页版立即练习
            <SiteIcon name="external" :size="16" />
          </a>
        </div>

        <p class="hero-trust">
          <span>597 个动词</span>
          <span>Android 完全离线</span>
          <span>MIT 开源</span>
          <span>无需账号</span>
        </p>
      </div>

      <div class="hero-visual">
        <span class="float-chip float-chip--a"><i></i>て形</span>
        <span class="float-chip float-chip--b"><i></i>可能形</span>
        <span class="float-chip float-chip--c"><i></i>使役受身形</span>

        <PhoneFrame
          class="hero-phone"
          :src="homeShot"
          alt="变にまび 首页：显示学习进度、已解锁形态与开始训练入口"
          hero
        />
      </div>
    </div>
  </section>

  <div class="stat-strip">
    <div class="shell stat-strip-inner">
      <div class="stat-item">
        <span class="stat-number">12<small>种</small></span>
        <span class="stat-label">活用形</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">597<small>词</small></span>
        <span class="stat-label">动词词库</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">N5–N1</span>
        <span class="stat-label">难度覆盖</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">10<small>题</small></span>
        <span class="stat-label">每回合</span>
      </div>
    </div>
  </div>
</template>
