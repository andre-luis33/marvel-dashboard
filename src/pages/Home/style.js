import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageWrapper = styled.main`
	display: flex;
	height: 100vh;
`;

export const StyledLink = styled(Link)`
	color: ${({ theme, isCurrentPage }) => isCurrentPage ? theme.colors.orange[500] : '#000'};
`;

export const Sidebar = styled.aside`
	width: 250px;
	box-shadow: 6px 0px 18px 0px rgba(0, 0, 0, 0.06);

	.logo-wrapper {
		padding-inline: 26px;
		height: 60px;

		display: flex;
		align-items: center;

		border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
	}

	.menu {
		padding-top: 20px;

		${StyledLink} {
			display: flex;
			align-items: center;
			column-gap: 14px;

			padding: 10px 26px;
			
			font-size: .85rem;
			transition: .1s background-color;
			

			&:hover {
				background-color: #dedede;
			}

		
			img {
				min-width: 20px;
			}

		}

		.logout-item {
			border-top: 1px solid ${({ theme }) => theme.colors.divider};
			margin-top: 20px;
			padding-top: 20px;
		}
	}
`;

export const PageContent = styled.div`
	width: 100%;

	.search-header {
		height: 60px;
		width: 100%;

		padding-inline: 38px;
		border-bottom: 1px solid ${({ theme }) => theme.colors.divider};

		display: flex;
		align-items: center;
		column-gap: 18px;

		input {
			font-size: 1rem;
			height: 100%;
			width: 100%;
			border: 0;
			outline: 0;

			&:focus {
				border-bottom: 1px solid ${({ theme }) => theme.colors.gray[500]};
			}
		}
	}
`;