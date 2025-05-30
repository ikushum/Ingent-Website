<template>
  <v-main>
    <AppNavigation aria-label="Main navigation" :navigation-links="navigationLinks" />

    <MainHero id="home" aria-label="Hero section" />

    <AboutUs id="about" aria-label="About us section" />

    <RacepassTestomonial id="testomonial" aria-label="Testimonials" />

    <OurServices id="services" aria-label="Our services" />

    <ContactUs id="contact" aria-label="Contact us" />

    <MainFooter aria-label="Footer" :navigation-links="navigationLinks" />
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
