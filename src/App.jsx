import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './assets/styles/global';
import defaultTheme from './assets/styles/theme';


import Router from './Router';


function App() {

	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />

			<BrowserRouter>
				<Router />
			</BrowserRouter>

		</ThemeProvider>
	);
}

export default App;
