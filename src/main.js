import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL = 'https://cdn.jsdelivr.net/gh/b1acksoil/mgs-site-assets@master'

// FontAwesome Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faNewspaper, faVideo, faUser, faHeart, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faHome, faNewspaper, faVideo, faUser, faHeart, faBars
)

createApp(App)
  .use(router)
  .component('fa-icon', FontAwesomeIcon)
  .mount('#app')
