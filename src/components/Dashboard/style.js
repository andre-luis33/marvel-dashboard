import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const PageWrapper = styled.main`
	display: flex;
	height: 100vh;
	overflow: hidden;
`;

export const StyledLink = styled(Link)`

	&.current-page {
		color: ${({ theme }) => theme.colors.orange[500]};
	
		img {
			filter: invert(16%) sepia(95%) saturate(5490%) hue-rotate(10deg) brightness(99%) contrast(103%);
		}
	}
`;

export const Sidebar = styled.aside`
	width: 250px;
	flex-shrink: 0;
	box-shadow: 6px 0px 18px 0px rgba(0, 0, 0, 0.06);

	.btn-close-menu {
		display: none;
	}

	@media (max-width: 768px) {

		width: 0;
		display: none;
		
		&.open {
			width: 100%;
			display: block;
		}

		.btn-close-menu {
			display: block;
			font-size: 1.5rem;
			padding: 15px 0 15px 15px;

			position: absolute;
			top: 2px;
			right: 15px;
		}
	}

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

			&:not(.current-page) {
				color: #000;
			}
			

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
	max-height: 100vh;
	overflow-y: scroll;

	padding-top: 60px;

	.search-header {
		position: fixed;
		top: 0;
		z-index: 1;
		background-color: #fff;
		
		height: 60px;
		width: calc(100% - 250px); // sidebar size

		padding-inline: 38px;
		border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
		border-left: 1px solid ${({ theme }) => theme.colors.divider};

		display: flex;
		align-items: center;
		justify-content: flex-end;

		@media (max-width: 768px) {
			width: 100%;
		}

		form {
			display: flex;
			align-items: center;

			height: 100%;
			width: 100%;
			
			button {
				padding: 10px 18px 10px 0;
			}

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

		@media (max-width: 768px) {
			.btn-open-menu {
				display: block;
				padding: 10px 0 10px 10px;

				img {
					width: 25px;
				}
			}
		}

	}
`;

export const PageBody = styled.div`
	padding: 20px 27px;
	position: relative;
`;

const load = keyframes`
  0% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  5%,
  95% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  10%,
  59% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
  }
  20% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
  }
  38% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
  }
  100% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
`;

const round = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
	color: ${({ theme }) => theme.colors.orange[500]};
	width: 1em;
	height: 1em;
	border-radius: 50%;

	-webkit-transform: translateZ(0);
	-ms-transform: translateZ(0);
	transform: translateZ(0);
	-webkit-animation: ${load} 1.3s infinite ease, ${round} 1.3s infinite ease;
	animation: ${load} 1.3s infinite ease, ${round} 1.3s infinite ease;

	font-size: 60px;
`;

export const SpinnerOverlay = styled.div`
	position: absolute;
  	left: 0;
	top: 0;
	
	height: 100%;
	width: 100%;

	background-color: rgba(255,255,255, .7);
	
	display: flex;
	align-items: center;
	justify-content: center;

	transition: .2s all;

	visibility: ${({ isLoading }) => isLoading ? 'visible' : 'hidden'};
	opacity: ${({ isLoading }) => isLoading ? 1 : 0};
`;