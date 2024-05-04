"use client";

import React, { FC, useEffect } from "react";
import { DEMO_EXPERIENCES_LISTINGS } from "@/data/listings";
import { ExperiencesDataType, StayDataType } from "@/data/types";
import Pagination from "@/shared/Pagination";
import TabFilters from "./TabFilters";
import Heading2 from "@/shared/Heading2";
import ExperiencesCard from "@/components/ExperiencesCard";

export interface SectionGridFilterCardProps {
  className?: string;
  data?: StayDataType[];
  queryData?: QueryDataType;
}

export interface QueryDataType {
  location: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

const defaultQueryData: QueryDataType = {
  location: "Tokyo",
  checkIn: "2022-08-12",
  checkOut: "2022-08-18",
  guests: 2,
};

const DEMO_DATA: ExperiencesDataType[] = DEMO_EXPERIENCES_LISTINGS.filter(
  (_, i) => i < 8
);

const SectionGridFilterCard: FC<SectionGridFilterCardProps> = ({
  className = "",
  data = DEMO_DATA,
  queryData = defaultQueryData,
}) => {
  // use effect get data from url
  useEffect(() => {
    // get data from url
    const urlParams = new URLSearchParams(window.location.search);
    const location = urlParams.get("location") || "Tokyo";
    const checkIn = urlParams.get("checkIn") || "2022-08-12";
    const checkOut = urlParams.get("checkOut") || "2022-08-18";
    const guests = urlParams.get("guests") || 2;
    console.log({ location, checkIn, checkOut, guests });
  }, []);

  return (
    <div id="experiences-head" className={`nc-SectionGridFilterCard ${className}`}>
      <Heading2
        heading={`Experiences in ${queryData.location}`}
        subHeading={
          <span className="block text-neutral-500 dark:text-neutral-400 mt-3">
            233 experiences
            <span className="mx-2">·</span>
            {queryData.checkIn} - {queryData.checkOut}
            <span className="mx-2">·</span>{queryData.guests} guests
          </span>
        }
      />

      <div className="mb-8 lg:mb-11">
        <TabFilters />
      </div>
      <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {data.map((stay) => (
          <ExperiencesCard key={stay.id} data={stay} />
        ))}
      </div>
      <div className="flex mt-16 justify-center items-center">
        <Pagination />
      </div>
    </div>
  );
};

export default SectionGridFilterCard;
