import '../../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../components/theme';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta charSet='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='keywords' content='HTML, CSS, JavaScript' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  );
}

export default MyApp;
