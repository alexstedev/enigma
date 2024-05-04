import React, { FC } from "react";
import SectionGridFilterCard from "../SectionGridFilterCard";

export interface ListingExperiencesPageProps { }

const ListingExperiencesPage: FC<ListingExperiencesPageProps> = ({ }) => {
  return (
    <div id="filter-card" className="container relative">
      <SectionGridFilterCard className="pb-24 lg:pb-28" />
    </div>
  );
};

export default ListingExperiencesPage;
