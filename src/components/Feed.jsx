import { Box, styled, Typography } from "@mui/material";
import React from "react";
import Console from "./Console";
import Information from "./Information";
import NavBar from "./NavBar";
import CircleIcon from "@mui/icons-material/Circle";

const WrapperFeed = styled(Box)(({ theme }) => ({
  backgroundColor: `#1C2229`,
  backgroundImage: `linear-gradient(58deg, rgba(25,34,41,1) 15%, #212831 50%, rgba(45,81,147,1) 100%)`,
  height: "100vh",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  padding: "0px 50px",
  gap: "10px",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
  },
}));

const ContainerInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  // backgroundColor: `red`,
  // width: "60%",
  //   padding: "70px 0px",
  justifyContent: "center",
  //   [theme.breakpoints.down("sm")]: {
  //     display: "flex",
  //     flexDirection: "column",
  //   }
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
  // width: "80vh",
  height: "50vh",
  borderRadius: "20px",
  border: "2px solid #414346",
}));
const TopBar = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));

const ContainerBalls = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "10px",
  padding: "10px 30px",
  paddingRight: "80px",
}));

const ContainerDominio = styled(Box)(({ theme }) => ({
  // display: "flex",
  // alignItems: "center",
  // justifyContent: "center",
  // background: "#202530",
  // borderRadius: "20px",
  // width: "50%",
  // height: "1.5rem",
}));

const ContainerInformation = styled(Box)(({ theme }) => ({ 
    display: "flex",
    flexDirection: "column",
    padding: "30px 60px",
}))

const Feed = () => {
  return (
    <WrapperFeed>
      <NavBar />
      <ContainerInfo>
        <Description>
          <Hola variant="h6">¡Hola!</Hola>
          <Name variant="h6">Soy Cristian Machado,</Name>
          <Developer variant="h6">Full Stack Web Developer.</Developer>
        </Description>
      </ContainerInfo>
      <TerminalInfo>
      <TopBar>
        <ContainerBalls>
          <CircleIcon sx={{ color: "#D25450", width: "1rem" }} />
          <CircleIcon sx={{ color: "#D29F30", width: "1rem" }} />
          <CircleIcon sx={{ color: "#26A93E", width: "1rem" }} />
        </ContainerBalls>
        <ContainerDominio>
          <Typography variant="span" sx={{ color: "#1DA5cb" }}>
            cmacha2.com
          </Typography>
        </ContainerDominio>
      </TopBar>
      <ContainerInformation>
        <Typography variant="p" sx={{ color: "#FFFFFF" }}>{`const aboutMe = {`}</Typography>
        <Typography variant="p" sx={{ color: "#12C2A1",padding: "5px 20px",}}>{`profesion : Full Stack Web Developer,`}</Typography>
        <Typography variant="p" sx={{ color: "#12C2A1",padding: "5px 20px",}}>{`frontEndLanguages : ["React-Redux", "React Native"],`}</Typography>
        <Typography variant="p" sx={{ color: "#12C2A1",padding: "5px 20px",}}>{`backEndLanguages : ["NodeJS", "ExpressJS"],`}</Typography>
        <Typography variant="p" sx={{ color: "#12C2A1",padding: "5px 20px",}}>{`dataBase : ["PostgresSQL", "MongoDB"]`}</Typography>
        <Typography variant="p" sx={{ color: "#FFFFFF",paddingBottom:"20px" }}>{`}`}</Typography>

        <Typography variant="p" sx={{ color: "#FFFFFF" }}>{`const education = {`}</Typography>
        <Typography variant="p" sx={{ color: "#12C2A1",padding: "5px 20px",}}>{`bootcamp : SoyHenry,`}</Typography>
        <Typography variant="p" sx={{ color: "#FFFFFF",}}>{`}`}</Typography>
  
      </ContainerInformation>
    </TerminalInfo>

    </WrapperFeed>
  );
};

export default Feed;
