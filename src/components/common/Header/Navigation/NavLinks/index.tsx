"use client";
import React, { ReactElement, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { IconType } from "react-icons/lib";

function NavLinks({
  name,
  children,
}: {
  name: string;
  children: ReactElement;
}) {
  const link = useRef(null);
  const params = usePathname();
  return (
    <li
      onClick={(e) => {
        e.preventDefault();

        if (e.currentTarget.dataset.name === "Dashboard") {
          e.currentTarget
            .closest("UL")
            ?.childNodes.forEach((li: ChildNode, i: number) => {
              //@ts-ignore
              li.childNodes[0].classList.remove(
                "bg-[#4d45ef]",
                "hover:bg-[#26217d]",
                "text-white"
              );
            });

          e.currentTarget.classList.add("font-medium");

          return;
        }

        if (!link.current) return;

        e.currentTarget
          .closest("UL")
          ?.childNodes.forEach((li: ChildNode, i: number) => {
            //@ts-ignore
            li.childNodes[0].classList.remove(
              "bg-[#4d45ef]",
              "hover:bg-[#26217d]",
              "text-white"
            );

            //@ts-ignore
            li.childNodes[0].classList.add("hover:bg-gray-100/90");
          });

        //@ts-ignore
        link.current.classList.add(
          "bg-[#4d45ef]",
          "hover:bg-[#26217d]",
          "text-white"
        );

        //@ts-ignore
        link.current.classList.remove("hover:bg-gray-100/90");

        document.querySelector("[data-name]")?.classList.remove("font-medium");
      }}
      data-name={name}
      className="w-full"
    >
      {name !== "Logout" ? (
        <Link
          ref={link}
          className={`flex gap-3 items-center text-gray-600 transition-colors duration-300 py-3 px-6 rounded-xl w-full h-full ${
            name.toLocaleLowerCase().replaceAll(" ", "-") ===
            params?.replace("/", "")
              ? "bg-[#4d45ef] hover:bg-[#26217d] text-white"
              : "hover:bg-gray-100/90"
          } ${params === "/" && name === "Dashboard" ? "font-medium" : ""} `}
          href={
            name === "Dashboard"
              ? "/"
              : `/${name.toLocaleLowerCase().replaceAll(" ", "-")}`
          }
        >
          {children}

          <p>{name}</p>
        </Link>
      ) : (
        <button
          ref={link}
          className={`flex gap-3 items-center text-gray-600 hover:bg-gray-100/90 transition-colors duration-300 py-3 px-6 rounded-xl w-full h-full`}
          onClick={async () => {
            const res = await fetch(
              "https://apiexpressuser-2-k8787246.deta.app/api/v1/auth/logout",
              {
                credentials: "include",
                headers: {
                  "content-type": "application/json",
                },
              }
            );
            location.reload();
          }}
        >
          {children}

          {name}
        </button>
      )}
    </li>
  );
}

export default NavLinks;
