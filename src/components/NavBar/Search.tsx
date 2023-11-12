/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useEffect } from "react";

type Props = {
  query: string;
  setQuery: (query: string) => void;
};

export default function Search({ query, setQuery }: Props) {
  const inputElement = useRef<any>(null);

  useEffect(
    function () {
      function callback(e: KeyboardEvent) {
        if (document.activeElement !== inputElement.current) return;

        if (e.code === "Enter") {
          inputElement.current.focus();
          setQuery("");
        }
      }

      document.addEventListener("keydown", callback);
      return () => document.removeEventListener("keydown", callback);
    },
    [setQuery]
  );

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElement}
    />
  );
}
