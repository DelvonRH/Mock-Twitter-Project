// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { getDatabase} from "firebase/database";
import {
  getFirestore,
  collection,
  addDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCznVOql_uZQSEIqlJUFmsDeZdswcWcFvQ",
  authDomain: "my-twitter-app-fb31a.firebaseapp.com",
  databaseURL: "https://my-twitter-app-fb31a-default-rtdb.firebaseio.com",
  projectId: "my-twitter-app-fb31a",
  storageBucket: "my-twitter-app-fb31a.appspot.com",
  messagingSenderId: "992508780233",
  appId: "1:992508780233:web:4808ef004db6db878db718",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const rtdb = getDatabase(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (
  firstName,
  lastName,
  userName,
  email,
  password
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, userName, email, password);
    const user = res.user;
     await updateProfile(auth.currentUser, { displayName: userName }).catch(
       (err) => console.log(err)
     );
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      firstName,
      lastName,
      userName,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  rtdb,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
};

