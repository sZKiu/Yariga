"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FilterButtonsContainer from "@/components/common/FilterButtons";
import ButtonsNextPrev from "@/components/common/ButtonsNextPrev";
import Link from "next/link";
import { MdLocationOn } from "react-icons/md";
import { Property } from "@/interfaces/interfaces";

interface Data {
  properties: Property[];
  pages: number;
}

function MainProperties(
  { path, title }: { path?: string; title?: string } = { path: "", title: "All Properties" }
) {
  const user = useSelector((state: any) => state.user);
  const [data, setData] = useState<Data>();
  const [isExpensive, setIsExpensive] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (isExpensive) {
      const datas: any = data?.properties.sort((a, b) => {
        return a.price - b.price;
      });

      setData((lastProps: any) => {
        return { properties: datas, pages: lastProps?.pages };
      });
    } else {
      const datas: any = data?.properties.sort((a, b) => {
        return b.price - a.price;
      });

      setData((lastProps: any) => {
        return { properties: datas, pages: lastProps?.pages };
      });
    }
  }, [isExpensive]);

  return (
    <>
      <h1 className="text-2xl font-medium text-zinc-800/90">{ title }</h1>

      <div className="flex justify-between">
        <FilterButtonsContainer
          page={page}
          isExpensive={isExpensive}
          setIsExpensive={setIsExpensive}
          setData={setData}
          setPage={setPage}
          path={path}
        />

        {user.uniqueName ? (
          <Link
            href={"/properties/create"}
            className={`flex items-center gap-2 text-white py-0.5 px-4 rounded-lg bg-[#4d45ef] transition-colors duration-300 hover:bg-green-600`}
          >
            <span className="text-2xl">+</span> Add Property
          </Link>
        ) : (
          <div
            className={`flex items-center gap-2 text-white py-0.5 px-4 rounded-lg bg-gray-600 cursor-default`}
          >
            <span className="text-2xl">+</span> Add Property
          </div>
        )}
      </div>

      <section className="grid-template-cols-properties-ld w-full">
        {data?.properties
          ? data?.properties?.map(
              ({ authorUniqueName, image, name, price, type, location }, i) => {
                return (
                  <Link
                    href={`/properties/${authorUniqueName}/${name.replaceAll(" ", "-")}`}
                    className="bg-white rounded-lg p-2 pb-4 min-w-[288px] max-h-[256px] flex flex-col gap-2"
                    key={i}
                  >
                    <img
                      className="w-[20rem] h-[180px] rounded-lg"
                      src={image}
                      alt={name}
                    />

                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between gap-2">
                        <h1 className="font-medium text-zinc-700 text-[15px]">
                          {name.length > 20 ? name.slice(0, 20) + "..." : name}{" "}
                          & {type.charAt(0).toUpperCase() + type.slice(1)}
                        </h1>

                        <span className="bg-indigo-500/30 py-[1px] px-2 rounded-lg text-indigo-700 font-medium text-[12px]">
                          $
                          {price.toString().length > 4
                            ? price.toString().slice(0, 4) + "..."
                            : price}
                        </span>
                      </div>

                      <div className="flex gap-2 items-center">
                        <MdLocationOn className="font-medium text-zinc-700" />

                        <p className="text-gray-600 text-[15px]">{location}</p>
                      </div>
                    </div>
                  </Link>
                );
              }
            )
          : null}
      </section>

      {data ? (
        <ButtonsNextPrev
          setPage={setPage}
          actPage={page}
          totalPage={data?.pages}
        />
      ) : null}
    </>
  );
}

export default MainProperties;
