<script setup>
import SiteIcon from "./SiteIcon.vue";
import { FEATURES } from "../data/site.js";
</script>

<template>
  <section id="features" class="section section--tight">
    <div class="shell">
      <div class="section-head" data-reveal>
        <span class="kicker">FEATURES</span>
        <h2 class="section-title">只练一件事：把动词变对。</h2>
        <p class="section-lead">
          没有花哨的关卡与体力值，只有针对「动词活用」设计的训练机制。
          <strong>规则清晰、反馈即时、进度可查</strong>，每一题都花在刀刃上。
        </p>
      </div>

      <div class="feature-grid">
        <article
          v-for="feature in FEATURES"
          :key="feature.title"
          class="feature-card"
          data-reveal
        >
          <div class="feature-icon"><SiteIcon :name="feature.icon" :size="22" /></div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-desc">{{ feature.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
