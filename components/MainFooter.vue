<template>
  <v-footer class="text-center d-flex flex-column bg-background">
    <v-sheet
      class="d-flex flex-column flex-sm-row justify-space-between align-center px-4 py-1"
      variant="flat"
      width="100%"
    >
      <p class="text-caption py-4">
        &copy; {{ new Date().getFullYear() }} Ingent Technology. All rights reserved.
      </p>

      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon.icon"
          :href="icon.href"
          :icon="icon.icon"
          size="small"
          target="_blank"
          variant="text"
        />
      </div>
    </v-sheet>
  </v-footer>
</template>

<script setup>
  const icons = [
    // 'mdi-facebook',
    {
      icon: 'mdi-twitter',
      href: 'https://x.com/IngentTech',
    },
    {
      icon: 'mdi-linkedin',
      href: 'http://linkedin.com/company/ingent-technology',
    },
    // 'mdi-instagram',
  ]
</script>
