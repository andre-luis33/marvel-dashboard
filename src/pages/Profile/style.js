import styled from 'styled-components';

export const ProfileTitle = styled.h1`
	font-size: 1.5rem;
	margin-bottom: 23px;

	.label {
		color: ${({ theme }) => theme.colors.blue[800]};
	}

	.slash {
		color: ${({ theme }) => theme.colors.orange[500]};
	}

	.name {
		color: ${({ theme }) => theme.colors.gray[500]};
		font-weight: normal;
	}
`;

export const Tabs = styled.ul`
	list-style: none;

	display: flex;
	column-gap: 20px;

	border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
`;

export const TabItem = styled.li`

	button {
		padding-bottom: 20px;
		font-size: 1rem;
		color: #777;

		transition: .3s all;
		border-bottom: 2px solid transparent;

		&:hover {
			color: ${({ theme }) => theme.colors.blue[600]};
		}

		&.selected {
			color: ${({ theme }) => theme.colors.blue[800]};
			font-weight: 500;
			border-bottom-color: ${({ theme }) => theme.colors.blue[800]};
		}

	}
`;

export const BodyWrapper = styled.div`
	margin-top: 27px;
`;

export const Overview = styled.div`
	box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.06);

	padding: 42px 34px;
	border-radius: 15px;

	display: flex;
	column-gap: 15px;

	img {
		height: 150px;
		width: 150px;
		border-radius: 50%;
	}

	.title {
		font-size: 1.5rem;
		color: ${({ theme }) => theme.colors.blue[800]};
		margin-bottom: 15px;
	}

	.description {
		color: #717171;
		line-height: 24px;
		font-weight: 500;
	}


`;


export const ListOfInfo = styled.ul`
	padding-left: 30px;
	font-weight: 500;
	
	li {
		color: #667085;

		&:not(:last-child) {
			margin-bottom: 5px;
		}
	}
`;