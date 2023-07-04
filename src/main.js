import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faBars, faX, faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Collapse from './components/Collapse.vue'

library.add(faLinkedin)
library.add(faFacebook)
library.add(faEnvelope)
library.add(faBars)
library.add(faX)
library.add(faCaretDown)
library.add(faCaretRight)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('collapse', Collapse)

app.use(router)

app.mount('#app')
