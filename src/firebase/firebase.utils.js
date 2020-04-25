import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAs1X3vTAbnvU04caSc6XRE9ahMhasSdUA",
    authDomain: "e-clothing-da92e.firebaseapp.com",
    databaseURL: "https://e-clothing-da92e.firebaseio.com",
    projectId: "e-clothing-da92e",
    storageBucket: "e-clothing-da92e.appspot.com",
    messagingSenderId: "1086592737238",
    appId: "1:1086592737238:web:e3959d4f21d124c9dd0e77",
    measurementId: "G-H15ZMZNKQV"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    // if there is no signIn return nothing
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error during creating user', error.message)
        }
    }

    return userRef;
}



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({'prompt': 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
 