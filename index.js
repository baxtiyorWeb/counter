// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import {
  getDatabase,
  set,
  ref,
  update,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyBcfbkEKW5RjsFzXikxjycfo1nmrlGItG8",
  authDomain: "developer-16e4e.firebaseapp.com",
  databaseURL: "https://developer-16e4e-default-rtdb.firebaseio.com",
  projectId: "developer-16e4e",
  storageBucket: "developer-16e4e.appspot.com",
  messagingSenderId: "770168986630",
  appId: "1:770168986630:web:4d9f3b55bb242030183787",
  measurementId: "G-41RRC6WQR7",
};

// Initializ  e Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

// selectors

let plusCount = document.querySelector("#plus-count");
let minusCount = document.querySelector("#minus-count");
let h1 = document.querySelector("h1");

// firebase worked

let count = 0;
function seCountPlus(plusCount) {
  let html = (h1.innerHTML = count += 1);

  const db = getDatabase();
  update(ref(db, "counter/" + "plusCount"), {
    plusCount: html,
  });
  const dbRef = ref(getDatabase());
  get(child(dbRef, `counter/plusCount`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        h1.innerHTML = snapshot.val().plusCount;
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
function seCountMinus(plusCount) {
  let html = (h1.innerHTML = count -= 1);

  const db = getDatabase();
  update(ref(db, "counter/" + "plusCount"), {
    plusCount: html,
  });
  const dbRef = ref(getDatabase());
  get(child(dbRef, `counter/minusCount`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        h1.innerHTML = snapshot.val().plusCount;
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

plusCount.addEventListener("click", seCountPlus);
minusCount.addEventListener("click", seCountMinus);
