import React from "react";

// Components
import Header from "../header";
import FloatingSidebar from "../floatingSidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="min-h-screen bg-[#edf0f4]">
        <Header />
        <FloatingSidebar />
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1500px] w-full pb-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
