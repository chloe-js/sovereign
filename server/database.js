import dotenv from "dotenv";
import { __dirname, path } from './utils.js';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore/lite';

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
    interviewers: collection(db, 'interviewers'),
    interviews: collection(db, 'interviews'),
})

export async function getInterviewers(){
    const docs = await getDocs(collections.interviewers)
    try {
        const data = docs.docs.map(i => i.data())
        return data
    } catch(err){
        return {error: err, message: 'The available interviewers are not able to be loaded at this time.'}
    }
}

export async function getInterviews(){
    const docs = await getDocs(collections.interviews)
    try {
        const data = docs.docs.map(i => i.data())
        return data
    } catch(err){
        return {error: err, message: 'The available interviews are not able to be loaded at this time.'}
    }
}

export async function postInterviewer(data){
    const docRef = await addDoc(collections.interviewers, data)
    try {
        const generatedId = docRef.id;
        await updateDoc(docRef, { key: generatedId });
    } catch(err){
        return {error: err, message: 'Unable to submit data, try again.'}
    }
}

export async function postInterview(data){
    const docRef = await addDoc(collections.interviews, data)
    try {
        const generatedId = docRef.id;
        await updateDoc(docRef, { key: generatedId });
    } catch(err){
        return {error: err, message: 'Unable to submit data, try again.'}
    }
}

export async function deleteInterview(key){
    const docRef = doc(db, 'interviews', key)
    try {
        await deleteDoc(docRef);
    }catch(err){
        return {error: err, message: 'Could not remove appointment'}
    }
}
