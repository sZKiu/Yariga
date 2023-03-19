import React from "react";
import MainProperties from "@/components/properties/MainProperties";

export default function MyProperties() {
  return (
    <section className="w-[86%] bg-gray-200 rounded-md p-3 px-6 flex flex-col gap-6">
      <MainProperties path="me/properties" title="All My Properties" />
    </section>
  );
}
