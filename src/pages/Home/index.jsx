import { useEffect, useState } from 'react';

import Dashboard from '../../components/Dashboard';
import { Character, CharactersList, StyledLink } from './style';

import temp from '../../Intersect.png';
import MarvelService from '../../services/MarvelService';

export default function Home() {

	const [characters, setCharacters] = useState([]);
	const [isLoadingCharacters, setIsLoadingCharacters] = useState(true);

	useEffect(() => {

		(async () => {

			try {

				const characters = await MarvelService.getCharacters();
				setCharacters(characters);

			} catch (error) {
				console.log(error);
			} finally {
				setIsLoadingCharacters(false);
			}


		})();

	}, []);

	const shouldDisplayCharacters = characters.length && !isLoadingCharacters;

	return (
		<Dashboard isLoading={isLoadingCharacters}>

			<CharactersList>

				{isLoadingCharacters && (
					<>
						<Character>
							<StyledLink>
								<img src={temp} alt="" />
								<div className="text-wrapper">
									<h2 className='title'>Hmm...</h2>
									<p className="description">
										Carregando... ... .. ..
									</p>
								</div>
							</StyledLink>
						</Character>

						<Character>
							<StyledLink>
								<img src={temp} alt="" />
								<div className="text-wrapper">
									<h2 className='title'>Hmm...</h2>
									<p className="description">
										Carregando esse também... ... .. ..
									</p>
								</div>
							</StyledLink>
						</Character>
					</>
				)}

				{shouldDisplayCharacters && (

					<>
						{characters.map((character) => (
							<Character key={character.id}>
								<StyledLink>
									<img src={temp} alt="" />
									<div className="text-wrapper">
										<h2 className='title'>{character.name}</h2>
										<p className="description">
											{character.name}
										</p>
									</div>
								</StyledLink>
							</Character>
						))}
					</>

				)}

			</CharactersList>

		</Dashboard>
	);
}
