import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAJ-6lbd6SzDhUmg_Kdzv1f2Qru-gLYqTc",
    authDomain: "usersapp-54b6f.firebaseapp.com",
    projectId: "usersapp-54b6f",
    storageBucket: "usersapp-54b6f.appspot.com",
    messagingSenderId: "63909889913",
    appId: "1:63909889913:web:dc2ec9c853b0a4f94e91a8"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase;