type Props = {
  movies: object[];
};

export default function NumResults({ movies }: Props) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}
