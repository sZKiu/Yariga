import React from "react";
import Unknown from "../../../../assets/unknown-user.png";
import { MdOutlineContactPage } from "react-icons/md";
import { HiUser } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import { TbBuildingSkyscraper } from "react-icons/tb";

export default async function Agent({
  age,
  email,
  image,
  uniqueName,
  username,
  authorProperties,
}: {
  uniqueName: string;
  username: string;
  email: string;
  image: string;
  age: number;
  authorProperties: any;
}) {
  return (
    <div className="flex gap-3 bg-white rounded-lg p-2">
      <img
        className="w-24 h-24 rounded-lg"
        src={image ? image : Unknown.src}
        alt="Profile Image"
      />

      <div className="flex flex-col justify-between w-[90%]">
        <div className="flex gap-2 items-center">
          <h1 className="text-2xl font-medium">{uniqueName}</h1>

          <span className="text-xs text-gray-600">Real-Estate Agent</span>
        </div>

        <div className="flex justify-between text-gray-700">
          <div className="flex items-center gap-1.5">
            <HiUser className="text-xl" />

            <p>{username}</p>
          </div>

          <div className="flex items-center gap-1.5">
            <IoMdMail className="text-xl" />

            <p>{email}</p>
          </div>

          <div className="flex items-center gap-1.5">
            <MdOutlineContactPage className="text-xl" />

            <p>{age}</p>
          </div>
        </div>

        <div className="flex gap-1.5 text-gray-700 items-center">
          <TbBuildingSkyscraper className="text-xl"/>

          <p>{authorProperties} Properties</p>
        </div>
      </div>
    </div>
  );
}
