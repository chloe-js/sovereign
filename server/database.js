import dotenv from "dotenv";
import { __dirname, path } from './utils.js';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, updateDoc } from 'firebase/firestore/lite';

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

const collections = Object.freeze({
    interviewers: collection(db, 'interviewers')
})

export async function getInterviewers(){
    try {
        const docs = await getDocs(collections.interviewers)
        const data = docs.docs.map(i => i.data())
        return data
    } catch(err){
        return {error: err, message: 'The available interviewers are not able to be loaded at this time.'}
    }
}

export async function postInterviewer(data){
    try {
        const docRef = await addDoc(collections.interviewers, data)
        const generatedId = docRef.id;
        await updateDoc(docRef, { key: generatedId });
    } catch(err){
        return {error: err, message: 'Unable to submit data, try again.'}
    }
}

