import styled from 'styled-components';

export const CustomSelect = styled.div`
	margin-block: 10px;

	border: 2px solid ${({ theme }) => theme.colors.gray[100]};
	border-radius: 8px;

	transition: .2s border-color;

	height: 44px;

	.option {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 44px;

		padding-inline: 14px;
		transition: all .1s;

		.wrapper {
			display: flex;
			align-items: center;
			column-gap: 8px;

			.character-name {
				margin-bottom: 0;
				font-size: 1rem;
				color: #101828;
			}
		}

		.avatar {
			height: 24px;
			width: 24px;
		}
	}

	.dropdown-wrapper {
		margin-top: 5px;
		opacity: 0;
		visibility: hidden;

		position: relative;
		z-index: 1;

		transition: all .3s;
		
		background-color: #fff;

		border-radius: 8px;
		box-shadow: 2px 0px 5px rgba(0,0,0, .2);
		overflow: hidden;

		.option:hover {
			background-color: ${({ theme }) => theme.colors.gray[100]};
			cursor: pointer;
		}
	}

	.arrow-icon {
		transition: .2s transform;
	}

	&:hover, &:focus {

		border-color: ${({ theme }) => theme.colors.gray[500]};

		.arrow-icon {
			transform: rotate(180deg);
		}
		
		.dropdown-wrapper {
			margin-top: 5px;
			opacity: 1;
			visibility: visible;
		}
	}
`;

export const BottomWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	
	.login-link {
		background-color: ${({ theme }) => theme.colors.blue[800]};
		color: #fff;
		padding: 15px;
		border-radius: 8px;
	}
`;