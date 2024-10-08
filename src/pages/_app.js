import "@/styles/globals.css";
import Layout from "../../components/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "../../components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
