import React from "react";
import Link from "next/link";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { Envs } from "@/constants";

export default function ContainerDelAndEditButtons({
  propertyId,
  setDeletedSuccesfully,
  setShowMessa,
}: {
  propertyId: string;
  setDeletedSuccesfully: (x: boolean) => void;
  setShowMessa: (x: boolean) => void;
}) {
  return (
    <div className="flex gap-4 mt-2">
      <Link
        href={`/update/${propertyId}`}
        className="bg-[#4d45ef] w-[50%] py-2 px-6 text-white font-medium flex rounded-lg items-center gap-2 justify-center"
      >
        <BsFillPencilFill />
        Edit
      </Link>

      <button
        onClick={async () => {
          const res = await fetch(
            `${Envs.API_URL}/api/v1/properties/delete/${propertyId}`,
            {
              credentials: "include",
              mode: "cors",
              method: "DELETE",
            }
          );

          setDeletedSuccesfully(res.ok);

          setShowMessa(true);

          setTimeout(() => {
            setShowMessa(false);
            document.getElementById("anchor-to-home")?.click();
          }, 2000);
        }}
        className="bg-red-600 w-[50%] py-2 px-6 text-white font-medium flex rounded-lg items-center gap-2 justify-center"
      >
        <BsFillTrashFill />
        Delete
      </button>
    </div>
  );
}
