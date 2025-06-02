<template>
  <v-footer class="text-center d-flex flex-column py-sm-16 py-8 mt-10">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in props.navigationLinks"
        :key="link.title"
        class="mx-2 text-none"
        rounded
        :text="link.title"
        variant="text"
        @click="link.handler"
      />
    </v-row>

    <div class="my-5">
      <v-btn
        v-for="icon in icons"
        :key="icon.icon"
        class="mx-4"
        :href="icon.href"
        :icon="icon.icon"
        target="_blank"
        variant="text"
      />
    </div>

    <p class="text-caption">
      &copy; {{ new Date().getFullYear() }} Ingent Technology. All rights reserved.
    </p>
  </v-footer>
</template>

<script setup>
  const props = defineProps({
    navigationLinks: {
      type: Array,
      required: true,
    },
  })

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
