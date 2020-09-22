import Layout from '../components/Layout';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Theme from '../styles/Theme';

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body, html {
  font-family: 'Montserrat', sans-serif;
  color: ${(props) => props.theme.colors.black};
  font-size: 16px;
  max-width: 100vw;
  background-color: ${(props) => props.theme.colors.white};
  color:${(props) => props.theme.colors.black};
}
`;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
