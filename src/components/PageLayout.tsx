import * as React from "react";
import Site from "../types/Site";
import Header from "./header";
import Footer from "./footer";

type Props = {
  children?: React.ReactNode;
};

const PageLayout = ({ children }: Props) => {
  return (
    <div className="bg-base-100">
      <Header />
      {children}
      {/* <Footer _site={_site}></Footer> */}
    </div>
  );
};

export default PageLayout;
