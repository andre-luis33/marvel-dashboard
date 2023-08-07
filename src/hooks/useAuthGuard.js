// import { useAuth } from '../context/AuthContext';

export default function useAuthGuard() {
	
	const accessToken = localStorage.getItem('accessToken');
	
	let isAuth = true;
	let errorType;

	if(!accessToken) {
		isAuth = false;
		errorType = 'missing-token';

	} else {

		const currentTime = (new Date).getTime();
		const expirationTime = parseInt(accessToken.split('.').pop());
	
		if(currentTime > expirationTime) {
			isAuth = false;
			errorType = 'token-expired';
		}
		
	}


	return { isAuth, errorType };
}
