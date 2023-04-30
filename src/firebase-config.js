// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//below fex lines are added by me
import {getFirestore} from 'firebase/firestore'



//we are adding the below package separately appart from the othher code we did from the firebase website 
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: "AIzaSyD8snZ-bNau1du79K9ESYYUJ1Mq48Y4KA0",
  authDomain: "blogging-website-f041c.firebaseapp.com",
  projectId: "blogging-website-f041c",
  storageBucket: "blogging-website-f041c.appspot.com",
  messagingSenderId: "907582864379",
  appId: "1:907582864379:web:2a36b61cf76e3db5e2295e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// below lines we wrote to call during authentication and firestore access
export const db =getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();