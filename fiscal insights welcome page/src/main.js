import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* Import Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faCalculator, 
  faChartPie, 
  faChartLine, 
  faBullseye,
  faLightbulb,
  faStar,
  faRocket
} from '@fortawesome/free-solid-svg-icons'

/* Add icons to the library */
library.add(
  faCalculator, 
  faChartPie, 
  faChartLine, 
  faBullseye,
  faLightbulb,
  faStar,
  faRocket
)

const app = createApp(App)

/* Register Font Awesome component */
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.mount('#app')
