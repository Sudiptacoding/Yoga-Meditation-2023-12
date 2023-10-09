import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB19G4pJeUix_6RRe1eHXpBWrAXmQSPrZs",
    authDomain: "assignment9-727d1.firebaseapp.com",
    projectId: "assignment9-727d1",
    storageBucket: "assignment9-727d1.appspot.com",
    messagingSenderId: "1040549194251",
    appId: "1:1040549194251:web:765d5059cbb0fbba46750e"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;