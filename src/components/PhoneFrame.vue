<script setup>
defineProps({
  src: { type: String, required: true },
  alt: { type: String, required: true },
  hero: { type: Boolean, default: false },
  lazy: { type: Boolean, default: false },
});
</script>

<template>
  <div class="phone" :class="{ 'phone--hero': hero }">
    <div class="phone-screen phone-screen--shot">
      <img
        class="phone-shot-img"
        :src="src"
        :alt="alt"
        :loading="lazy ? 'lazy' : 'eager'"
        decoding="async"
      />
    </div>
  </div>
</template>
