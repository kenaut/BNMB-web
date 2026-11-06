<script setup>
import { FAQS, LINKS } from "../data/site.js";
import SiteIcon from "./SiteIcon.vue";
</script>

<template>
  <section id="faq" class="section section--tight">
    <div class="shell faq-layout">
      <div data-reveal>
        <span class="kicker">FAQ</span>
        <h2 class="section-title">常见问题</h2>
        <p class="section-lead">
          还有疑问？可以在 GitHub 上查看源码、提交 issue，或直接阅读 Web 版的完整说明。
        </p>
        <a
          class="btn btn--outline btn--sm"
          :href="LINKS.githubWeb"
          target="_blank"
          rel="noopener noreferrer"
          style="margin-top: 24px"
        >
          <SiteIcon name="external" :size="15" />
          在 GitHub 查看源码
        </a>
      </div>

      <div class="faq-list" data-reveal>
        <details v-for="faq in FAQS" :key="faq.q" class="faq-item">
          <summary>
            {{ faq.q }}
            <span class="faq-plus" aria-hidden="true"></span>
          </summary>
          <p>{{ faq.a }}</p>
        </details>
      </div>
    </div>
  </section>
</template>
