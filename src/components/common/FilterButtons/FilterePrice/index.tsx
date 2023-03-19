import React from "react";

export default function FilterPrice({
  setSortPrice,
  value,
}: {
  setSortPrice: (x: boolean) => void;
  value: boolean;
}) {
  return (
    <button
      onClick={() => setSortPrice(!value)}
      className="flex items-center justify-center transition-colors duration-300 py-[6px] px-4 rounded-md w-full h-full bg-[#4d45ef] hover:bg-[#26217d] text-white"
    >
      Sort Price { value ? "🠧" : "🠥" }
    </button>
  );
}
