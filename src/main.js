import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'preline'

library.add(faLinkedin)
library.add(faFacebook)
library.add(faEnvelope)
library.add(faBars)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
