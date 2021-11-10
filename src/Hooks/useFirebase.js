import { useEffect, useState } from 'react';
import firebaseConfig from '../Firebase/Firebase.config';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	updateProfile,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';
import axios from 'axios';

firebaseConfig();
const useFirebase = () => {
	const auth = getAuth();
	const [user, setUser] = useState();
	const [error, setError] = useState();

	const googleProvider = new GoogleAuthProvider();
	const googleLogin = () => {
		signInWithPopup(auth, googleProvider)
			.then(res => {
				setUser(res.user);
				setError('');
			})
			.catch(error => {
				// Handle Errors here.
				const errorMessage = error.message;
				setError(errorMessage);
				// ...
			});
	};

	const register = (name, email, password) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(res => {
				// Signed in
				const user = { email, displayName: name };
				updateProfile(auth.currentUser, {
					displayName: name,
				});
				setUser(user);
				setError('');
				axios
					.post('https://agile-beyond-99774.herokuapp.com/users', user)
					.then(res => {
						console.log(res);
						res.data && alert('User Created Successfully');
					});
				// ...
			})
			.catch(error => {
				const errorMessage = error.message;
				setError(errorMessage);
				// ..
			});
	};

	const login = (email, password) => {
		signInWithEmailAndPassword(auth, email, password)
			.then(res => {
				// Signed in
				const user = res.user;
				setUser(user);
				setError('');
				// ...
			})
			.catch(error => {
				const errorMessage = error.message;
				setError(errorMessage);
			});
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			if (user) {
				setUser(user);
			} else {
			}
		});
		return unsubscribe;
	}, [auth]);

	const logout = () => {
		signOut(auth).then(() => {
			// Sign-out successful.
			alert('Sign-out successful');
			setUser(null);
		});
	};

	console.log(user);
	return { user, error, googleLogin, register, login, logout };
};

export default useFirebase;
