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
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Shop from './Components/Shop';
import Purchase from './Pages/Purchase/Purchase';

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Navigation />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/home'>
						<Home />
					</Route>
					<Route exact path='/shop'>
						<Shop />
					</Route>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/signup'>
						<Signup />
					</Route>
					<PrivateRoute exact path='/products/:id'>
						<Purchase />
					</PrivateRoute>
					<PrivateRoute path='/dashboard'>
						<Dashboard />
					</PrivateRoute>
				</Switch>
				<Footer />
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
