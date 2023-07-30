import HttpClient from './utils/HttpClient';

class MarvelService {

	constructor() {
		this.httpClient = new HttpClient('https://gateway.marvel.com/v1/public/');
	}

	async getCharacters() {
		const response = await this.httpClient.get('/characters?apikey=dba785fa1dba1bde6a0089ebe181dcde');
		const characters = response?.data?.results;
		if(!characters) {
			return false;
		}

		const mappedCharacters = characters.map(character => {
			return {
				id: character.id,
				name: character.name,
				description: character.description,
				picture: character.thumbnail.path,
			};
		});

		return mappedCharacters;
	}
}

export default new MarvelService();