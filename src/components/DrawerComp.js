import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Switch from '@mui/material/Switch';


import categories from '../data/category'

export default function SwipeableTemporaryDrawer( {setCategory}) {
  const [state, setState] = React.useState({
    left: false,
  });

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box

      // Ajusted width ,'paddingLeft':10, 'paddingRight':5
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 180, 'paddingLeft':5, 'paddingRight':5}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      {/* Changed drawer values to categories from news api , Removed icons */}
      <List>
        <ListItem>
          <ListItemText> Categories </ListItemText>
        </ListItem> 
      </List>
      
      <Divider />

      <List>
        {categories.map((text, index) => (
          
          // onClick event of setCategory, the clicked text will be passed text
          <ListItem button key={text} onClick = {() => setCategory(text)}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />

    </Box>
  );

  return (
    <div>

      <React.Fragment key={"left"}>
        <Button onClick={toggleDrawer("left", true)}>
          <MenuIcon />
        </Button>

        {/* // drawer component code inside theme */}
        <ThemeProvider theme={theme}>
          <SwipeableDrawer  
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
        </ThemeProvider>

      </React.Fragment>
      
    </div>
  );
}
