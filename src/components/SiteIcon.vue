<script setup>
defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 20 },
  strokeWidth: { type: [Number, String], default: 1.8 },
});
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <template v-if="name === 'download'">
      <path d="M12 3v12" />
      <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
      <path d="M4 17v2.5A1.5 1.5 0 0 0 5.5 21h13A1.5 1.5 0 0 0 20 19.5V17" />
    </template>
    <template v-else-if="name === 'external'">
      <path d="M14 4h6v6" />
      <path d="M20 4 10 14" />
      <path d="M19 13v5.5A1.5 1.5 0 0 1 17.5 20h-11A1.5 1.5 0 0 1 5 18.5v-11A1.5 1.5 0 0 1 6.5 6H12" />
    </template>
    <template v-else-if="name === 'layers'">
      <path d="m12 3 9 5-9 5-9-5z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 16 9 5 9-5" />
    </template>
    <template v-else-if="name === 'swap'">
      <path d="M4 9h16" />
      <path d="m16 5 4 4-4 4" />
      <path d="M20 15H4" />
      <path d="m8 11-4 4 4 4" />
    </template>
    <template v-else-if="name === 'keyboard'">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M6 10h.01M9 10h.01M12 10h.01M15 10h.01M18 10h.01M6 13h.01M18 13h.01M9 13h6" />
      <path d="M8 16h8" />
    </template>
    <template v-else-if="name === 'unlock'">
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 7.6-1.7" />
      <path d="M12 15v2" />
    </template>
    <template v-else-if="name === 'book'">
      <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3H11v17H5.5A2.5 2.5 0 0 0 3 22z" />
      <path d="M21 5.5A2.5 2.5 0 0 0 18.5 3H13v17h5.5A2.5 2.5 0 0 1 21 22z" />
      <path d="M6 7h2M6 10h2M16 7h2M16 10h2" />
    </template>
    <template v-else-if="name === 'timer'">
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l3 2" />
      <path d="M9 2h6" />
      <path d="M12 5V2.5" />
    </template>
    <template v-else-if="name === 'chart'">
      <path d="M4 20V11M10 20V5M16 20v-7M22 20V8" />
      <path d="M2 20h20" />
    </template>
    <template v-else-if="name === 'shield'">
      <path d="M12 3l8 3v6c0 4.6-3.3 7.9-8 9-4.7-1.1-8-4.4-8-9V6z" />
      <path d="m8.5 12 2.5 2.5 4.5-4.5" />
    </template>
    <template v-else-if="name === 'lock'">
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </template>
    <template v-else-if="name === 'check'">
      <path d="m4 12 5 5L20 6" />
    </template>
    <template v-else-if="name === 'spark'">
      <path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />
    </template>
    <template v-else-if="name === 'globe'">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z" />
    </template>
    <template v-else-if="name === 'phone'">
      <rect x="6" y="2" width="12" height="20" rx="2.5" />
      <path d="M10 5h4" />
      <path d="M10.5 19h3" />
    </template>
  </svg>
</template>
