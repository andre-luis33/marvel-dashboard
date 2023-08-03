import users from './users';

class UserMock {


	findByEmailAndPassword(email, password) {
		const user = users.find(user => user.email === email && user.password == password);
		return user;
	}
	

}

export default new UserMock();