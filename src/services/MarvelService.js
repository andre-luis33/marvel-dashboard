import HttpClient from './utils/HttpClient';

class MarvelService {

	constructor() {
		this.apiKey = 'dba785fa1dba1bde6a0089ebe181dcde';
		this.httpClient = new HttpClient();
	}

	getCharacters() {
		
	}

}

export default new MarvelService();