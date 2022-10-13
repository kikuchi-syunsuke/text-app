import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBeilWhW4WYmdx4qM6i6woOEx7WYrjPsuU",
    authDomain: "text-app-ecc5e.firebaseapp.com",
    projectId: "text-app-ecc5e",
    storageBucket: "text-app-ecc5e.appspot.com",
    messagingSenderId: "330031838648",
    appId: "1:330031838648:web:f83a5e3f00479ae46e0b4d"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export default db;