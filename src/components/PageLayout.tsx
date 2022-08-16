import * as React from "react";
import Header from "./header";

type Props = {
  children?: React.ReactNode;
};

const PageLayout = ({ children }: Props) => {
  return (
    <div className="bg-base-100 py-4">
      <Header />
      {children}
    </div>
  );
};

export default PageLayout;
