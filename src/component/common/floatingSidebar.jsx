// React
import React from "react";

// Icons/Images
import dashboard from "../../assets/dashboard.svg";
import report from "../../assets/report.svg";
import addInv from "../../assets/add-inv.svg";
import users from "../../assets/users.svg";
import receipt from "../../assets/receipt.svg";
import briefcase from "../../assets/briefcase.svg";

const sidebarData = [
  {
    icon: dashboard,
    title: "Dashboard",
    href: "/dashboard",
    isActive: true,
  },
  {
    icon: report,
    title: "Report",
    href: "/dashboard/invoice-received",
    isActive: false,
  },
  {
    icon: addInv,
    title: "Add Invoice",
    isActive: false,
  },
  {
    icon: users,
    title: "Users",
    isActive: false,
  },
  {
    icon: receipt,
    title: "Without PO",
    isActive: false,
  },
  {
    icon: briefcase,
    title: "Company",
    isActive: false,
  },
];

const FloatingSidebar = () => {
  console.log(sidebarData[0]);

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2 p-0.5 bg-white rounded-r-lg shadow-[0px_3px_6px_#00000029]">
      {sidebarData.map((item, index) => (
        <SidebarItem
          key={index}
          icon={item.icon}
          title={item.title}
          isActive={item.isActive}
          href={item.href}
        />
      ))}
    </div>
  );
};

const SidebarItem = ({ icon, title, isActive, href }) => {
  return (
    <a
      href={href}
      className={`flex flex-col items-center justify-center gap-2 size-[60px] rounded-r-lg ${
        isActive ? "bg-[#13255B] text-white" : " text-[#A6A8B1]"
      }`}
    >
      <img src={icon.src} alt="icon" />
      <p className="text-[10px]">{title}</p>
    </a>
  );
};

export default FloatingSidebar;
