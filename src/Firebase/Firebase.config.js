// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = () =>
	initializeApp({
		apiKey: 'AIzaSyBx-Vlih8gvUkbx9lv4Pa5q-5uK2orF_ys',
		authDomain: 'babycare-3bbef.firebaseapp.com',
		projectId: 'babycare-3bbef',
		storageBucket: 'babycare-3bbef.appspot.com',
		messagingSenderId: '749862232934',
		appId: '1:749862232934:web:173e5deb4edfaba63b1ea7',
	});

export default firebaseConfig;
