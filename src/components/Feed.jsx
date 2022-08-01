import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import Console from "./Console";
import Information from "./Information";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import NavBar from "./NavBar";
import CircleIcon from "@mui/icons-material/Circle";
import Projects from "./Projects";

const WrapperFeed = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  height: "100vh",
  // backgroundColor: "#1DA5cb",
  // justifyContent: "space-between",
  padding: "0px 70px",
  // display: "flex",
  // flexDirection: "row",
  alignItems: "center",
  // justifyContent: "center",
  // padding: "0px 50px",
  // gap: "10px",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 30px",
    
  },
  [theme.breakpoints.up("xl")]: {
    gap: "80px",
  },
}));

const ContainerDownload = styled(Box)(({ theme }) => ({
  //  backgroundColor: "#1DA5cb",
  //  display: "flex",
  //   flexDirection: "column",

  //   [theme.breakpoints.down("sm")]: {
  //     display: "flex",
  //     flexDirection: "column",
  //   }
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "15px 0px",
}));

const Description = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    padding: "70px 0px",
  },
}));
const Hola = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  fontFamily: "inherit",
  color: "#0ee687",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.8rem",
  },
}));

const Name = styled(Typography)(({ theme }) => ({
  fontSize: "3.5rem",
  fontFamily: "inherit",
  fontWeight: "1000",
  color: "#fff",
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
}));

const Developer = styled(Typography)(({ theme }) => ({
  fontSize: "3.4rem",
  fontFamily: "inherit",
  fontWeight: "1000",
  color: "transparent",
  WebkitTextStroke: "1px #0ee687",
  [theme.breakpoints.down("md")]: {
    fontSize: "2.2rem",
  },
}));

const TerminalInfo = styled(Box)(({ theme }) => ({
  background: "#1A222D",
  width: "100vh",
  height: "60vh",
  borderRadius: "20px",
  border: "2px solid #414346",
  [theme.breakpoints.down("sm")]: {
    padding: "0px 50px",
    width: "30vh",
    height: "auto",
  },
}));

const TopBar = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  // background: "red",
  // justifyContent: "space-between",
  // alignItems: "center",
}));

const ContainerBalls = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "10px 30px",
  flexDirection: "row",
  gap: "10px",
  // display: "flex",
  // flexDirection: "row",
  // alignItems: "center",
  // gap: "10px",
  // padding: "10px 30px",
  // paddingRight: "80px",
  // [theme.breakpoints.down("sm")]: {
  //   display: "flex",
  //   justifyContent: "flex-start" ,
  //   paddingRight: "10px",
  //   backgroundColor: "red",
  // },
}));

const ContainerDominio = styled(Box)(({ theme }) => ({
  backgroundColor: "#1A222D",
  display: "flex",
  justifyContent: "center",
  // display: "flex",
  // alignItems: "center",
  // justifyContent: "center",
  // background: "#202530",
  // borderRadius: "20px",
  // width: "50%",
  // height: "1.5rem",
}));

const ConsoleInformation = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "30px 60px",
  [theme.breakpoints.down("sm")]: {
    padding: "30px 0px",
  },
}));

const WrapperProyects = styled(Box)(({ theme }) => ({
  height: "100vh",
}));

const Feed = () => {
  return (
    <>
      <NavBar />
      <WrapperFeed>
        <Box>
          <Description>
            <Hola variant="h6">¡Hellooo!</Hola>
            <Name variant="h6">I'm Cristian Machado,</Name>
            <Developer variant="h6">Full Stack Web Developer.</Developer>
            <ContainerDownload>
              <Button
                variant="outlined"
                startIcon={<FileDownloadOutlinedIcon />}
                sx={{ color: "#fff", borderColor: "#0ee687" }}
                target="_blank"
                href="https://www.dropbox.com/s/lkbsqohl5mv5leh/Ingeniero%20de%20Software%20Profesional%20Curr%C3%ADculum.pdf?dl=0"
              >
                Download CV
              </Button>
            </ContainerDownload>
          </Description>
        </Box>
        <TerminalInfo>
          <TopBar>
            <ContainerBalls>
              <CircleIcon sx={{ color: "#D25450", width: "1rem" }} />
              <CircleIcon sx={{ color: "#D29F30", width: "1rem" }} />
              <CircleIcon sx={{ color: "#26A93E", width: "1rem" }} />
            </ContainerBalls>
            <ContainerDominio>
              {/* <Typography variant="span" sx={{ color: "#1DA5cb" }}>
            cmacha2.com
          </Typography> */}
            </ContainerDominio>
          </TopBar>
          <ConsoleInformation>
            <Typography
              variant="p"
              sx={{ color: "#FFFFFF" }}
            >{`const aboutMe = {`}</Typography>
            <Typography
              variant="p"
              sx={{ color: "#12C2A1", padding: "5px 20px" }}
            >{`profesion : Full Stack Web Developer,`}</Typography>
            <Typography
              variant="p"
              sx={{ color: "#12C2A1", padding: "5px 20px" }}
            >{`frontEndLanguages : ["React-Redux", "React Native"],`}</Typography>
            <Typography
              variant="p"
              sx={{ color: "#12C2A1", padding: "5px 20px" }}
            >{`backEndLanguages : ["NodeJS", "ExpressJS"],`}</Typography>
            <Typography
              variant="p"
              sx={{ color: "#12C2A1", padding: "5px 20px" }}
            >{`dataBase : ["PostgresSQL", "MongoDB"]`}</Typography>
            <Typography
              variant="p"
              sx={{ color: "#FFFFFF", paddingBottom: "20px" }}
            >{`}`}</Typography>

            <Typography
              variant="p"
              sx={{ color: "#FFFFFF" }}
            >{`const education = {`}</Typography>
            <Typography
              variant="p"
              sx={{ color: "#12C2A1", padding: "5px 20px" }}
            >{`bootcamp : SoyHenry,`}</Typography>
            <Typography variant="p" sx={{ color: "#FFFFFF" }}>{`}`}</Typography>
          </ConsoleInformation>
        </TerminalInfo>
      </WrapperFeed>
      <WrapperProyects>
        <Projects />
      </WrapperProyects>
    </>
  );
};

export default Feed;
