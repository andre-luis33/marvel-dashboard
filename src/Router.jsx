import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';

// import { AuthProvider, useAuth } from './context/AuthContext';

import useAuthGuard from './hooks/useAuthGuard';
import { createContext, useState } from 'react';

export const AuthContext = createContext();

export default function Router() {
	
	const { isAuth: userIsLogged, errorType } = useAuthGuard();
	const [isAuth, setIsAuth] = useState(userIsLogged);

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth }}>
			<Routes>
				<Route path='/' Component={Login} exact />
				<Route path='/login' Component={Login} exact />

				<Route path='/home'        element={isAuth ? <Home /> : <Navigate to={`/login?error=${errorType}`} />} exact />
				<Route path='/profile/:id' element={isAuth ? <Profile /> : <Navigate to={`/login?error=${errorType}`} />} exact />
			</Routes>
		</AuthContext.Provider>
	);
}
