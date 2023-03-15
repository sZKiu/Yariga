"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useRouter } from "next/navigation";

function MyProfileMain() {
  const router = useRouter();
  const user = useSelector((state: any) => state.user);

  if (!user.uniqueName) router.push("/");

  return (
    <section className="w-[86%] bg-gray-200 rounded-md p-3 flex flex-col gap-4">
      <h1 className="text-2xl font-medium text-zinc-800/90">My Profile</h1>
    </section>
  );
}

export default MyProfileMain;
