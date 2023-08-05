import HttpClient from './utils/HttpClient';

class MarvelService {

	constructor() {
		this.httpClient = new HttpClient('https://gateway.marvel.com/v1/public');
	}

	async getCharacters(offset = 0, characterName) {

		const characterNameParam = characterName ? `&nameStartsWith=${characterName}` : '';
		
		const response = await this.httpClient.get(`/characters?apikey=dba785fa1dba1bde6a0089ebe181dcde&limit=11&offset=${offset}${characterNameParam}`);
		const characters = response?.data?.results;
		if(!characters) {
			return false;
		}

		const mappedCharacters = characters.map(character => {
			return {
				id: character.id,
				name: character.name,
				description: character.description,
				picture: `${character.thumbnail.path}/portrait_incredible.${character.thumbnail.extension}`,
			};
		});

		return {
			total: response.data.total,
			characters: mappedCharacters
		};
	}


	async getCharacterById(characterId) {

		const response = await this.httpClient.get(`/characters/${characterId}?apikey=dba785fa1dba1bde6a0089ebe181dcde`);
		const character = response?.data?.results[0];
		if(!character) {
			return false;
		}

		const mappedCharacter = {
			...character,
			id: character.id,
			name: character.name,
			description: character.description,
			picture: `${character.thumbnail.path}.${character.thumbnail.extension}`,
		};
		
		return mappedCharacter;
	}
}

export default new MarvelService();