import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { BodyWrapper, ListOfInfo, Overview, ProfileTitle, TabItem, Tabs } from './style';

import Dashboard from '../../components/Dashboard';
import MarvelService from '../../services/MarvelService';

import getRandomDescription from '../../utils/getRandomDescription';
import temp from '../../Intersect.png';

export default function Profile() {

	const [currentTab, setCurrentTab] = useState('overview');
	const [character, setCharacter] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const { id } = useParams();
	
	useEffect(() => {
		
		(async () => {

			try {
				
				let requestedCharacterId = id;
				if(requestedCharacterId === 'me') {

					try {
						const selectedHero = JSON.parse(localStorage.getItem('selectedHero'));
						requestedCharacterId = selectedHero.id;
					} catch (error) {
						console.log(error);
					}
				}

				const character = await MarvelService.getCharacterById(requestedCharacterId);
				setCharacter(character);

			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}

		})();

	}, [id]);


	const tabs = [
		{
			title: 'overview', label: 'Visão Geral'
		},
		{
			title: 'teams', label: 'Teams'
		},
		{
			title: 'powers', label: 'Powers'
		},
		{
			title: 'species', label: 'Species'
		},
		{
			title: 'authors', label: 'Authors'
		},
	];

	return (
		<Dashboard isLoading={isLoading} showSearchBar={false}>
			
			<ProfileTitle>
				<span className='label'>Perfil</span>
				<span className='slash'> /</span>
				<span className='name'>A-Bomb</span>
			</ProfileTitle>

			<Tabs>
				{tabs.map(tab => (
					<TabItem key={tab.title}>
						<button className={currentTab === tab.title ? 'selected' : ''} onClick={() => setCurrentTab(tab.title)}>
							{tab.label}
						</button>
					</TabItem>
				))}
			</Tabs>

			<BodyWrapper>

				{currentTab === 'overview' && (
					<Overview>
						<img src={character?.picture || temp} alt={character?.name || 'Wolverine'} />

						<div className="text-wrapper">
							<h2 className='title'>
								{character?.name || 'Carregando...'}
							</h2>

							<p className="description">
								{isLoading && 'Carregando descrição..........'}
								{!isLoading && character?.description || getRandomDescription()}
							</p>
						</div>
					</Overview>
				)}


				{currentTab === 'teams' && (
					<ListOfInfo>
						<li>Avengers</li>
						<li>Defenders</li>
						<li>Fantastic Four</li>
					</ListOfInfo>
				)}

				{currentTab === 'powers' && (
					<ListOfInfo>
						<li>MyPower</li>
					</ListOfInfo>
				)}

				{currentTab === 'species' && (
					<ListOfInfo>
						<li>Mutate</li>
					</ListOfInfo>
				)}

				{currentTab === 'authors' && (
					<ListOfInfo>
						<li>Stan Lee</li>
					</ListOfInfo>
				)}


			</BodyWrapper>
		</Dashboard>
	);
}
