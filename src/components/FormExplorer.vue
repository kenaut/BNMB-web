<script setup>
import { computed, ref } from "vue";
import SiteIcon from "./SiteIcon.vue";
import { DEMO_VERBS, FORM_LABELS, TYPE_LABELS } from "../data/site.js";

const activeId = ref(DEMO_VERBS[0].id);
const activeVerb = computed(
  () => DEMO_VERBS.find((verb) => verb.id === activeId.value) ?? DEMO_VERBS[0],
);
</script>

<template>
  <section id="forms" class="section section--sunken">
    <div class="shell">
      <div class="section-head" data-reveal>
        <span class="kicker">CONJUGATION</span>
        <h2 class="section-title">十二种形态，一眼看清规律。</h2>
        <p class="section-lead">
          切换动词类型，查看同一套规则在五段、一段、サ变、カ变上的不同表现。
          全部示例由站内活用引擎生成，与练习中的答案完全一致。
        </p>
      </div>

      <div class="explorer" data-reveal>
        <div class="verb-tabs" role="tablist" aria-label="选择演示动词">
          <button
            v-for="verb in DEMO_VERBS"
            :key="verb.id"
            type="button"
            class="verb-tab"
            :class="{ 'is-active': verb.id === activeId }"
            role="tab"
            :aria-selected="verb.id === activeId"
            @click="activeId = verb.id"
          >
            <span class="verb-tab-main">
              <span class="verb-tab-word">
                {{ verb.kanji }}<small>{{ verb.kana }}</small>
              </span>
              <span class="verb-tab-meaning">{{ verb.meaning }}</span>
            </span>
            <span class="verb-tab-type">{{ TYPE_LABELS[verb.type] }}</span>
          </button>

          <p class="explorer-note">
            <SiteIcon name="spark" :size="14" style="display: inline-block; vertical-align: -2px" />
            辞书形之外的 11 种形态都参与出题；「辞书形」主要出现在逆向题中。
          </p>
        </div>

        <div class="form-panel" role="tabpanel">
          <div class="form-panel-head">
            <p class="form-panel-title">
              以 <b>{{ activeVerb.kanji }}</b> 为例 · {{ TYPE_LABELS[activeVerb.type] }}动词 ·
              JLPT N5
            </p>
            <span class="form-legend"><i></i>辞书形</span>
          </div>

          <div :key="activeVerb.id" class="form-grid">
            <div
              v-for="(form, index) in activeVerb.forms"
              :key="FORM_LABELS[index]"
              class="form-cell"
              :class="{ 'is-dictionary': index === 0 }"
              :style="{ animationDelay: `${index * 0.025}s` }"
            >
              <span class="form-cell-label">{{ FORM_LABELS[index] }}</span>
              <span class="form-cell-word">{{ form[0] }}</span>
              <span class="form-cell-kana">{{ form[1] }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
