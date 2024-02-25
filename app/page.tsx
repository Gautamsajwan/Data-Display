"use client";
import { FilterOptions, Search, RenderCards, Footer } from "@/components";
import { useState } from "react";
import data from "../constants/dummyData";

type UserDetails = {
  name: string;
  description: string;
  jobsApplied: number;
  likes: number;
};

export default function Home() {
  const [allData, setAllData] = useState<UserDetails[]>(data);
  const [copyData, setCopyData] = useState<UserDetails[]>(data);
  const [searchText, setsearchText] = useState<string>("");
  const [searchTimeoutID, setSearchTimeoutID] = useState<number | null>(null);
  const [searchedResults, setSearchedResults] = useState<UserDetails[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(searchTimeoutID) {
      clearTimeout(searchTimeoutID);
    }

    setsearchText(e.target.value);
    const searchText = e.target.value

    const timeoutID = window.setTimeout(() => {
      const searchResult = allData.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
      console.log({searchResult})
      setSearchedResults(searchResult);
    }, 400)
  
    setSearchTimeoutID(timeoutID);
  }

  const handleLikeFilter = (event?: React.MouseEvent<HTMLButtonElement>) => {
    const sortedDataByLikes = [...allData].sort((a, b) => b.likes - a.likes)
    setAllData(sortedDataByLikes)
  }

  const handleJobsFilter = (event?: React.MouseEvent<HTMLButtonElement>) => {
    const sortedDataByJobs = [...allData].sort((a, b) => b.jobsApplied - a.jobsApplied)
    setAllData(sortedDataByJobs)
  }

  const cancelFilter = (event?: React.MouseEvent<HTMLButtonElement>) => {
    setAllData(copyData)
  }

  return (
    <main className="min-h-screen mx-auto">
      <Search value={searchText} handleChange={handleSearchChange}/>
      <FilterOptions sortbyLikes={handleLikeFilter} sortbyJobs={handleJobsFilter} cancelFilter={cancelFilter}/>
      <div className="max-w-7xl mx-3 xl:mx-auto bg-[#ced3d8] px-3 py-3.5 rounded-xl gap-4 h-screen space-y-3 overflow-y-auto exceeding-dark">
        {searchText ? (
          <RenderCards data={searchedResults} title="No search results found" />
        ) : (
          <RenderCards data={allData} title="No posts yet" />
        )}
      </div>
      <Footer />
    </main>
  );
}