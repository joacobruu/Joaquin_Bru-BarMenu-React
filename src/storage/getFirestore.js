import firebase from "firebase";
import "firebase/firestore";


const firebaseConfig = {

  apiKey: "AIzaSyCDwE2Mc99B_Vk7Tfz8Lg_sj0k1dR1eIXg",

  authDomain: "proyecto-react-makeup.firebaseapp.com",

  projectId: "proyecto-react-makeup",

  storageBucket: "proyecto-react-makeup.appspot.com",

  messagingSenderId: "427869632538",

  appId: "1:427869632538:web:9918cede21c534a7ccf9a3"

};

const app = firebase.initializeApp(firebaseConfig);

export function getFirestore(){
  return firebase.firestore(app)
}
