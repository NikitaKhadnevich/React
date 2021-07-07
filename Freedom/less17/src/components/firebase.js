import firebase from 'firebase'

const config = {
   apiKey: "AIzaSyBKXelr1BvrK4KBPxykfwow0j1gkZrzmSE",
   authDomain: "mf-react-freedom-l1.firebaseapp.com",
   projectId: "mf-react-freedom-l1",
   storageBucket: "mf-react-freedom-l1.appspot.com",
   messagingSenderId: "795391392806",
   appId: "1:795391392806:web:585ce870d9fbcf44dc3ae7",
   measurementId: "G-7KPGVE0VF7"
};

firebase.initializeApp(config)

export const database = firebase.database
export const auth = firebase.auth()
export default firebase;

