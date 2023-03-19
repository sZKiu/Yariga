"use client";
import React, { useState, useEffect } from "react";
import FilterByTitle from "./FilterByTitle";
import FilterByType from "./FilterByType";
import FilterPrice from "./FilterePrice";
import { Envs } from "@/constants";
import { Property } from "@/interfaces/interfaces";

interface Data {
  properties: Property[];
  pages: number;
}

export default function FilterButtonsContainer({
  setData,
  setIsExpensive,
  isExpensive,
  page,
  setPage,
  path,
}: {
  setData: (x: Data) => void;
  setIsExpensive: (x: boolean) => void;
  isExpensive: boolean;
  page: number;
  setPage: (x: number) => void;
  path?: string;
}) {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchType, setSearchType] = useState("");
  const [lastSearchType, setLastSearchType] = useState("");
  const [lastSearchTitle, setLastSearchTitle] = useState("");

  useEffect(() => {
    const divParent = document
      .querySelector("[aria-expanded='false']")
      ?.closest("DIV");
    divParent?.classList.replace("min-w-[200px]", "min-w-[115px]");
  }, []);

  useEffect(() => {
    const isTitleEquals = searchTitle === lastSearchTitle;
    const isTypeEquals = searchType === lastSearchType;
    const bothEquals = isTitleEquals === isTypeEquals;

    if (!bothEquals) setPage(0);

    (async function () {
      const res = await fetch(
        `${Envs.API_URL}/api/v1/properties/${path ? path : ""}?page=${
          bothEquals ? page : 0
        }${searchType !== "all" && searchType ? `&type=${searchType}` : ""}${
          searchTitle ? `&title=${searchTitle}` : ""
        }`,
        {
          credentials: "include",
          mode: "cors",
        }
      );

      const json = await res.json();

      setData(json);
    })();

    setLastSearchType(searchType);
    setLastSearchTitle(searchTitle);
  }, [searchTitle, searchType, page]);

  return (
    <div className="flex gap-3">
      <FilterPrice setSortPrice={setIsExpensive} value={isExpensive} />

      <FilterByTitle onChange={setSearchTitle} value={searchTitle} />

      <FilterByType setSearchType={setSearchType} />
    </div>
  );
}
