// React
import React from "react";

// UI Components
import { Card, CardBody } from "@heroui/react";

// Data
import generalData from "@/data/general.json";

const DashboardCard = ({
  icon,
  title,
  totalValue,
  amountValue,
  currencySymbol = generalData.currencySymbol,
  className = "",
}) => {
  return (
    <Card
      className={`shadow-[0px_1px_1px_#00000029] rounded-lg ${className}`}
    >
      <CardBody className="p-3">
        <div className="flex items-start gap-2">
          {/* Left Part - Icon */}
          <div className="w-4 mt-1.5">{icon}</div>

          {/* Right Part - Content */}
          <div className="flex-1 space-y-2">
            <h3 className="text-[18px] text-[#2b2b2b]">{title}</h3>

            <div className="space-y-2">
              <div className="flex items-center">
                <span className="text-[14px] text-[#4D5061] w-10">Total</span>
                <span className="text-[18px] font-medium text-[#1F2439]">
                  {totalValue}
                </span>
              </div>

              <div className="flex items-center">
                <span className="text-[14px] text-[#4D5061] w-10">
                  {currencySymbol}
                </span>
                <span className="text-[18px] font-medium text-[#1F2439]">
                  {amountValue}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default DashboardCard;
