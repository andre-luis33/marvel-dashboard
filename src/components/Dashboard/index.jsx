import propTypes from 'prop-types';
import { PageContent, PageWrapper, Sidebar, StyledLink } from './style';

import logoDark from '../../assets/images/logo-dark.svg';
import iconSquares from '../../assets/images/icon-squares.svg';
import iconUser from '../../assets/images/icon-user.svg';
import iconLogout from '../../assets/images/icon-logout.svg';
import iconSearch from '../../assets/images/icon-search.svg';
import { PageBody } from './style';

export default function Dashboard({ children }) {

	const currentPage = window.location.pathname;

	return (
		<PageWrapper>

			<Sidebar>
				<div className="logo-wrapper">
					<img src={logoDark} alt="Logo Pontua" />
				</div>

				<nav className="menu">
					<ul>
						<li>
							<StyledLink to='/home' isCurrentPage={currentPage === '/home'}>
								<img src={iconSquares} alt="Ícone de Quadrados" />
								Home
							</StyledLink>

							<StyledLink to='/profile' isCurrentPage={currentPage === '/profile'}>
								<img src={iconUser} alt="Ícone de Usuário" />
								Perfil
							</StyledLink>
						</li>

						<li className='logout-item'>
							<StyledLink to='/login'>
								<img src={iconLogout} alt="Ícone de Logout" />
								Sair
							</StyledLink>
						</li>
					</ul>
				</nav>

			</Sidebar>

			<PageContent>
				<header className='search-header'>
					<img src={iconSearch} alt="Ícone de Lupa" />
					<input type="text" placeholder='Busque um agente'/>
				</header>

				<PageBody>
					{children}
				</PageBody>
				
			</PageContent>
		</PageWrapper>
	);
}

Dashboard.propTypes = {
	children: propTypes.node.isRequired
};