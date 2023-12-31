import styled from 'styled-components';

export const PageWrapper = styled.main`
	background-color: ${({ theme }) => theme.colors.blue[800]};
	min-height: 100vh;

	padding: 49px 68px;

	.content {
		display: flex;
		align-items: flex-start;
		column-gap: 10%;
		justify-content: center;
		
		padding-left: 49px;

		.image-wrapper {
			max-width: 615px;
		}
		
		.card-wrapper {
			max-width: 450px;
			margin-top: 25px;

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
					padding: 0 40px 0 15px;
	
					border-radius: 10px;
					border: 1px solid #b7b7b7;
					outline: 0;
					
					font-size: 1rem;
					font-weight: bold;
					color: ${({ theme }) => theme.colors.blue[800]};

					transition: border-color .1s;
					
					&::placeholder {
						font-weight: normal;
					}

					&:focus {
						border-color: ${({ theme }) => theme.colors.blue[600]};
					}

				}

				input.is-invalid {
					border-color: red !important;
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

			.error-message {
				margin-bottom: 10px;
				padding: 5px 10px;
				
				border-left: 4px solid red;
				border-radius: 0 10px 10px 0;

				color: red;
				background-color: rgba(255,0,0, .2);

				transition: all .3s ease-out;

				opacity: 0;
				visibility: hidden;
				position: absolute;
			}

			
			.error-message.show {
				opacity: 1;
				visibility: visible;
				position: relative;
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

				transition: .2s all;

				position: relative;
				z-index: 2;
			}

			.btn-submit[disabled] {
				background-color: #C3C3C3;
				cursor: not-allowed;
			}

			.btn-bottom {
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

	
	@media(max-width: 1000px) {
		padding-inline: 40px;

		.content {
			column-gap: 5%;
			padding-left: 0;
		}
	}

	@media(max-width: 768px) {
		padding-inline: 20px;

		.content {
			align-items: center;
			margin-top: 15px;

			.image-wrapper {
				position: absolute;
				z-index: 1;
				bottom: 0px;
				right: 0px;
				opacity: .8;

				max-width: 230px;
			}

			.card-wrapper {
				position: relative;
				z-index: 2;

				padding: 30px 20px;

				.title {
					font-size: 1.8rem;
				}
			}
		}
	}
`;