import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import './assets/main.css'

//  import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// Import the Auth0 configuration
import { domain, clientId } from '../auth_config.json';

// Import the plugin here
import { Auth0Plugin } from './oauth';

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    );
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
