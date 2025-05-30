<template>
  <v-navigation-drawer v-model="drawer" color="background" disable-resize-watcher>
    <v-list nav>
      <v-list-item
        v-for="link in props.navigationLinks"
        :key="link.title"
        link
        :title="link.title"
        @click="link.handler"
      />
    </v-list>
  </v-navigation-drawer>

  <v-app-bar color="background" flat>
    <template #prepend>
      <v-app-bar-nav-icon
        v-if="$vuetify.display.smAndDown"
        @click="drawer = !drawer"
      />
    </template>

    <div class="d-flex flex-1-1-0 ps-md-4">
      <v-avatar image="@/assets/logo.png" />
    </div>

    <div class="d-md-flex d-none ga-4 mx-auto">
      <v-btn
        v-for="link in props.navigationLinks"
        :key="link.title"
        class="text-none"
        :text="link.title"
        @click="link.handler"
      />
    </div>

    <div class="d-flex flex-1-1-0 mr-5">
      <v-btn
        class="text-none ms-auto"
        color="primary"
        rounded="lg"
        text="Contact Us"
        variant="flat"
        @click="goTo('#contact')"
      />

    </div>
  </v-app-bar>
</template>

<script setup>
  import { shallowRef } from 'vue'
  import { useGoTo } from 'vuetify'

  const goTo = useGoTo({ offset: -50 })

  const props = defineProps({
    navigationLinks: {
      type: Array,
      required: true,
    },
  })

  const drawer = shallowRef(false)
</script>

<style scoped>
  .v-bg {
    filter: blur(56px);
    pointer-events: none;
  }

  .v-bg > div {
    background: linear-gradient(
      to bottom right,
      rgb(var(--v-theme-primary)),
      rgb(var(--v-theme-error))
    );
    z-index: -10;
    clip-path: polygon(20% 50%, 27% 66%, 41% 66%, 50% 50%, 41% 34%, 27% 34%, 20% 50%, 55% 50%, 62% 66%, 76% 66%, 85% 50%, 76% 34%, 62% 34%, 55% 50%, 30% 50%, 37% 66%, 51% 66%, 60% 50%, 51% 34%, 37% 34%, 30% 50%);
  }
</style>
