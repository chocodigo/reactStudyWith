import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Face3Icon from "@mui/icons-material/Face3";
import Face6Icon from "@mui/icons-material/Face6";
import Face4Icon from "@mui/icons-material/Face4";
import HomeIcon from "@mui/icons-material/Home";
import { HAERIM, HOME, JIHUN, JUNGEUN } from "./route.constant";
import { Link } from "react-router-dom";

const Menu = () => {
  const menuList = [
    { name: "Haerim", icon: <Face3Icon />, link: HAERIM },
    { name: "Jihun", icon: <Face6Icon />, link: JIHUN },
    { name: "Jungeun", icon: <Face4Icon />, link: JUNGEUN },
  ];

  return (
    <List
      sx={{
        borderRight: "1px solid rgba(0, 0, 0, 0.12)",
        height: "100vh",
        padding: "8px",
      }}
    >
      <ListItem disablePadding sx={{ width: "100%" }}>
        <Link to={HOME} style={{ textDecoration: "none", color: "#000" }}>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </Link>
      </ListItem>
      <Divider />
      {menuList.map((item) => (
        <ListItem key={item.name} disablePadding sx={{ width: "100%" }}>
          <Link
            to={item.link}
            style={{ textDecoration: "none", color: "#000" }}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default Menu;
