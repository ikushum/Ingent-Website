<template>
  <v-main>
    <AppNavigation :navigation-links="navigationLinks" />

    <MainHero id="home" />

    <AboutUs id="about" />

    <RacepassTestomonial id="testomonial" />

    <OurServices id="services" />

    <ContactUs id="contact" />

    <MainFooter :navigation-links="navigationLinks" />
  </v-main>
</template>

<script setup>
  import { useGoTo } from 'vuetify'

  const goTo = useGoTo({ offset: -50 })

  const navigationLinks = [
    {
      title: 'Home',
      handler: () => goTo('#home'),
    },
    {
      title: 'About',
      handler: () => goTo('#about'),
    },
    {
      title: 'Services',
      handler: () => goTo('#services'),
    },
    {
      title: 'Contact',
      handler: () => goTo('#contact'),
    },
  ]
</script>
