import { Search, DoubleArrow } from "@mui/icons-material/";
import Button from "./Button";
import { useEffect, useState } from "react";

export default function SearchBox() {
  const buttonColors = {
    text: "#222",
    background: "none",
    hover: {
      text: "#696969",
      background: "none",
    },
  };

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log(searchText);
  }, [searchText]);

  function handleTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
  }

  return (
    <div
      style={{ display: "flex", position: "relative", alignItems: "center" }}
    >
      <input
        type="text"
        name="search"
        id="search-box"
        placeholder="Search here.."
        onChange={(e) => handleTextChange(e)}
        style={{
          width: "350px",
          outline: "none",
          borderRadius: "6px",
          border: 0,
          padding: "8px 16px",
          position: "relative",
          zIndex: "2",
        }}
      />
      <div
        className="suggestions"
        style={{
          display: searchText.length > 0 ? "block" : "none",
          width: "100%",
          height: "150px",
          position: "absolute",
          bottom: 0,
          transform: "translateY(96%)",
          borderRadius: "0 0 6px 6px",
          zIndex: "1",
          backgroundColor: "#d9d9d9",
        }}
      ></div>
      <Button style={{ position: "absolute", right: 1 }} colors={buttonColors}>
        <Search fontSize="small" />
      </Button>
    </div>
  );
}
