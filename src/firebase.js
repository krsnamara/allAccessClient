// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    GoogleAuthProvider,
    GithubAuthProvider, 
    getAuth, 
    signInWithPopup, 
    signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA9eb23I7suE7X7KdWYnU06VLJ9AH32SE",
  authDomain: "react-peoples-service-app.firebaseapp.com",
  projectId: "react-peoples-service-app",
  storageBucket: "react-peoples-service-app.appspot.com",
  messagingSenderId: "6980999759",
  appId: "1:6980999759:web:a34e6a13eb6585c264283a"
};

// Initialize Firebase
// eslint-disable-next-line 
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider(); // Add GitHub provider

// Get the current auth instance
export const auth = getAuth();

// Set up auth functions
export function loginWithGoogle() {
  signInWithPopup(auth, provider);
}

export function loginWithGitHub() {
  signInWithPopup(auth, githubProvider);
}

// set up auth funcitons
export function login() {
    signInWithPopup(auth, provider);
}

export function logout() {
    return signOut(auth);
}