
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHoSf-2Km_wjBvT9gdo9qJdZf1q6l1cEg",
  authDomain: "travel-to-world-7da9f.firebaseapp.com",
  projectId: "travel-to-world-7da9f",
  storageBucket: "travel-to-world-7da9f.appspot.com",
  messagingSenderId: "808464019556",
  appId: "1:808464019556:web:2ddc85fa6bccfdb514ef71",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
