import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCpwBpTg-Ny8ktzkuKlV3Bi0MtuGdrgA3E",
    authDomain: "live-chat-app-1a684.firebaseapp.com",
    projectId: "live-chat-app-1a684",
    storageBucket: "live-chat-app-1a684.appspot.com",
    messagingSenderId: "727212805665",
    appId: "1:727212805665:web:1e1e6cee26a959e5029d60",
    measurementId: "G-LFBT2W4YDN"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  let db = getFirestore(firebaseApp);
  let appAuth = getAuth(firebaseApp);

  export{db,appAuth};
