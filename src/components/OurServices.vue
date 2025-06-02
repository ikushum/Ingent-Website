<template>
  <v-container class="px-5 my-10 py-10">
    <v-sheet
      class="mb-10 text-center"
      color="transparent"
    >
      <p class="text-body-2 text-primary">
        All in one place
      </p>

      <h1 class="text-h4 font-weight-bold my-2">
        Our Core Services
      </h1>

      <p class="text-body-1 text-medium-emphasis">
        From idea to launch, we deliver full-cycle development solutions.
      </p>
    </v-sheet>

    <v-row>
      <v-col
        v-for="(item, i) in features"
        :key="i"
        cols="12"
        lg="6"
      >
        <v-list-item
          class="px-0 px-md-10 mt-5"
          :subtitle="item.subtitle"
          :title="item.title"
        >
          <template #title>
            <p class="text-body-1 font-weight-bold pb-2">
              <v-icon
                class="mr-2"
                color="primary"
                icon="mdi-check"
                size="small"
              />

              {{ item.title }}
            </p>
          </template>

          <template #subtitle>
            <p class="text-subtitle-2 m-6">
              {{ item.subtitle }}
            </p>
          </template>
        </v-list-item>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  const features = [
    {
      icon: 'mdi-code-json',
      title: 'Web Development',
      subtitle:
        'We build scalable, modern web applications with robust frontend interfaces and powerful backend systems optimized for performance and user engagement.',
    },
    {
      icon: 'mdi-cellphone',
      title: 'Mobile App Development',
      subtitle:
        'We create engaging native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices while meeting your business objectives.',
    },
    {
      icon: 'mdi-palette',
      title: 'UI/UX Design',
      subtitle:
        'We design beautiful, intuitive user interfaces and experiences that delight your users, improve engagement, and help achieve your product goals through research-driven approaches.',
    },
    {
      icon: 'mdi-cloud',
      title: 'Cloud & DevOps',
      subtitle:
        'We implement secure, scalable cloud infrastructure and DevOps practices that optimize deployment workflows, reduce costs, and ensure your applications perform reliably at any scale.',
    },
  ]
</script>
