import React from "react";
import { useSelector } from "react-redux";

export default function SearchHistory() {
  const searchHistory = useSelector((state) => state.history);
  return (
    <div>
    <h3>Recent Searches</h3>
      {searchHistory?.map((searchItem) => (
        <div>{searchItem}</div>
      ))}
    </div>
  );
}