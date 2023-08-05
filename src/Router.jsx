import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';

export default function Router() {
	return (
		<Routes>
			<Route path='/' Component={Login} exact />
			<Route path='/login' Component={Login} exact />
			<Route path='/home' Component={Home} exact />
			<Route path='/profile/:id' Component={Profile} exact />
		</Routes>
	);
}
