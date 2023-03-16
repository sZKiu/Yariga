"use client";
import React, { useEffect } from "react";
import UserPart from "./UserPart";
import { setUser } from "@/redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { logo, yariga } from "../../../assets";
import { UserwError } from "@/interfaces/interfaces";
import { Envs } from "@/constants";

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    (async function () {
      const meInfo = await fetch(`${Envs.API_URL}/api/v1/auth/me/cookie`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      });

      const json = await meInfo.json();

      dispatch(
        setUser({
          ...json,
        })
      );
    })();
  }, []);

  return (
    <header className="flex justify-between px-8 py-3 sticky top-0 bg-white z-[1000]">
      <img className="h-[1.5rem]" src={yariga.src} alt="Yariga" />

      {user ? <UserPart meInfo={user} /> : null}
    </header>
  );
}
