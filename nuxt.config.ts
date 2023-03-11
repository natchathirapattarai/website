export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, user-scalable=no',
      title: 'Natchathirapattarai',
      meta: [
        { name: 'description', content: 'Natchathirapattarai -- Drama school for learning Acting, VJ, RJ, Dubbing, Direction, Newsreading, Editing & Music' }
      ],
      link: [
        { rel: 'stylesheet', href: 'css/main.css' }
      ],
      script: [
        { type: 'text/javascript', src: 'js/jquery.min.js', body: true },
        { type: 'text/javascript', src: 'js/browser.min.js', body: true },
        { type: 'text/javascript', src: 'js/breakpoints.min.js', body: true },
        { type: 'text/javascript', src: 'js/util.js', body: true },
        { type: 'text/javascript', src: 'js/main.js', body: true }
      ]
    },
  },
  appConfig: {
    name: 'Natchathirapattarai',
    links: [
      {
        href: '/',
        text: 'Homepage'
      }
    ]
  },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      gtagAnalyticsId: ''
    }
  }
})
