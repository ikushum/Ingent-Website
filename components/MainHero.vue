<template>
  <v-layout>
    <v-container
      class="d-flex align-center justify-center"
      :min-height="$vuetify.display.mdAndUp ? '100vh' : 550"
    >
      <div class="w-100 w-md-50 text-center mt-n16">
        <h1 class="text-h4 text-md-h2 font-weight-bold">
          Ingent Technology
        </h1>

        <div class="text-h5 text-medium-emphasis my-6">
          Empowering Innovation through custom Software Development
        </div>

        <div class="d-flex justify-center">
          <v-btn
            class="text-none"
            color="primary"
            flat
            rounded="lg"
            text="Contact Us"
            @click="goTo('#contact')"
          />
        </div>
      </div>

      <div class="v-bg position-absolute top-0 right-0 left-0 bottom-0">
        <div aria-hidden="true" class="overflow-hidden opacity-20 w-100 h-100" />
      </div>
    </v-container>
  </v-layout>
</template>

<script setup>
  import { useGoTo } from 'vuetify'

  const goTo = useGoTo({ offset: -50 })
</script>
