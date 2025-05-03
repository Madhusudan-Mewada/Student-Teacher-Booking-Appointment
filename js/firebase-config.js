// Replace with your own Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBYd95BFgP9k6QY6CSgvmYd8uml-TGd4-s",
  authDomain: "student-teacher-appointm-e2ec8.firebaseapp.com",
  projectId: "student-teacher-appointm-e2ec8",
  storageBucket: "student-teacher-appointm-e2ec8.firebasestorage.app",
  messagingSenderId: "437824283023",
  appId: "1:437824283023:web:7a5b0c778b83b21c69ebfa",
  measurementId: "G-C9TTVKK543"
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  