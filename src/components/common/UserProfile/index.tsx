import React from "react";
import { User } from "@/interfaces/interfaces";
import Unknown from "../../../assets/unknown-user.png";
import { MdOutlineContactPage } from "react-icons/md";
import { HiUser } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";

export default function UserProfile({
  user: { uniqueName, username, age, email, image },
}: {
  user: User;
}) {
  return (
    <div className="relativep-4 min-h-fit bg-white rounded-lg flex gap-12">
      <img
        className="h-[16rem] w-[18rem] rounded-tl-lg rounded-bl-lg m-3"
        src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
        alt="splash image"
      />

      <div className="text-zinc-800 flex flex-col justify-center gap-4 mt-6">
        <div>
          <h2 className="font-medium text-2xl">{username}</h2>
          <p className="text-gray-600 text-sm">Realestate Agent</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h4 className="text-gray-600 text-sm">Email</h4>
            <p className="flex items-center gap-2 text-gray-800">
              <IoMdMail className="text-xl text-gray-900" /> {email}
            </p>
          </div>

          <div className="flex gap-20">
            <div className="flex flex-col gap-1">
              <h4 className="text-gray-600 text-sm">Unique Name</h4>
              <p className="flex items-center gap-2 text-gray-800">
                <HiUser className="text-xl text-gray-900" /> {uniqueName}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <h4 className="text-gray-600 text-sm">Age</h4>
              <p className="flex items-center gap-2 text-gray-800">
                <MdOutlineContactPage className="text-xl text-gray-900" /> {age}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-[36%] top-[33%]">
        <img
          src={image ? image : Unknown.src}
          alt="User Image"
          className="h-[4rem] w-[4rem] rounded-full"
        />
      </div>
    </div>
  );
}
