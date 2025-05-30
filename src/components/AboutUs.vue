<template>
  <v-layout class="pb-10">
    <v-container>
      <v-row align="center">
        <v-col
          v-if="$vuetify.display.mdAndUp"
          cols="12"
          md="6"
        >
          <v-img
            class="rounded-xl"
            color="surface-light"
            cover
            max-height="440"
            position="center"
            src="@/assets/about.avif"
          />
        </v-col>

        <v-col
          class="pa-md-12 pa-6 text-center text-md-left"
          cols="12"
          md="6"
        >
          <v-responsive
            class="mx-auto"
            max-width="500"
          >
            <h1 class="text-h4 font-weight-bold mb-4">
              We're here to help
            </h1>

            <p class="text-subtitle-2 text-medium-emphasis mb-6">
              Ingent Technology is a team of passionate developers, designers, and problem-solvers dedicated to crafting impactful software solutions. We partner with businesses of all sizes to turn ideas into scalable digital products. With a focus on quality, transparency, and innovation, we help our clients move faster and smarter in an ever-changing tech landscape.
            </p>

            <v-btn
              class="mr-4 text-none"
              color="primary"
              rounded="lg"
              text="Contact Us"
              variant="flat"
              @click="goTo('#contact')"
            />
          </v-responsive>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script setup>
  import { useGoTo } from 'vuetify'

  const goTo = useGoTo({ offset: -50 })
</script>
