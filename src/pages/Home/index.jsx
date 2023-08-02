import { useEffect, useState } from 'react';

import Dashboard from '../../components/Dashboard';
import { Character, CharactersList, StyledLink, PaginationWrapper, PaginationButton } from './style';

import temp from '../../Intersect.png';
import MarvelService from '../../services/MarvelService';

import iconArrowLeft from '../../assets/images/icon-arrow-left.svg';


export default function Home() {

	const [characters, setCharacters] = useState([]);
	const [isLoadingCharacters, setIsLoadingCharacters] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalCharacters, setTotalCharacters] = useState(0);

	const resultsPerPage = 11;
	const paginationList = totalCharacters === 0 ? [] : Array.from({ length: (totalCharacters / resultsPerPage) }, (k, v) => v);

	useEffect(() => {

		(async () => {

			try {

				setIsLoadingCharacters(true);

				const offset = currentPage < 2 ? 0 : resultsPerPage * currentPage;

				const { total, characters } = await MarvelService.getCharacters(offset);
				setCharacters(characters);
				setTotalCharacters(total);

			} catch (error) {
				console.log(error);
			} finally {
				setIsLoadingCharacters(false);
			}


		})();

	}, [currentPage]);

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
								<StyledLink to={`/profile/${character.id}`}>
									<img src={character.picture} alt="" />
									<div className="text-wrapper">
										<h2 className='title'>
											{character.name.length < 13 ? character.name : `${character.name.substr(0, 13)}...`}
										</h2>
										<p className="description">
											{!character.description && 'Esse personagem é tão brabo, que nem tem descrição...' }
											{character.description.length < 160 ? character.description : `${character.description.substr(0, 140)}...`}
										</p>
									</div>
								</StyledLink>
							</Character>
						))}
					</>

				)}

			</CharactersList>

			{(paginationList && paginationList.length > 1) && (
				<PaginationWrapper>

					<PaginationButton className='previous' disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage-1)}>
						<img src={iconArrowLeft} alt="Ícone Seta pra Esquerda" />
						Anterior
					</PaginationButton>

					{[1, 2, 3].includes(currentPage) ?

						<>
							{currentPage !== 3 && (
								<PaginationButton className={currentPage === 1 && 'selected'} onClick={() => setCurrentPage(1)}>
									1
								</PaginationButton>
							)}
							<PaginationButton className={currentPage === 2 && 'selected'} onClick={() => setCurrentPage(2)}>
								2
							</PaginationButton>
							<PaginationButton className={currentPage === 3 && 'selected'} onClick={() => setCurrentPage(3)}>
								3
							</PaginationButton>
							{currentPage === 3 && (
								<PaginationButton onClick={() => setCurrentPage(4)}>
									4
								</PaginationButton>
							)}
							<PaginationButton>
								...
							</PaginationButton>
							<PaginationButton onClick={() => setCurrentPage(paginationList.length - 2)}>
								{paginationList.length - 2}
							</PaginationButton>
							<PaginationButton onClick={() => setCurrentPage(paginationList.length - 1)}>
								{paginationList.length - 1}
							</PaginationButton>
							<PaginationButton onClick={() => setCurrentPage(paginationList.length)}>
								{paginationList.length}
							</PaginationButton>
						</>
						:
						<>
							<PaginationButton onClick={() => setCurrentPage(1)}>
								1
							</PaginationButton>
							{currentPage > 10 && (
								<PaginationButton onClick={() => setCurrentPage(parseInt(currentPage/2))}>
									{parseInt(currentPage/2)}
								</PaginationButton>
							)}
							<PaginationButton>
								...
							</PaginationButton>
							<PaginationButton onClick={() => setCurrentPage(paginationList[currentPage-1])}>
								{paginationList[currentPage-1]}
							</PaginationButton>
							<PaginationButton className='selected'>
								{currentPage}
							</PaginationButton>

							{currentPage < paginationList.length && (
								<PaginationButton onClick={() => setCurrentPage(currentPage+1)}>
									{currentPage+1}
								</PaginationButton>
							)} 

							{currentPage < (paginationList.length - 3) && (
								<>
									
									<PaginationButton>
										...
									</PaginationButton>
									<PaginationButton onClick={() => setCurrentPage(paginationList.length - 2)}>
										{paginationList.length - 2}
									</PaginationButton>
									<PaginationButton onClick={() => setCurrentPage(paginationList.length - 1)}>
										{paginationList.length - 1}
									</PaginationButton>
									<PaginationButton onClick={() => setCurrentPage(paginationList.length)}>
										{paginationList.length}
									</PaginationButton>
								</>
							)}
						</>
					}

					<PaginationButton className='next' disabled={currentPage === paginationList.length} onClick={() => setCurrentPage(currentPage+1)}>
						Próxima
						<img src={iconArrowLeft} alt="Ícone Seta pra Esquerda" />
					</PaginationButton>

				</PaginationWrapper>
			)}

		</Dashboard>
	);
}
