import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: Epilogue, sans-serif;
	}

   img {
      display: block;
      max-width: 100%;
   }

   a {
      text-decoration: none;
   }

   body {
      background-color: ${({ theme }) => theme.colors.backgroundColor };
   }


   button {
      cursor: pointer;
      border: 0;
      background-color: transparent;
   }

   button[disabled] {
      cursor: not-allowed;
   }
`;

export const Container = styled.div`
   margin: 0 auto;
   padding: 0 10px;
   max-width: 700px;

   position: relative;
`;