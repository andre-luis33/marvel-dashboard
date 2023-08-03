import UserMock from '../mocks/UserMock';

import config from '../config';

class AuthService {

	login(email, password) {
		
		const user = UserMock.findByEmailAndPassword(email, password);
		if(!user) {
			throw { status: 400, error: 'Invalid credentials' };
		}

		// const accessToken = jwt.sign({
		// 	user: {
		// 		id: user.id,
		// 		name: user.name,
		// 		email: user.email,
		// 	}
		// }, config.JWT_SECRET, { expiresIn: 3600 });

		return 'eyWFwafwagwa.eR42141aag498wjwagjwg';
	}

}

export default new AuthService();
