"use client";

import React from "react";

// Layout
import DashboardLayout from "@/component/common/layout/dashboard";

// Components
import DashboardHeader from "@/component/common/dashboardHeader";
import DataTable from "@/component/common/dataTable";

// UI Components
import { Input } from "@heroui/react";

// Icons
import { Search, SlidersHorizontal } from "lucide-react";

// Data
import invoiceData from "@/data/invoice-received.json";

// Add some sample remarks to the data
const processedData = invoiceData;

const Page = () => {
  return (
    <DashboardLayout>
      <DashboardHeader
        title="Invoice Received"
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          {
            label: "Invoice Received",
            href: "/dashboard/invoice-received",
            isCurrent: true,
          },
        ]}
      />
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="bg-white shadow-[0px_1px_2px_#00000017] w-24 h-10 p-2 rounded-md flex items-center justify-center">
            <p className="text-[14px] text-[#002341] font-medium">Approval</p>
          </div>
          <div className="bg-white shadow-[0px_1px_2px_#00000017] w-24 h-10 p-2 rounded-md flex items-center justify-center">
            <p className="text-[14px] text-[#002341] font-medium">Rejected</p>
          </div>
          <div className="bg-white shadow-[0px_1px_2px_#00000017] w-24 h-10 p-2 rounded-md flex items-center justify-center">
            <p className="text-[14px] text-[#002341] font-medium">Pending</p>
          </div>
        </div>

        {/* Search Input with Icons */}
        <div className="flex items-center gap-4 justify-end">
          <div>
            <Input
              type="text"
              startContent={<Search />}
              placeholder="Search"
              classNames={{
                inputWrapper:
                  "rounded-sm shadow-[0px_1px_1px_#00000029] min-h-8 h-8 px-2 bg-white w-72",
              }}
            />
          </div>

          <button
            type="button"
            className="flex items-center justify-center w-8 aspect-square bg-white rounded-sm shadow-[0px_1px_1px_#00000029]"
          >
            <SlidersHorizontal className="h-4 w-4" />
          </button>
        </div>

        {/* Table */}
        <DataTable data={processedData} />
      </div>
    </DashboardLayout>
  );
};

export default Page;
