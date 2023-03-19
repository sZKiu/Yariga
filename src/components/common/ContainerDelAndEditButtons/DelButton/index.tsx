import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

export default function DelButton() {
  return (
    <button onClick={async () => {
      
    }} className="bg-red-600 w-[50%] py-2 px-6 text-white font-medium flex rounded-lg items-center gap-2 justify-center">
      <BsFillTrashFill />
      Delete
    </button>
  );
}
