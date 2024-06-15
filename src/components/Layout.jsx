// components/Layout.js

import Navbar from "@/pages/NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
