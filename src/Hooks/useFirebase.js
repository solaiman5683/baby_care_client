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
	deleteUser,
} from 'firebase/auth';
import axios from 'axios';

firebaseConfig();
const useFirebase = () => {
	const auth = getAuth();
	const [user, setUser] = useState();
	const [error, setError] = useState();
	const [loading, setLoading] = useState(true);

	const googleProvider = new GoogleAuthProvider();
	const googleLogin = (history, location) => {
		signInWithPopup(auth, googleProvider)
			.then(res => {
				setUser(res.user);
				setError('');
				const userInfo = {
					email: res.user.email,
					displayName: res.user.displayName,
				};
				axios
					.put('https://agile-beyond-99774.herokuapp.com/users', userInfo)
					.then(res => {
						console.log(res);
						res.data && alert('User Created Successfully');
					});
				const redirectUrl = location?.state?.from?.pathname
					? location.state.from.pathname
					: '/';
				history.replace(redirectUrl);
			})
			.catch(error => {
				// Handle Errors here.
				const errorMessage = error.message;
				setError(errorMessage);
				// ...
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const register = (name, email, password, history, location) => {
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
					.put('https://agile-beyond-99774.herokuapp.com/users', user)
					.then(res => {
						console.log(res);
						res.data && alert('User Created Successfully');
					});
				history.replace('/');
				// ...
			})
			.catch(error => {
				const errorMessage = error.message;
				setError(errorMessage);
				// ..
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const login = (email, password, history, location) => {
		signInWithEmailAndPassword(auth, email, password)
			.then(res => {
				// Signed in
				setUser(res.user);
				setError('');
				const userInfo = {
					email: res.user.email,
					displayName: res.user.displayName,
				};
				axios
					.put('https://agile-beyond-99774.herokuapp.com/users', userInfo)
					.then(res => {
						console.log(res);
						res.data && alert('User Created Successfully');
					});
				const redirectUrl = location?.state?.from?.pathname
					? location.state.from.pathname
					: '/';
				history.replace(redirectUrl);
				// ...
			})
			.catch(error => {
				const errorMessage = error.message;
				setError(errorMessage);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			if (user) {
				setUser(user);
				setLoading(false);
			} else {
				setLoading(false);
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
	const removeUser = () => {
		deleteUser(auth.currentUser)
			.then(() => {
				setUser(null);
				alert('Delete user successful');
			})
			.catch(error => {
				alert(error.message);
			});
	};

	return {
		user,
		error,
		googleLogin,
		register,
		login,
		logout,
		loading,
		removeUser,
	};
};

export default useFirebase;
