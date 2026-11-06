<script setup>
import PhoneFrame from "./PhoneFrame.vue";
// 文件名与实际页面存在交叉，这里按截图内容映射：
// 训练页 = 统计.jpg，统计页 = 训练.jpg
import trainShot from "../../jpgs/统计.jpg";
import learnShot from "../../jpgs/学习.jpg";
import statsShot from "../../jpgs/训练.jpg";
</script>

<template>
  <section id="screens" class="section">
    <div class="shell">
      <div class="section-head section-head--center" data-reveal>
        <span class="kicker">SCREENS</span>
        <h2 class="section-title">简洁、专注、反馈即时。</h2>
        <p class="section-lead" style="margin-left: auto; margin-right: auto">
          训练、学习、统计三个页面，没有多余入口。打开就开始，做完就看得见进步。
        </p>
      </div>

      <div class="screens-grid">
        <div class="screen-item" data-reveal>
          <PhoneFrame
            :src="trainShot"
            alt="变にまび 训练页：逆向还原题，从「擦った」选择辞书形，显示用时与正确数"
            lazy
          />
          <div class="screen-caption">
            <b>训练</b>
            <span>填空 / 四选一 · 即时判分 · 计时</span>
          </div>
        </div>

        <div class="screen-item" data-reveal>
          <PhoneFrame
            :src="learnShot"
            alt="变にまび 学习页：动词三分类教程与判别流程"
            lazy
          />
          <div class="screen-caption">
            <b>学习</b>
            <span>分类教程 · 速查表 · 内置视频</span>
          </div>
        </div>

        <div class="screen-item" data-reveal>
          <PhoneFrame
            :src="statsShot"
            alt="变にまび 统计页：总体进度、分形态正确率与需要复习的动词"
            lazy
          />
          <div class="screen-caption">
            <b>统计</b>
            <span>分形态正确率 · 弱项 · 连胜</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
