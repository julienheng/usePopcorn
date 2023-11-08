/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { tempWatchedData } from "../../../utils/MovieData";

// COMPONENTS
import WatchedSummary from "./WatchedSummary";
import WatchedList from "./WatchedList";

export default function WatchedBox() {
  const [isOpen2, setIsOpen2] = useState(true);
  const [watched, _setWatched] = useState(tempWatchedData);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <WatchedSummary watched={watched} />
          <WatchedList watched={watched} />
        </>
      )}
    </div>
  );
}
