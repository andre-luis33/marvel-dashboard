// import jwt from 'jsonwebtoken';

import UserMock from '../mocks/UserMock';
import APIError from './utils/APIError';

import config from '../config';

class AuthService {

	login(email, password) {
		
		const user = UserMock.findByEmailAndPassword(email, password);
		if(!user) {
			throw new APIError({ status: 400, errorMessage: 'Invalid email or password' });
		}

		// const accessToken = jwt.sign({
		// 	user: {
		// 		id: user.id,
		// 		name: user.name,
		// 		email: user.email,
		// 	}
		// }, config.JWT_SECRET, { expiresIn: 3600 });

		return 123;
	}

}

export default new AuthService();
