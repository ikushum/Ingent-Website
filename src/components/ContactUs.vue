<template>
  <v-container class="my-16">
    <div>
      <v-sheet
        class="mb-10 text-center"
        color="transparent"
      >
        <h1 class="text-h4 font-weight-bold mb-2">
          Get in touch
        </h1>

        <p class="text-body-1 text-medium-emphasis">
          Ready to collaborate, meet our team, or just say hello?
        </p>
      </v-sheet>

      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-sheet
            class="pa-8 elevation-10"
            rounded="lg"
          >
            <p class="font-weight-bold">
              <v-icon size="16">mdi-map-marker</v-icon>
              Kathmandu
            </p>
            <p class="text-body-2 mt-1 text-medium-emphasis">
              Kathmandu-10, Bagmati, Nepal
            </p>
          </v-sheet>
        </v-col>

        <v-col
          v-for="(item, i) in contactInfo"
          :key="i"
          cols="12"
          md="6"
        >
          <v-sheet
            class="pa-8 elevation-10"
            rounded="lg"
          >
            <p class="font-weight-bold">{{ item.title }}</p>

            <a
              class="text-body-2 text-primary text-decoration-none"
              :href="`mailto:${item.email}`"
            >
              {{ item.email }}
            </a>
          </v-sheet>
        </v-col>
      </v-row>
    </div>

  </v-container>
</template>

<script setup>

  const contactInfo = [
    {
      title: 'Say hello',
      email: 'contact@ingent.tech',
    },
    {
      title: 'Join our team',
      email: 'careers@ingent.tech',
    },
    {
      title: 'Meet CEO',
      email: 'ishan.subedi@ingent.tech',
    },
  ]
</script>
