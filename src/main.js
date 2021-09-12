import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// FontAwesome Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faNewspaper, faUser, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faHome, faNewspaper, faUser, faHeart
)

createApp(App)
  .use(router)
  .component('fa-icon', FontAwesomeIcon)
  .mount('#app')
