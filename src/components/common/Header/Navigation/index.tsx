import React from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { useSelector } from "react-redux";
import { MdDashboard } from "react-icons/md";
import { TbBuildingSkyscraper, TbUsers, TbLogout } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { IconType } from "react-icons/lib";

function Navigation({ showAll }: { showAll: boolean }) {
  const user = useSelector((state: any) => state.user);

  const options = [
    {
      icon: MdDashboard,
      name: "Dashboard",
      i: "u3rn3e2",
    },
    {
      icon: TbBuildingSkyscraper,
      name: "Properties",
      i: "jdi2dud",
    },
    {
      icon: TbUsers,
      name: "Agents",
      i: "dnudu22d",
    },
    {
      icon: CgProfile,
      name: "My Profile",
      i: "eu3h0d2du",
    },
    {
      icon: TbLogout,
      name: "Logout",
      i: "483h43hhf",
    },
  ];

  if (!user.uniqueName) {
    options.pop();
    options.pop();
  }

  return (
    <nav className="w-[14%]">
      <ul className="flex flex-col justify-start items-start px-2 gap-2 sticky top-14">
        {options.map((el: { name: string; icon: IconType; i: string }) => (
          <NavLinks key={el.i} name={el.name}>
            <el.icon className="text-2xl" />
          </NavLinks>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
