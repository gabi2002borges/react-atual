import firebase from "firebase"
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyAfkSuwxuuofQc4rMxdH65M4Ofh80Zn4y0",
  authDomain: "authentication-210b5.firebaseapp.com",
  databaseURL: "https://authentication-210b5-default-rtdb.firebaseio.com",
  projectId: "authentication-210b5",
  storageBucket: "authentication-210b5.appspot.com",
  messagingSenderId: "107202895763",
  appId: "1:107202895763:web:063fb96137f52c37a85266"
};



firebase.initializeApp(firebaseConfig);

export default firebase   