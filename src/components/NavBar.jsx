import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-scroll";

const StyledToolbar = styled(Toolbar)(({theme})=>({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "center",
  },
  [theme.breakpoints.down("lg")]: {
    paddingBottom: "10px",
  }
}));

const Links = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "30px",
  padding: "0px 50px",
  color: "#fff",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  }
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  alignItems: "center",
  padding: "0px 60px",

  [theme.breakpoints.down("sm")]: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
}));



const NavBar = () => {
  return (
    <Box color="transparent" position='relative'>
      <StyledToolbar>
        <Links>
        <Link to='projects' spy={true} smooth={true}>
          <Typography
            variant="span"
          >
            Projects
          </Typography></Link>
          <Link to='experience' spy={true} smooth={true}><Typography
            variant="span"
          >
            Experience
          </Typography></Link>
          <Link to='contact' spy={true} smooth={true}> <Typography
            variant="span"
          >
            Contact
          </Typography></Link>
        </Links>

        <Icons id='top'>
          <IconButton href="https://www.linkedin.com/in/cmacha2/" target="_blank" ><LinkedInIcon sx={{ fontSize: "27px" }}/></IconButton>
          <IconButton  href="https://github.com/cmacha2" target="_blank" ><GitHubIcon  sx={{ fontSize: "27px" }}/></IconButton>
          <IconButton  href="https://twitter.com/cmacha2_08" target="_blank" ><TwitterIcon  sx={{ fontSize: "27px" }}/></IconButton>
        </Icons>

      </StyledToolbar>
    </Box>
  );
};

export default NavBar;
