// import '../styles/globals.css'; // Import Tailwind CSS
import Layout from '../components/page.js'; // Import the Layout component

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
