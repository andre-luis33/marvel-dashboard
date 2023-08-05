import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';

import useAuthGuard from './hooks/useAuthGuard';

export default function Router() {
	
	const { isAuth, errorType } = useAuthGuard();

	return (
		<Routes>
			<Route path='/' Component={Login} exact />
			<Route path='/login' Component={Login} exact />

			<Route path='/home'        element={isAuth ? <Home /> : <Navigate to={`/login?error=${errorType}`} />} exact />
			<Route path='/profile/:id' element={isAuth ? <Profile /> : <Navigate to={`/login?error=${errorType}`} />} exact />
		</Routes>
	);
}
