import type { AppProps } from 'next/app';
import GlobalStyle from '@styles/global';
import AppProvider from '../hooks/index';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </AppProvider>
  );
}
