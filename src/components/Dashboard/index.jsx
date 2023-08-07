import propTypes from 'prop-types';
import { PageContent, PageWrapper, PageBody, Sidebar, StyledLink, Spinner, SpinnerOverlay } from './style';

import logoDark from '../../assets/images/logo-dark.svg';
import iconSquares from '../../assets/images/icon-squares.svg';
import iconUser from '../../assets/images/icon-user.svg';
import iconLogout from '../../assets/images/icon-logout.svg';
import iconSearch from '../../assets/images/icon-search.svg';
import { useNavigate } from 'react-router-dom';

export default function Dashboard({ isLoading, showSearchBar, onHeaderSubmit, headerSearchTerm, headerSetSearchTerm, children }) {
	
	const currentPage = window.location.pathname;
	const navigate = useNavigate();
	
	function handleLogoutClick(e) {
		e.preventDefault();

		localStorage.removeItem('accessToken');
		localStorage.removeItem('selectedHero');
		navigate('/login');
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
							<StyledLink to='/home' className={currentPage === '/home' ? 'current-page' : ''}>
								<img src={iconSquares} alt="Ícone de Quadrados" />
								Home
							</StyledLink>
						</li>

						<li>
							<StyledLink to='/profile/me' className={currentPage.includes('/profile') ? 'current-page' : ''}>
								<img src={iconUser} alt="Ícone de Usuário" />
								Perfil
							</StyledLink>
						</li>

						<li className='logout-item'>
							<StyledLink onClick={handleLogoutClick}>
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
						<form onSubmit={onHeaderSubmit}>
							<button>
								<img src={iconSearch} alt="Ícone de Lupa" />
							</button>
							<input type="text" placeholder='Busque um agente' value={headerSearchTerm} onChange={(e) => headerSetSearchTerm(e.target.value)}/>
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
	onHeaderSubmit: propTypes.func,
	headerSearchTerm: propTypes.string,
	headerSetSearchTerm: propTypes.func,
	children: propTypes.node.isRequired,
};

Dashboard.defaultProps = {
	showSearchBar: true,
	isLoading: false,
};