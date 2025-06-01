if (import.meta.env.MODE === 'production') {
  window.dataLayer = window.dataLayer || [];
  function gtag (){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', import.meta.env.VITE_GOOGLE_ANALYTICS_KEY);
}
