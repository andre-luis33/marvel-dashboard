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

	const resultsPerPage = 10;
	const paginationList = totalCharacters === 0 ? [] : Array.from({ length: (totalCharacters / resultsPerPage) }, (k, v) => v);

	useEffect(() => {

		(async () => {

			try {

				setIsLoadingCharacters(true);

				const offset = resultsPerPage * currentPage;

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

			{(paginationList && paginationList.length > 1) && (
				<PaginationWrapper>

					<PaginationButton className='previous' disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage-1)}>
						<img src={iconArrowLeft} alt="Ícone Seta pra Esquerda" />
						Anterior
					</PaginationButton>

					{[1, 2, 3].includes(currentPage) ?

						<>
							<PaginationButton className={currentPage === 1 && 'selected'} onClick={() => setCurrentPage(1)}>
								1
							</PaginationButton>
							<PaginationButton className={currentPage === 2 && 'selected'} onClick={() => setCurrentPage(2)}>
								2
							</PaginationButton>
							<PaginationButton className={currentPage === 3 && 'selected'} onClick={() => setCurrentPage(3)}>
								3
							</PaginationButton>
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
