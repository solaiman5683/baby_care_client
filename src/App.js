import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home/Home';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
