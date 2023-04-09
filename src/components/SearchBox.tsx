import { Search, DoubleArrow } from "@mui/icons-material/";
import Button from "./Button";

export default function SearchBox() {
  const buttonColors = {
    text: "#222",
    background: "none",
    hover: {
      text: "#696969",
      background: "none",
    },
  };

  return (
    <div
      style={{ display: "flex", position: "relative", alignItems: "center" }}
    >
      <input
        type="text"
        name="search"
        id="search-box"
        placeholder="Search here.."
        style={{
          width: "350px",
          outline: "none",
          borderRadius: "6px",
          border: 0,
          padding: "8px 16px",
          position: "relative",
        }}
      />
      <Button style={{ position: "absolute", right: 1 }} colors={buttonColors}>
        <Search fontSize="small" />
      </Button>
    </div>
  );
}
