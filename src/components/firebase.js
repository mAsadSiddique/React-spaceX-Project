import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDBl1TqP2-FN_psDZ4F917J8gf1I9cgJcc",
    authDomain: "space-x-98148.firebaseapp.com",
    projectId: "space-x-98148",
    storageBucket: "space-x-98148.appspot.com",
    messagingSenderId: "1017408399748",
    appId: "1:1017408399748:web:1a522f6cbe66f3d458d5d1"
};

firebase.initializeApp(firebaseConfig);

export default firebase;