import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

import { getFirestore, setDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArYqgBxAByRMomXDTE7THiflk6XHhJaW8",
  authDomain: "webproject-ffcb8.firebaseapp.com",
  projectId: "webproject-ffcb8",
  storageBucket: "webproject-ffcb8.firebasestorage.app",
  messagingSenderId: "446274232915",
  appId: "1:446274232915:web:d255654fd1baba4911dca6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export async function signUp(
  email: string,
  password: string,
  firstname: string,
  lastname: string
) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    const docRef = doc(db, "users", user.uid);
    const userData = {
      email: user.email,
      firstname,
      lastname,
    };
    await setDoc(docRef, userData);
    return user;
  } catch (e) {
    console.log(e);
  }
}

export async function login(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (e) {
    console.log(e);
  }
}

export async function resetPassword(email: string) {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (e) {
    console.log(e);
  }
}

export function getUser() {
  const user = auth.currentUser;
  return user;
}
