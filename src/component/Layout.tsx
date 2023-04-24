import React, { ReactNode } from "react";
import LoadingPage from "./LoadingPage";

interface LayoutI {
  children: ReactNode;
}

const Layout: React.FC<LayoutI> = ({ children }) => {
  return (
    <>
      <LoadingPage />
      {children}
    </>
  );
};

export default Layout;
