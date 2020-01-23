import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import database from './firestore'

Vue.config.productionTip = false

let ref = database.collection('Carousel');

ref.get().then(querySnapshot => {
  querySnapshot.forEach(doc => {
    console.log(doc.data())
  });
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')