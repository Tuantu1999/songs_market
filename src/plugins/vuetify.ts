/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          black: '#000000',
          primary: '#00FFFF',
          p2: '#222125',
          grey1: '#A2A2B0',
          grey2: '#797983',
          grey3: '#2C2C31',
          grey4: '#6D6F81',
          dark: '#131212',
          semanticGreen: '#29B996',
          semanticRed: '#D75048',
          semanticDurability: '#4747F5',
          secondary: '#E3F2FD',
          error: '#D50000',
          success: '#4CAF50',
        },
      },
    },
  },
})
