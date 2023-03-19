"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Icon from "../../../assets/unknown-user.png";
import { MdMail, MdOutlineContactPage } from "react-icons/md";
import ContainerDelAndEditButtons from "../ContainerDelAndEditButtons";

export default function UserCardInfo({
  propertyId,
  uniqueName,
}: {
  propertyId: string;
  uniqueName: string;
}) {
  const user = useSelector((state: any) => state.user);
  const [deletedSuccesfully, setDeletedSuccesfully] = useState<boolean>();
  const [showMessa, setShowMessa] = useState(false);

  return (
    <>
      <img
        className="w-[6rem] h-[6rem] rounded-full mt-4"
        src={user.img ? user.img : Icon.src}
        alt={`Profile photo of ${user.uniqueName}`}
      />

      <div className="flex flex-col justify-items-center gap-1 w-full">
        <div className="flex flex-col items-center">
          <h2 className="font-medium text-2xl">{user.uniqueName}</h2>

          <p className="text-gray-700 text-sm">Agent</p>
        </div>

        <div className="flex gap-1 items-center justify-center">
          <MdMail className="text-lg" />

          {user.email}
        </div>

        {user.uniqueName === uniqueName ? (
          <ContainerDelAndEditButtons
            setDeletedSuccesfully={setDeletedSuccesfully}
            setShowMessa={setShowMessa}
            propertyId={propertyId}
          />
        ) : null}

        {showMessa ? (
          <div
            className={`fixed top-[10%] left-[50%] -translate-x-[50%] rounded-xl py-2 px-4 z-[1050] ${
              !deletedSuccesfully
                ? "bg-red-600 text-white"
                : "bg-green-600 text-white"
            }`}
          >
            <p className="font-medium">
              {!deletedSuccesfully
                ? `Something went wrong, try to delete the property again`
                : "You have succesfully deleted the property!"}
            </p>
          </div>
        ) : null}
      </div>
    </>
  );
}
