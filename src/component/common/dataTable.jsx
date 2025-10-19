"use client";
// React
import React, { useState } from "react";

// UI Components
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
} from "@heroui/react";

// Data
import generalData from "@/data/general.json";

export const columns = [
  { key: "no", label: "No." },
  { key: "company", label: "Company Name" },
  { key: "gstOrpan", label: "GST or PAN" },
  { key: "orderId", label: "Order ID" },
  { key: "invoiceId", label: "Invoice ID" },
  { key: "issueDate", label: "Issued Date" },
  { key: "amount", label: "Invoice Amount" },
  { key: "department", label: "Department" },
];

const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const DataTable = ({ data = [] }) => {
  const [expandedRow, setExpandedRow] = useState(null);

  const handleRowClick = (item, index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  return (
    <div className="overflow-x-auto">
      <Table aria-label="Invoice received table" className="min-w-full" isStriped classNames={{
        wrapper: "rounded-sm p-0",
        thead: "",
        th: "border-b-[1px] border-[#707070] text-[#141414] text-[16px]",
        td: "text-[#575757] text-[14px]",
        
      }}>
        <TableHeader>
          <TableColumn className="text-center">
            All
          </TableColumn>
          {columns.map((column) => (
            <TableColumn
              key={column.key}
              className="px-4 py-3 text-left tracking-wider"
            >
              {column.label}
            </TableColumn>
          ))}
          <TableColumn className="px-4 py-3 text-lef tracking-wider">
            {expandedRow !== null && "Remarks"}
          </TableColumn>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <TableRow
                className={`hover:bg-gray-50 cursor-pointer ${
                  expandedRow === index ? "bg-blue-50" : ""
                }`}
                onClick={() => handleRowClick(item, index)}
              >
                <TableCell className="px-3 text-center whitespace-nowrap">
                  <Checkbox classNames={{
                    wrapper: "me-0"
                  }}/>
                </TableCell>
                <TableCell className="px-4 py-3 whitespace-nowrap">
                  {index + 1}
                </TableCell>
                <TableCell className="px-4 py-3 whitespace-nowrap">
                  {item.company}
                </TableCell>
                <TableCell className="px-4 py-3 whitespace-nowrap">
                  {item.gstOrpan}
                </TableCell>
                <TableCell className="px-4 py-3 whitespace-nowrap">
                  {item.orderId}
                </TableCell>
                <TableCell className="px-4 py-3 whitespace-nowrap">
                  {item.invoiceId}
                </TableCell>
                <TableCell className="px-4 py-3 whitespace-nowrap">
                  {formatDate(item.issueDate)}
                </TableCell>
                <TableCell className="px-4 py-3 whitespace-nowrap text-[#141414] text-[16px]">
                  {generalData.currencySymbol} {item.amount}
                </TableCell>
                <TableCell className="px-4 py-3 whitespace-nowrap">
                  {item.department}
                </TableCell>
                <TableCell className="px-4 py-3 whitespace-nowrap">
                  {expandedRow === index ? item?.remark?.short : ""}
                </TableCell>
              </TableRow>
              {expandedRow === index && (
                <TableRow className="bg-blue-50">
                  <TableCell colSpan={columns.length + 2} className="px-4 py-2">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Remarks:</span>{" "}
                      {item?.remark?.description}
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;
