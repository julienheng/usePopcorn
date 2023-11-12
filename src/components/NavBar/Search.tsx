/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { useKey } from "../../../utils/useKey";

type Props = {
  query: string;
  setQuery: (query: string) => void;
};

export default function Search({ query, setQuery }: Props) {
  const inputElement = useRef<any>(null);

  useKey("Enter", function () {
    if (document.activeElement === inputElement.current) return;
    inputElement.current.focus();
    setQuery("");
  });

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
