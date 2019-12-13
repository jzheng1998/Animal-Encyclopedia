import firebase from 'firebase'
import '@firebase/firestore'
import superSecretKeys from './credentials'

// initialize firebase with loaded configuration
firebase.initializeApp(superSecretKeys);
  
// instance a firebase Firestore connection
const store = firebase.firestore()
export { store as firestore }

// instance a firebase auth session
const auth = firebase.auth()
export { auth as auth }

// instance a firebase storage
const storage = firebase.storage()
export { storage as storage }