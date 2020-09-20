import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCObbaRFJwdDVvihQ96V3kUDiLN8CQreDw",
    authDomain: "travel-guru-d8acb.firebaseapp.com",
    databaseURL: "https://travel-guru-d8acb.firebaseio.com",
    projectId: "travel-guru-d8acb",
    storageBucket: "travel-guru-d8acb.appspot.com",
    messagingSenderId: "143940676519",
    appId: "1:143940676519:web:2dd82cd4f8aed359c4a482"
  };
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;