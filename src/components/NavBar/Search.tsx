type Props = {
  query: string;
  setQuery: (query: string) => void;
};

export default function Search({ query, setQuery }: Props) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
