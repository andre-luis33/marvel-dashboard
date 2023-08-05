import UserMock from '../mocks/UserMock';

class AuthService {

	login(email, password) {
		
		const user = UserMock.findByEmailAndPassword(email, password);
		if(!user) {
			throw { status: 400, error: 'Invalid credentials' };
		}
	
		const expiresIn = (new Date).getTime() + 3600 * 1000;
		return `eyWFwafwagwa.eR42141aag498wjwagjwg.${expiresIn}`;
	}

}

export default new AuthService();
