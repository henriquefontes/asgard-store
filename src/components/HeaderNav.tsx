import {
  ShoppingCart,
  AccountCircle,
  SupportAgent,
  Menu,
} from "@mui/icons-material";

import Button from "./Button";

export default function HeaderNav() {
  const navButtonColors = {
    text: "white",
    background: "none",
    hover: {
      text: "#909090",
      background: "none",
    },
  };

  return (
    <nav style={{ display: "flex", gap: "20px" }}>
      <Button colors={navButtonColors} link="/cart">
        <ShoppingCart fontSize="small" />
        Cart
      </Button>
      <Button colors={navButtonColors} link="/myprofile">
        <AccountCircle fontSize="small" />
        My Profile
      </Button>
      <Button colors={navButtonColors} link="/support">
        <SupportAgent fontSize="small" />
        Support
      </Button>
      <Button colors={navButtonColors}>
        <Menu fontSize="small" />
      </Button>
    </nav>
  );
}
