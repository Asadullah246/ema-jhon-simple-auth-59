
import {initializeApp} from "firebase/app";
import { getAnalytics} from "firebase/analytics";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyB39JQeWKmsqNsyJWtiYPr-FaR2eP9Dwx0",
  authDomain: "first-project-e4bbe.firebaseapp.com",
  projectId: "first-project-e4bbe",
  storageBucket: "first-project-e4bbe.appspot.com",
  messagingSenderId: "904828529026",
  appId: "1:904828529026:web:165519a827799323fa079b",
  measurementId: "G-HJSBR7CEPE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app)

export {analytics,auth}