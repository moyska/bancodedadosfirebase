import{initializeApp } from "firebase/app";
import{getfirestore } from "firebase/firestore";
import{getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgkWXpHNcDAqZtzxRKAIFTKOICnyrPBzo",
  authDomain: "bancodedadosturmab.firebaseapp.com",
  projectId: "bancodedadosturmab",
  storageBucket: "bancodedadosturmab.appspot.com",
  messagingSenderId: "1088341517571",
  appId: "1:1088341517571:web:724423610091326204b536"
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getfirestore(firebaseConfig);
const auth = getAuth(firebaseConfig);

export {db, auth};