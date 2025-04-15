import React from "react";
import Header from "../Header/Header";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar";

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <>
      <Header />
      <div className="flex gap-5">
        <aside className="border-1 border-gray-300 p-5">
          <Sidebar />
        </aside>
        {isNavigating && <span>Loading....</span>}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
