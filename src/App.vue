<script setup>
import { onBeforeUnmount, onMounted } from "vue";
import SiteHeader from "./components/SiteHeader.vue";
import HeroSection from "./components/HeroSection.vue";
import FeatureGrid from "./components/FeatureGrid.vue";
import FormExplorer from "./components/FormExplorer.vue";
import UnlockSection from "./components/UnlockSection.vue";
import WordLibrary from "./components/WordLibrary.vue";
import ScreensSection from "./components/ScreensSection.vue";
import DownloadSection from "./components/DownloadSection.vue";
import FaqSection from "./components/FaqSection.vue";
import SiteFooter from "./components/SiteFooter.vue";

let observer = null;

onMounted(() => {
  const targets = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );
  targets.forEach((el) => observer.observe(el));
});

onBeforeUnmount(() => observer?.disconnect());
</script>

<template>
  <SiteHeader />
  <main id="top">
    <HeroSection />
    <FeatureGrid />
    <FormExplorer />
    <UnlockSection />
    <WordLibrary />
    <ScreensSection />
    <DownloadSection />
    <FaqSection />
  </main>
  <SiteFooter />
</template>
