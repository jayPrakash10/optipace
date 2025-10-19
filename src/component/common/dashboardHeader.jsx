// React
import React from "react";

// UI Components
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";

// Components
import DashboardCalendar from "./dashboardCalendar";

const DashboardHeader = ({ breadcrumbs = [], title }) => {
  const items = breadcrumbs;

  return (
    <div className="py-6">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        {/* Left side - Breadcrumb and Page Title */}
        <div className="space-y-5">
          <Breadcrumbs
            classNames={{
              list: "",
              separator: "text-gray-400",
            }}
          >
            {items.map((item, index) => {
              return (
                <BreadcrumbItem
                  key={index}
                  href={item.href}
                  isCurrent={item.isCurrent}
                  classNames={{
                    item: "text-[12px] text-[#141414] hover:text-text-[#141414]",
                  }}
                >
                  {item.label}
                </BreadcrumbItem>
              );
            })}
          </Breadcrumbs>

          <h1 className="text-[22px] font-bold text-[#141414] leading-7">
            {title}
          </h1>
        </div>

        {/* Right side - Calendar */}
        <div className="flex items-center space-x-4">
          <DashboardCalendar />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
