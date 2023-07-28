import { Link } from 'react-router-dom';
import { PageWrapper } from './style';

import logoLight from '../../assets/images/logo-light.svg';
import building from '../../assets/images/building.png';

import iconAt from '../../assets/images/icon-at.svg';
import iconEye from '../../assets/images/icon-eye.svg';
import iconArrowRight from '../../assets/images/icon-arrow-right.svg';
import iconQuestionShield from '../../assets/images/icon-question-shield.svg';

export default function Login() {

	

	return (
		<PageWrapper>

			<img src={logoLight} alt="Logo Pontua" />

			<div className="content">
				<div className="image-wrapper">
					<img src={building} alt="Prédio Colorido" />
				</div>

				<div className="card-wrapper">
					<h1 className="title">
						Bem-vindo<span className='dot'>.</span>
					</h1>

					<p className='description'>
						informe as suas credenciais de acesso ao portal
					</p>

					<form action="">
						<div className="form-group">
							<input type="text" placeholder='informe seu e-mail'/>
							<img className='floating-icon' src={iconAt} alt="Ícone @" />
						</div>

						<div className="form-group">
							<input type="text" placeholder='informe sua senha' />
							<button className='floating-icon' type='button'>
								<img src={iconEye} alt="Ícone de um olho" />
							</button>
						</div>

						<button className='btn-submit'>
							entrar
							<img src={iconArrowRight} alt="Ícone de Seta apontando para direita" />
						</button>
					</form>

					<button className='btn-forgot-password'>
						<img src={iconQuestionShield} alt="Ícone de Escudo com interrogação dentro" />
						Esqueceu a senha?
					</button>
				</div>
			</div>

		</PageWrapper>
	);
}
