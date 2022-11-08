import { Fragment } from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import "react-toastify/dist/ReactToastify.css";

function Layout({ children }) {
  return (
    <Fragment>
      <Navigation />
      <main className="px-2 lg:px-16">{children}</main>
      <Footer />
    </Fragment>
  );
}
export default Layout;
