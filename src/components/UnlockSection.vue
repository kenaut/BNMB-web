<script setup>
import SiteIcon from "./SiteIcon.vue";
import { UNLOCK_BATCHES } from "../data/site.js";
</script>

<template>
  <section id="path" class="section">
    <div class="shell">
      <div class="section-head" data-reveal>
        <span class="kicker">LEARNING PATH</span>
        <h2 class="section-title">循序渐进，一次只多一点点。</h2>
        <p class="section-lead">
          词库从一开始就全部开放，只有活用形按批次解锁。
          先把手感建立起来，再挑战受身、使役这些容易混淆的形态。
        </p>
      </div>

      <div class="unlock-grid">
        <article
          v-for="(batch, index) in UNLOCK_BATCHES"
          :key="batch.stage"
          class="unlock-card"
          :class="{ 'is-open': batch.tone === 'open' }"
          data-reveal
        >
          <div class="unlock-stage">
            <b>{{ index + 1 }}</b>
            {{ batch.stage }}
          </div>
          <p class="unlock-status">
            {{ batch.tone === "open" ? "已解锁" : "待解锁" }}
            <small>{{ batch.forms.length }} 种活用形</small>
          </p>
          <div class="form-chips">
            <span v-for="form in batch.forms" :key="form" class="form-chip">{{ form }}</span>
          </div>
          <p class="unlock-condition">
            <SiteIcon :name="batch.tone === 'open' ? 'check' : 'lock'" :size="14" />
            {{ batch.condition }}
          </p>
        </article>
      </div>

      <div class="mastery-note" data-reveal>
        <SiteIcon name="spark" :size="20" />
        <p>
          掌握标准：某个形态<b>累计答对 ≥ 5 次</b>即视为掌握。当前批次的形态全部掌握后，
          下一批自动解锁；全部 12 种形态解锁后，仍可继续训练并刷新正确率。
        </p>
      </div>
    </div>
  </section>
</template>
