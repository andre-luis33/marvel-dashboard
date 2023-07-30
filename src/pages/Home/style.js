import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CharactersList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	column-gap: 1%;

	list-style: none;
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

	@media(max-width: 900px) {
		flex-basis: 49%;
		max-width: unset;
	}
`;

