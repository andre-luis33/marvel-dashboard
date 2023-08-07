/* eslint-disable react/no-unknown-property */

import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CustomSelect, BottomWrapper } from './style';

import iconChevronDown from '../../../../assets/images/icon-chevron-down.svg';
import iconUserGray from '../../../../assets/images/icon-user-gray.svg';

import { AuthContext } from '../../../../Router';

export default function AgentSelectCard() {

	const [selectedHero, setSelectedHero] = useState(false);
	const [isSelectActive, setIsSelectActive] = useState(false);
	const [showErrorMessage, setShowErrorMessage] = useState(false);

	const { setIsAuth } = useContext(AuthContext);


	const navigate = useNavigate();

	const heros = [
		{
			id: 1017105,
			name: 'Captain America',
			picture: 'http://i.annihil.us/u/prod/marvel/i/mg/3/10/52321928eaa72.jpg',
		},
		{
			id: 1009351,
			name: 'Hulk',
			picture: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0.jpg',
		},
		{
			id: 1009368,
			name: 'Iron Man',
			picture: 'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg',
		},
		{
			id: 1014858,
			name: 'Spider-Man',
			picture: 'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/5317717bed6fe.jpg',
		},
		{
			id: 1009718,
			name: 'Wolverine',
			picture: 'http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf.jpg',
		},
	];

	function handleCustomSelectClick(heroId) {
		const hero = heros.find(hero => hero.id === heroId);
		setSelectedHero(hero);
		setIsSelectActive(false);
	}


	function handleGetInClick() {
		if(!selectedHero) {
			setShowErrorMessage(true);
			return;
		}

		localStorage.setItem('selectedHero', JSON.stringify(selectedHero));
		
		setIsAuth(true);
		navigate('/home');
	}


	return (
		<div className="card-wrapper">
			<h1 className="title">
				Selecione o seu agente mais legal<span className='dot'>.</span>
			</h1>

			<p className='description'>
				Tenha a visão completa do seu agente.
			</p>

			<CustomSelect 
				tabIndex={1} 
				className={isSelectActive ? 'is-active' : ''}
				onMouseEnter={() => setIsSelectActive(true)}
				onFocus={() => setIsSelectActive(true)} 
				onMouseLeave={() => setIsSelectActive(false)}
			>

				{!selectedHero && (
					<div className="option">
						<div className="wrapper">
							<img className="avatar" src={iconUserGray} alt="Ícone de Usuário" />
							<h2 className='character-name'>Selecione um agente</h2>
						</div>

						<img className='arrow-icon' src={iconChevronDown} alt="Ícone de Seta" />
					</div>
				)}

				{selectedHero && (
					<div className="option">
						<div className="wrapper">
							<img className="avatar" src={selectedHero.picture} alt={selectedHero.name} />
							<h2 className='character-name'>{selectedHero.name}</h2>
						</div>

						<img className='arrow-icon' src={iconChevronDown} alt="Ícone de Seta" />
					</div>
				)}

				<div className="dropdown-wrapper">
					
					{heros.map(hero => (
						<div className={hero.id === selectedHero?.id ? 'option selected' : 'option'} key={hero.id} onClick={() => handleCustomSelectClick(hero.id)}>
							<div className="wrapper">
								<img className="avatar" src={hero.picture} alt={hero.name} />
								<h2 className='character-name'>{hero.name}</h2>
							</div>
						</div>
					))}
					

				</div>
			</CustomSelect>

			<BottomWrapper>
				<p className={`error-message ${showErrorMessage ? 'show' : ''}`}>
					Por favor, selecione um agente!
				</p>

				<button onClick={handleGetInClick}>
					Entrar
				</button>
			</BottomWrapper>

		</div>
	);
}
