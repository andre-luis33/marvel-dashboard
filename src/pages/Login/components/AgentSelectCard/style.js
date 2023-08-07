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

		border: 2px solid transparent;

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
			border-radius: 50%;
		}
	}

	&.is-active {
		.dropdown-wrapper {
			opacity: 1;
			visibility: visible;
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

		.option {
			cursor: pointer;

			&:hover {
				background-color: ${({ theme }) => theme.colors.gray[100]};
			}
		}

		.option.selected {
			background-color: ${({ theme }) => theme.colors.gray[100]};
			position: relative;

			&::after {
				content: 'L';
				transform: scaleX(-1) rotate(-45deg);
			}
		}
	}

	.arrow-icon {
		transition: .2s transform;
	}


`;

export const BottomWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	
	.error-message {
		width: 100%;
	}

	button {
		background-color: ${({ theme }) => theme.colors.blue[800]};
		color: #fff;
		padding: 15px;
		border-radius: 8px;
	}
`;