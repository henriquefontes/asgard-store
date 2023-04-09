import "./header.css";
import SearchBox from "./SearchBox";
import Button from "./Button";
import { ShoppingCart, AccountCircle } from "@mui/icons-material";

export default function Header() {
  return (
    <header>
      <h1 className="logo">Asgard</h1>
      <SearchBox />
      <nav style={{ display: "flex", gap: "10px" }}>
        <Button
          colors={{
            text: "white",
            background: "#525252",
            hover: {
              background: "#333333",
            },
          }}
        >
          <ShoppingCart fontSize="small" />
          My Cart
        </Button>
        <Button
          colors={{
            text: "white",
            background: "#525252",
            hover: {
              background: "#333333",
            },
          }}
        >
          <AccountCircle fontSize="small" />
          My Account
        </Button>
        <Button
          colors={{
            text: "white",
            background: "#525252",
            hover: {
              background: "#333333",
            },
          }}
        >
          <AccountCircle fontSize="small" />
          Support
        </Button>
      </nav>
    </header>
  );
}
