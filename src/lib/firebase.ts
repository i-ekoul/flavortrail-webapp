// Firebase configuration and initialization
import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZHEH0PzPQr0ywjhSN6xQT6NPZlF703xM",
  authDomain: "flavortrail-webapp.firebaseapp.com",
  projectId: "flavortrail-webapp",
  storageBucket: "flavortrail-webapp.firebasestorage.app",
  messagingSenderId: "617303162758",
  appId: "1:617303162758:web:7bc300edf259098d65f607",
  measurementId: "G-FDM31VGWQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Connect to emulators in development (optional)
if (process.env.NODE_ENV === 'development') {
  // Uncomment these lines if you want to use Firebase emulators for development
  // connectAuthEmulator(auth, "http://localhost:9099");
  // connectFirestoreEmulator(db, 'localhost', 8080);
}

export default app;
