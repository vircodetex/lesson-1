import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD3esVYRZpadmP3czJTiGC-oNpXw8696Ts",
  authDomain: "crwn-db-ce67a.firebaseapp.com",
  projectId: "crwn-db-ce67a",
  storageBucket: "crwn-db-ce67a.appspot.com",
  messagingSenderId: "1053280195516",
  appId: "1:1053280195516:web:75f8724b4266dbe367d1b9",
  measurementId: "G-4QTZFWKG0X",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
