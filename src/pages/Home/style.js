import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CharactersList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	column-gap: 1%;

	list-style: none;

	padding-bottom: 15px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
`;

export const StyledLink = styled(Link)`

	padding: 15px 10px;
	margin-bottom: 10px;

	border-radius: 15px;

	background-color: ${({ theme }) => theme.colors.gray[100]};
	color: #000;

	display: flex;
	column-gap: 15px;

	transition: .2s all ease;

	&:hover {
		background-color: ${({ theme }) => theme.colors.gray.background};
		transform: translateY(-5px);
	}

	.title {
		font-size: 1.5rem;
		margin-bottom: 10px;
	}

	.description {
		font-size: 1rem;
	}
`;

export const Character = styled.li`
	flex-basis: 24%;
	flex-grow: 1;

	max-width: 50%;
	min-width: 300px;

	img {
		width: 83px;
		max-height: 120px;
		border-radius: 9px;
	}

	@media(max-width: 900px) {
		flex-basis: 49%;
		max-width: unset;
	}
`;

export const PaginationWrapper = styled.div`
	padding: 15px;

	display: flex;
	justify-content: center;

	@media (max-width: 870px) {
		overflow-x: scroll;
	}
`;

export const PaginationButton = styled.button`
	display: flex;
	align-items: center;

	border: 1px solid #D0D5DD;
	padding: 10px 16px;

	transition: all .1s;

	&:hover {
		background-color: ${({ theme }) => theme.colors.divider};
	}

	&.previous {
		border-radius: 8px 0 0 8px;

		img {
			margin-right: 12px;
		}
	}
	
	&.next {
		border-radius: 0 8px 8px 0;

		@media (max-width: 870px) {
			min-width: 110px;
		}
		
		img {
			margin-left: 12px;
			transform: rotate(180deg);
		}
	}

	&.selected {
		background-color: ${({ theme }) => theme.colors.gray.background};
	}

	&[disabled] {
		background-color: ${({ theme }) => theme.colors.divider};
	}
`;