import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyATaAwd0y6R4Lm8vvkR4KXWCika0Pz5ZtU",
  authDomain: "json-server-7bc81.firebaseapp.com",
  projectId: "json-server-7bc81",
  storageBucket: "json-server-7bc81.appspot.com",
  messagingSenderId: "436617051444",
  appId: "1:436617051444:web:83b446e486212622ea7961",
  measurementId: "G-43LVJ7H9BR",
};

firebase.initializeApp(firebaseConfig);

// export const database = firebase.database();

export const db = firebase.firestore();
