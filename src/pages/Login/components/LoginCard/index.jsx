/* eslint-disable indent */


import { useEffect, useState } from 'react';
import propTypes from 'prop-types';

import isEmailValid from '../../../../utils/isEmailValid';

import iconAt from '../../../../assets/images/icon-at.svg';
import iconEye from '../../../../assets/images/icon-eye.svg';
import iconArrowRight from '../../../../assets/images/icon-arrow-right.svg';
import iconQuestionShield from '../../../../assets/images/icon-question-shield.svg';

import AuthService from '../../../../services/AuthService';

export default function LoginCard({ onCardChange, onSuccessCardChange }) {

	const URL = new URLSearchParams(window.location.search);
	const [isFirstRender, setIsFirstRender] = useState(true);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [inputPasswordType, setInputPasswordType] = useState('password');
	const [isDisabled, setIsDisabled] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [hasError, setHasError] = useState(false);


	// useEffect to update isDisabled whenever email or password
	useEffect(() => {
		setIsDisabled(!(isEmailValid(email) && password));
		

		if(!isFirstRender) {
			return;
		}

		setIsFirstRender(false);

		const urlError = URL.get('error');
		if(!urlError) {
			return;
		}

		setHasError(true);

		switch(urlError) {
			case 'missing-token':
				setErrorMessage('Você precisa estar logado para acessar essa página!');
				break;

			case 'token-expired':
				setErrorMessage('Por favor, faça o login novamente!');
				break;

			default:
				setErrorMessage('Algum erro aconteceu, por favor, faça o login!');
				break;
		}


	}, [email, password, URL, isFirstRender]);


	function handleSubmit(e) {
		e.preventDefault();

		if(!isEmailValid(email) || !password) {
			return;
		}

		setHasError(false);
		setIsLoading(true);

		// just to simulate API delay
		setTimeout(() => {

			try {

				const accessToken = AuthService.login(email, password);
				localStorage.setItem('accessToken', accessToken);

				onSuccessCardChange();

			} catch (error) {
				
				setHasError(true);

				if(error.status === 400) {
					setErrorMessage('E-mail ou senha inválidos!');
				} else {
					setErrorMessage('Erro interno no servidor');
				}

			} finally {
				setIsLoading(false);
			}


		}, 500);
	}

	return (
		<div className="card-wrapper">
			<h1 className="title">
				Bem-vindo<span className='dot'>.</span>
			</h1>

			<p className='description'>
				informe as suas credenciais de acesso ao portal
			</p>

			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<input name='email' className={email && !isEmailValid(email) ? 'is-invalid' : ''} type="text" placeholder='informe seu e-mail' onChange={e => setEmail(e.target.value)} value={email} />
					<img className='floating-icon' src={iconAt} alt="Ícone @" />
				</div>

				<div className="form-group">
					<input name='password' type={inputPasswordType} placeholder='informe sua senha' onChange={e => setPassword(e.target.value)} value={password} />
					<button className='floating-icon' type='button' onClick={() => setInputPasswordType(prev => prev === 'password' ? 'text' : 'password')}>
						<img src={iconEye} alt="Ícone de um olho" />
					</button>
				</div>

				<p className={`error-message ${hasError ? 'show' : ''}`}>
					{errorMessage}
				</p>

				<button className='btn-submit' disabled={isDisabled || isLoading}>
					{isLoading ? 
						'entrando...'
						:
						<>
						entrar
							<img src={iconArrowRight} alt="Ícone de Seta apontando para direita" />
						</>
					}
				</button>
			</form>

			<button className='btn-bottom' onClick={onCardChange}>
				<img src={iconQuestionShield} alt="Ícone de Escudo com interrogação dentro" />
				Esqueceu a senha?
			</button>
		</div>
	);
}

LoginCard.propTypes = {
	onCardChange: propTypes.func.isRequired,
	onSuccessCardChange: propTypes.func.isRequired,
};