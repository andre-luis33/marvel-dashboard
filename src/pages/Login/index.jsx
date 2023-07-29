import { useState } from 'react';
import { PageWrapper } from './style';

import logoLight from '../../assets/images/logo-light.svg';
import building from '../../assets/images/building.png';

import LoginCard from './components/LoginCard';
import ResetPasswordCard from './components/ResetPasswordCard';

export default function Login() {

	const [currentCard, setCurrentCard] = useState('login');

	return (
		<PageWrapper>

			<img src={logoLight} alt="Logo Pontua" />

			<div className="content">
				<div className="image-wrapper">
					<img src={building} alt="Prédio Colorido" />
				</div>

				{currentCard === 'login' && <LoginCard onCardChange={() => setCurrentCard('reset-password')}/>}
				{currentCard === 'reset-password' && <ResetPasswordCard onCardChange={() => setCurrentCard('login')}/>}
				
			</div>

		</PageWrapper>
	);
}
