import { Box, styled, Typography } from "@mui/material";
import React from "react";
import CircleIcon from "@mui/icons-material/Circle";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingBottom: "10px",
}));

const TerminalInfo = styled(Box)(({ theme }) => ({
  background: "#1A222D",
  width: "40vw",
  height: "48vh",
  borderRadius: "20px",
  border: "2px solid #414346",
  [theme.breakpoints.down("sm")]: {
    width: "83%",
    height: "35vh",
  },
}));

const TopBar = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));

const ContainerBalls = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "10px 30px",
  flexDirection: "row",
  gap: "10px",
}));

const ConsoleInformation = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
  padding: "30px 60px",
  [theme.breakpoints.down("sm")]: {
    padding: "20px 20px",
    gap: "30px",
  },
}));

const Experience = () => {
  return (
    <Box sx={{ paddingTop: "50px" }}>
      <Typography
        variant="h5"
        color="white"
        sx={{ padding: "20px 70px" }}
        id="Projects"
      >
        Experience
      </Typography>
      <Container>
        <TerminalInfo>
          <TopBar>
            <ContainerBalls>
              <CircleIcon sx={{ color: "#D25450", width: "1rem" }} />
              <CircleIcon sx={{ color: "#D29F30", width: "1rem" }} />
              <CircleIcon sx={{ color: "#26A93E", width: "1rem" }} />
            </ContainerBalls>
          </TopBar>
          <ConsoleInformation>
            <Typography
              variant="p"
              sx={{ color: "#FFFFFF" }}
            >{`May 2022 - July 2022 - Teaching Assistant`}</Typography>
            <a target="_blank" href="https://www.soyhenry.com/">
              <img
                width={"100%"}
                src="https://matiasfunes94.github.io/Portfolio-MatiasFunes94/assets/img/portfolio/henry.png"
                alt="logo"
              />
            </a>
          </ConsoleInformation>
        </TerminalInfo>
      </Container>
    </Box>
  );
};

export default Experience;
