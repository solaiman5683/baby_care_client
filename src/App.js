import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Navigation from './Components/Navigation';
import AuthProvider from './Contexts/AuthContext';
import Signup from './Pages/Signup/Signup';
import Footer from './Components/Footer';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Navigation />
				<Switch>
					<Route path='/' exact>
						<Home />
					</Route>
					<Route path='/home'>
						<Home />
					</Route>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/signup'>
						<Signup />
					</Route>
					<Route path='/dashboard'>
						<Dashboard />
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
