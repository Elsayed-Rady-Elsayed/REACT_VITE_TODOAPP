import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC6iK6Lrux-4MEpEc-zJYFrdZaPLjGUhNQ",
  authDomain: "todoreactapp-74bab.firebaseapp.com",
  databaseURL:
    "https://todoreactapp-74bab-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todoreactapp-74bab",
  storageBucket: "todoreactapp-74bab.appspot.com",
  messagingSenderId: "590837115647",
  appId: "1:590837115647:web:c608d9ebb993d4e2427aca",
  measurementId: "G-VG9R1F5WT0",
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
