import React from "react";

// Components
import DashboardCard from "@/component/common/dashboardCard";
import DashboardHeader from "@/component/common/dashboardHeader";
import Header from "@/component/common/header";
import FloatingSidebar from "@/component/common/floatingSidebar";
import DonutChart from "@/component/common/donutChart";

// Data
import { icons } from "@/data/icons";
import generalData from "@/data/general.json";
import dashboardData from "@/data/dashboard.json";

const Page = () => {
  return (
    <div className="min-h-screen bg-[#edf0f4]">
      <Header />
      <FloatingSidebar />
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full pb-8">
        <DashboardHeader
          title="Dashboard"
          breadcrumbs={[
            { label: "Dashboard", href: "/dashboard", isCurrent: true },
          ]}
        />
        <div className="space-y-5">
          <div className="flex items-center gap-4 bg-white w-fit min-w-80 px-3 py-2 rounded-lg border border-[#CFD6E5] shadow-[0px_1px_2px_#00000029]">
            <p className="text-[#141414]">Overall Outstanding</p>
            <p className="text-[#1F2439] text-[24px] font-medium">
              <span>{generalData.currencySymbol}</span>{" "}
              {dashboardData.overallOutstanding}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {dashboardData.cards.map((item, index) => (
              <DashboardCard
                key={index}
                title={item.label}
                totalValue={item.totalValue}
                amountValue={item.amountValue}
                icon={icons[item.icon]}
              />
            ))}
          </div>

          {/* Pie Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <DonutChart
              cardTitle={"Queues"}
              chartData={dashboardData.graphs.queues}
            />
            <DonutChart
              cardTitle={"KPI"}
              chartData={dashboardData.graphs.kpi}
            />
          </div>

          {/* Due Summary */}
          <div className="bg-[#d5e3ff] shadow-[0px_1px_1px_#00000029] rounded-lg p-3">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5 gap-4">
              <div>
                <h2 className="text-base font-medium text-[#1F2439]">
                  Due by Age Summary
                </h2>
                <p className="text-[14px] text-[#7B7C89]">
                  Payment due days wise
                </p>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-sm text-[#7B7C89]">Penalty Saved Amount</p>
                <p className="min-w-40 text-[18px] font-medium text-[#141414] bg-white shadow-[0px_1px_1px_#00000029] rounded-lg px-3 py-1.5">
                  {generalData.currencySymbol}{" "}
                  {dashboardData.dueSummary.penaltySaved.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {dashboardData.dueSummary.ageGroups.map((group, index) => (
                <div
                  key={index}
                  className="flex-1 bg-white shadow-[0px_1px_1px_#00000029] rounded-lg p-2 space-y-3"
                >
                  <p className="text-[14px] text-[#7B7C89]">{group.days}</p>
                  <p className="text-[18px] font-medium text-[#1F2439] mt-1">
                    <span className="text-[#7B7C89]">{generalData.currencySymbol}</span>{" "}
                    {group.amount.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
