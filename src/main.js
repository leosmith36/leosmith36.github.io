import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faBars, faX, faCaretRight, faCaretDown, faPersonRunning, faBook, faSchool } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Collapse from './components/common/Collapse.vue'
import CollapsibleSection from './components/common/CollapsibleSection.vue'

library.add(faLinkedin)
library.add(faFacebook)
library.add(faEnvelope)
library.add(faGithub)
library.add(faBars)
library.add(faX)
library.add(faCaretDown)
library.add(faCaretRight)
library.add(faPersonRunning)
library.add(faBook)
library.add(faSchool)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('collapse', Collapse)
app.component('collapsible-section', CollapsibleSection)

app.use(router)

app.mount('#app')
