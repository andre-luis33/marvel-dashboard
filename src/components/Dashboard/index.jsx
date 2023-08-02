import propTypes from 'prop-types';
import { PageContent, PageWrapper, Sidebar, StyledLink, Spinner, SpinnerOverlay } from './style';

import logoDark from '../../assets/images/logo-dark.svg';
import iconSquares from '../../assets/images/icon-squares.svg';
import iconUser from '../../assets/images/icon-user.svg';
import iconLogout from '../../assets/images/icon-logout.svg';
import iconSearch from '../../assets/images/icon-search.svg';
import { PageBody } from './style';

export default function Dashboard({ isLoading, showSearchBar, children }) {

	const currentPage = window.location.pathname;

	function handleSubmit() {
		
	}

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

							<StyledLink to='/profile/me' isCurrentPage={currentPage.includes('/profile')}>
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
					{showSearchBar && (
						<form onSubmit={handleSubmit}>
							<button>
								<img src={iconSearch} alt="Ícone de Lupa" />
							</button>
							<input type="text" placeholder='Busque um agente'/>
						</form>
					)}
				</header>

				<PageBody>

					<SpinnerOverlay isLoading={isLoading}>
						<Spinner />
					</SpinnerOverlay>

					{children}
				</PageBody>
				
			</PageContent>
		</PageWrapper>
	);
}

Dashboard.propTypes = {
	isLoading: propTypes.bool.isRequired,
	showSearchBar: propTypes.bool.isRequired,
	children: propTypes.node.isRequired,
};

Dashboard.defaultProps = {
	showSearchBar: true,
	isLoading: false,
};