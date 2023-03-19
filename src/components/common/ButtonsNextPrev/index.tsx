import React from "react";

export default function ButtonsNextPrev({
  actPage,
  totalPage,
  setPage,
}: {
  actPage: number;
  totalPage: number;
  setPage: (x: number) => void;
}) {
  const classButton =
    "flex items-center justify-center py-[3px] px-4 rounded-md text-white text-2xl";

  return (
    <div className="flex gap-3 items-center">
      <button
        onClick={() => {
          if (!(actPage === 0)) {
            setPage(actPage - 1);
          }
        }}
        className={`${classButton}  ${
          actPage === 0
            ? "bg-gray-600 cursor-default"
            : "bg-[#4d45ef] transition-colors duration-300 hover:bg-[#26217d]"
        }`}
      >
        🠤
      </button>

      <div className="flex gap-1">
        <p className="text-gray-800">Page</p>
        <p className="font-medium">{`${actPage + 1} of ${
          !totalPage ? 1 : totalPage
        }`}</p>
      </div>

      <button
        onClick={() => {
          if (!(actPage + 1 === totalPage) && totalPage !== 0) {
            setPage(actPage + 1);
          }
        }}
        className={`${classButton}  ${
          !(actPage + 1 === totalPage) && totalPage !== 0
            ? "bg-[#4d45ef] transition-colors duration-300 hover:bg-[#26217d]"
            : "bg-gray-600 cursor-default"
        }`}
      >
        🠦
      </button>
    </div>
  );
}
