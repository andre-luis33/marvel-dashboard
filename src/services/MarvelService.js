import HttpClient from './utils/HttpClient';

class MarvelService {

	constructor() {
		this.httpClient = new HttpClient('https://gateway.marvel.com/v1/public');
	}

	async getCharacters(offset = 0) {
		const response = await this.httpClient.get(`/characters?apikey=dba785fa1dba1bde6a0089ebe181dcde&limit=10&offset=${offset}`);
		const characters = response?.data?.results;
		if(!characters) {
			return false;
		}

		const mappedCharacters = characters.map(character => {
			return {
				id: character.id,
				name: character.name,
				description: character.description,
				picture: `${character.thumbnail.path}?apikey=dba785fa1dba1bde6a0089ebe181dcde`,
			};
		});

		return {
			total: response.data.total,
			characters: mappedCharacters
		};
	}
}

export default new MarvelService();