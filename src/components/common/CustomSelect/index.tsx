"use client";
import { Select, Option } from "@material-tailwind/react";
import React, { Ref, useState } from "react";

function CustomSelect({ setType }: { setType: (x: string) => void }) {
  const options = [
    {
      value: "apartment",
      name: "Apartment",
    },
    {
      value: "villa",
      name: "Villa",
    },
    {
      value: "farmhouse",
      name: "Farmhouse",
    },
    {
      value: "condos",
      name: "Condos",
    },
    {
      value: "townhouse",
      name: "Townhouse",
    },
    {
      value: "duplex",
      name: "Duplex",
    },
    {
      value: "studio",
      name: "Studio",
    },
    {
      value: "chalet",
      name: "Chalet",
    },
  ];

  return (
    <div className="flex flex-col w-full gap-6 h-[38px]">
      <Select
        label="Select Type Property"
        variant="outlined"
        color="indigo"
        size="md"
      >
        {options.map(({ value, name }, i) => {
          return (
            <Option key={i} onClick={() => setType(value)} value={value}>
              {name}
            </Option>
          );
        })}
      </Select>
    </div>
  );
}

export default CustomSelect;
