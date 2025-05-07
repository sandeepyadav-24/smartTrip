// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import admin from "firebase-admin";
import serviceAccount from "path/to/serviceAccountKey.json"; // adjust path
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ_hq5d19jIl1cclQI9X0fi1PSLb29-cI",
  authDomain: "fir-auth-3e021.firebaseapp.com",
  projectId: "fir-auth-3e021",
  storageBucket: "fir-auth-3e021.firebasestorage.app",
  messagingSenderId: "995883614896",
  appId: "1:995883614896:web:98a977e86d618614727175",
  measurementId: "G-JE2Y4WX8WT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });
}

export { admin };
