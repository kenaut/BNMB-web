<script setup>
import { WORDS, TYPE_LABELS } from "../data/site.js";

const levels = [
  { code: "N5", note: "入门" },
  { code: "N4", note: "基础" },
  { code: "N3", note: "进阶" },
  { code: "N2", note: "中高级" },
  { code: "N1", note: "高级" },
];
</script>

<template>
  <section id="words" class="section section--sunken">
    <div class="shell words-layout">
      <div data-reveal>
        <span class="kicker">VOCABULARY</span>
        <h2 class="section-title">597 个动词，覆盖 N5 到 N1。</h2>
        <p class="section-lead">
          从最基础的「書く」「食べる」，到 N1 的「朽ちる」「媚びる」，
          统一按五段、一段、サ变、カ变分类。汉字上方自动标注振假名，
          遇到不认识的词也能先读出来。
        </p>
        <div class="level-row">
          <span v-for="level in levels" :key="level.code" class="level-pill">
            <b>{{ level.code }}</b>{{ level.note }}
          </span>
        </div>
        <p class="words-foot">
          词库持续维护，所有动词均通过活用引擎与数据完整性测试。
        </p>
      </div>

      <div data-reveal>
        <div class="word-grid">
          <div v-for="word in WORDS" :key="word.kanji" class="word-card">
            <div class="word-main">
              <span class="word-kanji">{{ word.kanji }}</span>
              <span class="word-kana">{{ word.kana }}</span>
            </div>
            <div class="word-meta">
              <span class="word-level">{{ word.level }}</span>
              <span class="word-type">{{ TYPE_LABELS[word.type] }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
