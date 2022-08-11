import { Box, Button, IconButton, styled, Typography } from "@mui/material";
import React from "react";
import NavBar from "./NavBar";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Presentation from "./Presentation";
import TerminalAbout from "./TerminalAbout";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

const WrapperFeed = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  height: "94vh",
  padding: "0px 70px",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "40px",
    height: "auto",
  },
  [theme.breakpoints.down("md")]: {
    padding: "30px 30px",
  },
}));

const ScrollTopButton = styled(IconButton)(({ theme }) => ({
  position: "fixed",
  right: "20px",
  bottom: "20px",
  zIndex: "1",
  [theme.breakpoints.down("sm")]: {
    // display: "none",
  },
}));

const Feed = () => {
  const scrollTopFunction = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Box>
      <ScrollTopButton onClick={scrollTopFunction}>
        <ArrowCircleUpIcon fontSize="large" />
      </ScrollTopButton>
      <NavBar />
      <WrapperFeed>
        <Presentation />
        <TerminalAbout />
      </WrapperFeed>
      <Projects />
      <Experience />
      <Contact />
    </Box>
  );
};

export default Feed;
