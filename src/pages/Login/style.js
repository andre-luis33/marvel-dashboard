import styled from 'styled-components';

export const PageWrapper = styled.main`
	background-color: ${({ theme }) => theme.colors.blue[800]};
	height: 100vh;

	padding: 49px 68px 49px 68px;


	.content {
		display: flex;
		align-items: flex-end;
		column-gap: 140px;
		justify-content: center;
		
		padding-left: 49px;

		& > img {
			max-width: 45%;
		}

		.login-wrapper {
			background-color: ${({ theme }) => theme.colors.white};

			padding: 49px 38px;
			border-radius: 28px;

			.title {
				font-size: 2.25rem;
				margin-bottom: 16px;
				color: ${({ theme }) => theme.colors.blue[800]};

				.dot {
					color: ${({ theme }) => theme.colors.orange[500]};
				}
			}

			.description {
				color: ${({ theme }) => theme.colors.gray[500]};
				margin-bottom: 6px;
			}

			.form-group {

				position: relative;

				&:last-of-type {
					margin-block: 23px 11px;
				}
				
				input {
					height: 57px;
					width: 100%;
					padding: 0 15px;
	
					border-radius: 10px;
					border: 1px solid #b7b7b7;
					outline: 0;
					
					font-size: 1rem;
					font-weight: bold;
					color: ${({ theme }) => theme.colors.blue[800]};
					
					&::placeholder {
						font-weight: normal;
					}

					&:focus {
						border-color: ${({ theme }) => theme.colors.blue[600]};

					}
				}
				
				.floating-icon {
					position: absolute;
					right: 15px;
					top: 20px;

				}
				
				&:focus-within .floating-icon{
					filter: brightness(0) saturate(100%) invert(16%) sepia(54%) saturate(1852%) hue-rotate(205deg) brightness(94%) contrast(91%);
				}
				
				button.floating-icon {
					border: 0;
					background-color: transparent;
				}

			}

			.btn-submit {
				background-color: #081B4E;
				color: #fff;
				border: 0;

				width: 100%;
				height: 57px;

				font-size: 1.5rem;
				border-radius: 10px;

				display: flex;
				justify-content: center;
				align-items: center;
				column-gap: 9px;
			}

			.btn-forgot-password {
				display: flex;
				align-items: center;
				justify-content: flex-end;
				column-gap: 5px;

				width: 100%;
				margin-top: 23px;

				color: ${({ theme }) => theme.colors.orange[500]};
				font-size: .8rem;
			}	
		}
	}
`;