/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import '@/plugins/gtag'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Styles
import 'unfonts.css'
import '@/styles/global.scss'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
