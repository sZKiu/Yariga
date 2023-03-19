import React from "react";
import UserCardInfo from "@/components/common/UserCardInfo";
import Icon from "../../../../assets/logo.svg";
import { Envs } from "@/constants";
import { Property, User } from "@/interfaces/interfaces";
import { AiFillStar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";

export const metadata = {
  title: "Properties Names",
  description: "Welcome to Yariga",
  siteName: "Yariga",
  type: "website",
  icons: {
    icon: { url: Icon.src, type: "image/svg" },
  },
};

async function getProperty(
  uniqueName: string,
  title: string
): Promise<Property> {
  const res = await fetch(
    `${Envs.API_URL}/api/v1/properties/${uniqueName}/${title}`,
    {
      mode: "cors",
      credentials: "include",
      next: { revalidate: 3600 },
    }
  );

  
  const json = await res.json();

  return json;
}

export default async function PropertyName({
  params: { uniqueName, propertyName },
}: {
  params: { uniqueName: string; propertyName: string };
}) {
  const propertyNameToSend = decodeURIComponent(
    propertyName.replaceAll("-", " ")
  );

  const { authorUniqueName, description, image, location, name, price, type, _id } =
    await getProperty(uniqueName, propertyNameToSend);

  return (
    <div className="w-[86%] bg-gray-200 rounded-md py-4 px-6 flex flex-col gap-6">
      <h1 className="text-2xl text-zinc-800/90">
        Details of{" "}
        <span className="text-[#4d45ef] font-medium">{propertyNameToSend}</span>
      </h1>

      <section className="flex gap-6">
        <div className="w-[70%] flex flex-col gap-3">
          <img
            className="bg-white rounded-lg w-full h-[20rem]"
            src={image}
            alt={`Profile image of ${authorUniqueName}`}
          />

          <div className="flex justify-between">
            <p className="text-lg text-gray-900">
              {type.slice(0, 1).toUpperCase() + type.slice(1)}
            </p>

            <div className="flex text-lg gap-0.5 text-orange-500">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col gap-0.5">
              <h2 className="text-xl text-zinc-900 font-medium">{name}</h2>

              <div className="flex items-center gap-0.5 text-gray-800">
                <MdLocationOn className="text-lg" />

                {location}
              </div>
            </div>

            <div className="flex flex-col">
              <p className="font-medium">Price</p>

              <div className="flex items-end gap-2">
                <span className="text-[#4d45ef] text-xl font-medium">
                  ${price}
                </span>

                <p className="text-sm text-gray-700">for one day</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-zinc-400 text-lg">Description</h3>

            <p className="text-sm text-blue-gray-800">{description}</p>
          </div>
        </div>

        <div className="w-[30%] border-[1.5px] border-gray-300 rounded-lg py-3 px-6 flex flex-col items-center justify-center gap-3 max-h-[20rem]">
          <UserCardInfo propertyId={_id} uniqueName={uniqueName} />
        </div>
      </section>
    </div>
  );
}
