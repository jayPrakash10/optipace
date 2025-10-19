import React from "react";
import { currentWeekDates } from "@/utils/currentWeekDates";

const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const week = ["S", "M", "T", "W", "T", "F", "S"];

const DashboardCalendar = () => {
  const weekDates = currentWeekDates();
  const date = new Date();
  const cellClass = "flex items-center justify-center py-1 px-0.5 h-7 w-6";
  const todayWeekClass = "bg-[#FFA741] text-white rounded-t-xl";
  const todayDateClass = "bg-[#1F2439] text-white rounded-b-xl";

  return (
    <div>
      <p className="text-sm text-[#141414] mb-[5px]">
        {month[date.getMonth()]} {date.getFullYear()}
      </p>
      <div className="grid grid-cols-7 gap-x-2">
        {week.map((day, index) => (
          <span
            key={index}
            className={`${cellClass} ${
              date.getDay() === index ? todayWeekClass : ""
            }`}
          >
            {day}
          </span>
        ))}

        {weekDates.map((wDate, index) => {
          const day = new Date(wDate);
          return (
            <div
              key={index}
              className={`${cellClass} ${
                date.getDate() === day.getDate() ? todayDateClass : ""
              }`}
            >
              {day.getDate()}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardCalendar;
