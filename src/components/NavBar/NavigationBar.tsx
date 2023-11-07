// COMPONENTS
import Search from "./Search";
import Logo from "./Logo";
import NumResults from "./NumResults";

type Props = {
  movies: object[];
};

export default function NavigationBar({ movies }: Props) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResults movies={movies} /> 
    </nav>
  );
}
