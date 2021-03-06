import type { AppProps /*, AppContext */ } from 'next/app';
import { ThemeProvider } from 'styled-components';

const theme = {
	colors: {
		primary: '#0070f3',
	},
}


function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
}

export default MyApp