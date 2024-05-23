import dotenv from "dotenv";
import { __dirname, path } from './utils.js';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

dotenv.config({
    path: path.resolve(__dirname, './.env')
});

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "sovereign-b9638.firebaseapp.com",
  projectId: "sovereign-b9638",
  storageBucket: "sovereign-b9638.appspot.com",
  messagingSenderId: "278396361079",
  appId: "1:278396361079:web:104c398aca94cf679a6972"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)

export async function getInterviewers(){
    const interviewers = collection(db, 'interviewers')
    try {
        const docs = await getDocs(interviewers)
        const data = docs.docs.map(i => i.data())
        console.log(data)
    } catch(err){
        console.log(err)
        return {error: err, message: 'The available interviewers are not able to be loaded at this time.'}
    }
}

