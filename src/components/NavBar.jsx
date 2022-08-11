import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import Notification from "@mui/icons-material/NotificationsRounded";
import MailIcon from "@mui/icons-material/Mail";
import WebhookIcon from "@mui/icons-material/Webhook";
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
  // gap: "20px",
  alignItems: "center",
  padding: "0px 50px",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
}));

const ButtonIcon = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  color: "#fff",
  width: "40px",
  "&:hover": {
    backgroundColor: "transparent",
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
          <ButtonIcon href="https://www.linkedin.com/in/cmacha2/" target="_blank" fontSize="small" startIcon={<LinkedInIcon/>}/>
          <ButtonIcon  href="https://github.com/cmacha2" target="_blank" startIcon={<GitHubIcon size={40}/>}/>
          <ButtonIcon  href="https://twitter.com/cmacha2_08" target="_blank" startIcon={<TwitterIcon/>}/>
        </Icons>
      </StyledToolbar>
    </Box>
  );
};

export default NavBar;
