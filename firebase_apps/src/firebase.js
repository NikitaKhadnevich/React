import firebase from 'firebase' // Импортим

var config = {
   apiKey: "AIzaSyANEValjg35HOmF4ngEFYUOzJQOQwx2fx8",
   authDomain: "rogaldorn-c42de.firebaseapp.com",
   projectId: "rogaldorn-c42de",
   storageBucket: "rogaldorn-c42de.appspot.com",
   messagingSenderId: "191314443486",
   appId: "1:191314443486:web:e5de82a7896eb083d2164f",
   measurementId: "G-PBRRGBS8N6"
}; // Забираем конфиг из сонсоли https://console.firebase.google.com/

firebase.initializeApp(config)

export const database = firebase.database // Экспортим базу
export default firebase // Экспортим сам firebase