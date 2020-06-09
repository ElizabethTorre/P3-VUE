import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: "AIzaSyDcPDp3Bwre-SgG7fZ-GAVtIWQqHoIIFv8",
	authDomain: "trivia-553b3.firebaseapp.com",
	databaseURL: "https://trivia-553b3.firebaseio.com",
	projectId: "trivia-553b3",
	storageBucket: "trivia-553b3.appspot.com",
	messagingSenderId: "976304852313",
	appId: "1:976304852313:web:b7a5c14fabfd3281c91048",
};
	// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
