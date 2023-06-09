"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BiLogOut, BiTrash, BiHeart } from "react-icons/bi";
import Unknown from "../../../../assets/unknown-user.png";
import { Envs } from "@/constants";

function UserPart({
  meInfo: {
    uniqueName, username, email, image, age, error
  },
}: {
  meInfo: {
    uniqueName: string;
    username: string;
    email: string;
    image: string | null;
    age: string | null;
    error: string | null;
  };
}) {
  const router = useRouter();
  const [showOptions, setShowOptions] = useState(false);

  return (
    <>
      {!error ? (
        <div className="relative">
          <button onClick={() => setShowOptions(!showOptions)}>
            <img
              className="rounded-full w-[2.5rem] h-[2.5rem]"
              src={image ? image : Unknown.src}
              alt="User Image"
            />
          </button>

          {showOptions ? (
            <div className="absolute left-[50%] -translate-x-[85%]  bg-[#413ca9] rounded-xl shadow-lg shadow-black/20 py-3">
              <div className="flex flex-col items-center gap-2 px-10">
                <h3 className="font-semibold text-xl text-[#90bbff] w-max">
                  <span className="text-white">Hello</span> {username}
                </h3>
              </div>

              <div className="flex flex-col mt-2 gap-2">
                <Link
                  className="font-semibold text-white text-[15px] flex items-center justify-center gap-2 py-0.5 transition-colors hover:bg-[#4e767c]"
                  href="/my-profile/my-properties"
                >
                  My Properties
                  <BiHeart className="text-white text-lg" />
                </Link>

                <button
                  className="font-semibold text-white text-[15px] flex items-center justify-center gap-2 py-0.5 transition-colors hover:bg-[#4e767c]"
                  onClick={async () => {
                    const res = await fetch(
                      `${Envs.API_URL}/api/v1/auth/logout`,
                      {
                        credentials: "include",
                        headers: {
                          "content-type": "application/json",
                        },
                        mode: "cors",
                      }
                    );
                    document.getElementById("anchor-to-home")?.click();
                  }}
                >
                  Log Out
                  <BiLogOut className="text-white text-lg" />
                </button>

                <button
                  className="font-semibold text-white text-[15px] flex items-center justify-center gap-2 transition-colors hover:bg-[#4e767c] py-0.5 rounded-b-lg"
                  onClick={() => {
                    const alert = document.getElementById("alert-del-acc");

                    alert?.classList.replace(
                      "-translate-y-[5000%]",
                      "-translate-y-[50%]"
                    );
                    alert?.classList.replace("opacity-0", "opacity-1");
                  }}
                >
                  Delete Account
                  <BiTrash className="text-white text-lg" />
                </button>
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="flex gap-3">
          <Link
            className="py-0.5 px-3 bg-[#4d45ef] rounded-full text-white flex justify-center items-center"
            href="/login"
          >
            Login
          </Link>

          <Link
            className="py-0.5 px-3 border-2 border-[#4d45ef] rounded-full text-[#4d45ef] flex justify-center items-center"
            href="/register"
          >
            Register
          </Link>
        </div>
      )}
    </>
  );
}

export default UserPart;
