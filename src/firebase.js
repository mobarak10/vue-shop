import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAeN124F_kzxEzQfwnVbQ9jA96rhlCwx24",
    authDomain: "vue-shop-f6fd7.firebaseapp.com",
    databaseURL: "https://vue-shop-f6fd7.firebaseio.com",
    projectId: "vue-shop-f6fd7",
    storageBucket: "vue-shop-f6fd7.appspot.com",
    messagingSenderId: "262326708213",
    appId: "1:262326708213:web:14f47548e0e0ac9489a2bc",
    measurementId: "G-SZ59SQVGL2"
  };

  export const fb = firebase.initializeApp(firebaseConfig);