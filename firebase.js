
 
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAuth } from "firebase/auth";
  
  const firebaseConfig = {
    apiKey: "AIzaSyDBO8sgqpHanPbfLK_Dc_nhGEolp_Da_CI",
    authDomain: "form-25f3e.firebaseapp.com",
    projectId: "form-25f3e",
    storageBucket: "form-25f3e.firebasestorage.app",
    messagingSenderId: "843390232252",
    appId: "1:843390232252:web:35957fafc012be4ecc92b9",
    measurementId: "G-41YNS9CWBV"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export { auth }