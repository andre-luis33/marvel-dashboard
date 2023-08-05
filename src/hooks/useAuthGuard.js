import { useNavigate } from 'react-router-dom';

export default function useAuthGuard() {
	
	const navigate = useNavigate();
	const accessToken = localStorage.getItem('accessToken');

	if(!accessToken) {
		navigate('/login?error=unlogged');
		return;
	}

	const currentTime = (new Date).getTime();
	const expirationTime = parseInt(accessToken.split('.').pop());

	if(currentTime > expirationTime) {
		navigate('/login?error=login-expired');
	}

}
