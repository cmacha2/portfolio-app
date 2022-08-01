import {
  AppBar,
  Avatar,
  Badge,
  Box,
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

const StyledToolbar = styled(Toolbar)(({theme})=>({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "center",
  }
}));

const Links = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  padding: "0px 50px",
  color: "#fff",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  }
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  padding: "0px 50px",
  color: "#fff",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
}));

const NavBar = () => {
  return (
    <AppBar color="transparent" position='relative'>
      <StyledToolbar>
        <Links>
          <Typography
            variant="h6"
          >
            Proyects
          </Typography>
          <Typography
            variant="h6"
          >
            Experience
          </Typography>
          <Typography
            variant="h6"
          >
            Contact
          </Typography>
        </Links>

        <Icons>
          <LinkedInIcon />
          <GitHubIcon />
          <TwitterIcon />
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;