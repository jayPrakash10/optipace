"use client";
// React
import React from "react";

// UI Components
import { Card, CardBody, CardHeader } from "@heroui/react";
import { PieChart, Pie, ResponsiveContainer, Legend } from "recharts";

const DonutChart = ({ chartData, cardTitle }) => {
  if (!chartData || chartData.length === 0) return null;

  return (
    <Card className="shadow-[0px_1px_1px_#00000029] rounded-lg relative pt-3">
      <CardHeader className="absolute top-0 left-0 px-5 text-[18px] font-medium text-[#141414]">
        {cardTitle}
      </CardHeader>
      <CardBody>
        <ResponsiveContainer width="100%" aspect={2}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="label"
              innerRadius={75}
              width={"50%"}
              rotate={"25deg"}
              startAngle={90}
              endAngle={-270}
            />
            <Legend
              layout="vertical"
              verticalAlign="middle"
              align="right"
              itemSorter={(a, b) => 0}
              iconType="circle"
              content={(props) => {
                const { payload } = props;
                return payload.map((entry, index) => (
                  <div key={index} className="flex items-center gap-4 mb-2 text-[14px] text-[#1F2439]">
                    <span
                      className="flex w-2 h-2 rounded-full"
                      style={{ backgroundColor: entry.color }}
                    />
                    {entry.value}
                  </div>
                ));
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardBody>
    </Card>
  );
};

export default DonutChart;
