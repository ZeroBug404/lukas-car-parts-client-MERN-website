// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCKqSuaCpXvWMgt9sfl8BQbg2Szr7DegwE",
//   authDomain: "lukas-carparts.firebaseapp.com",
//   projectId: "lukas-carparts",
//   storageBucket: "lukas-carparts.appspot.com",
//   messagingSenderId: "198701159639",
//   appId: "1:198701159639:web:2d3e5290758f5ff5d2cc92"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;