import "./header.css";
import SearchBox from "./SearchBox";
import HeaderNav from "./HeaderNav";

export default function Header() {
  return (
    <header>
      <h1 className="logo">Asgard</h1>
      <SearchBox />
      <HeaderNav />
    </header>
  );
}
