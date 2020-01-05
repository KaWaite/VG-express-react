import React from "react";
import Articles from "./Articles";
import UpcomingGames from "./UpcomingGames";
import Middle from "./Middle";

export default function Main() {
  return (
    <div>
      <UpcomingGames />
      <Articles />
      <Middle />
    </div>
  );
}
