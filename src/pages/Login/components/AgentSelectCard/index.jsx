import { Link } from 'react-router-dom';

import { CustomSelect, BottomWrapper } from './style';
import iconChevronDown from '../../../../assets/images/icon-chevron-down.svg';

export default function AgentSelectCard() {

	return (
		<div className="card-wrapper">
			<h1 className="title">
				Selecione o seu agente mais legal<span className='dot'>.</span>
			</h1>

			<p className='description'>
				Tenha a visão completa do seu agente.
			</p>

			<CustomSelect tabIndex={1}>
				<div className="option">
					<div className="wrapper">
						<img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Bouclier_Captain_America_1018.png" alt="" />
						<h2 className='character-name'>Captain America</h2>
					</div>

					<img className='arrow-icon' src={iconChevronDown} alt="Ícone de Seta" />
				</div>

				<div className="dropdown-wrapper">
					<div className="option">
						<div className="wrapper">
							<img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Bouclier_Captain_America_1018.png" alt="" />
							<h2 className='character-name'>Captain America</h2>
						</div>

					</div>
					<div className="option">
						<div className="wrapper">
							<img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Bouclier_Captain_America_1018.png" alt="" />
							<h2 className='character-name'>Captain America</h2>
						</div>
					</div>
					<div className="option">
						<div className="wrapper">
							<img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Bouclier_Captain_America_1018.png" alt="" />
							<h2 className='character-name'>Captain America</h2>
						</div>
					</div>
				</div>
			</CustomSelect>

			<BottomWrapper>
				<Link className='login-link' to='/home'>
					Entrar
				</Link>
			</BottomWrapper>

		</div>
	);
}
