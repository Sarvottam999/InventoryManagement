import { InventoryProvider } from "@/context/InventoryContext";
import "@/styles/globals.css";
import NavBar from "./NavBar";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <InventoryProvider>

      <Layout>
      <Component {...pageProps} />
    </Layout>
    </InventoryProvider>
  );
}
