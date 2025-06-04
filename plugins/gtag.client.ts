export default defineNuxtPlugin(() => {
  if (process.env.NODE_ENV === 'production') {
    const { gtagId } = useRuntimeConfig().public;

    window.dataLayer = window.dataLayer || [];
    function gtag (){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', gtagId);
  }
});