import { Box, styled, Typography } from "@mui/material";
import React from "react";
import Console from "./Console";
import Information from "./Information";
import NavBar from "./NavBar";
import CircleIcon from "@mui/icons-material/Circle";

const WrapperFeed = styled(Box)(({ theme }) => ({
  
  display: "flex",
  flexDirection: "row",
  height: "80vh",
  // backgroundColor: "#1DA5cb",
  // justifyContent: "space-between",
  padding: "0px 50px",
  // display: "flex",
  // flexDirection: "row",
   alignItems: "center",
  // justifyContent: "center",
  // padding: "0px 50px",
  // gap: "10px",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
  },
  [theme.breakpoints.up("xl")]: {
    gap:'80px'
  }
}));

const ContainerInfo = styled(Box)(({ theme }) => ({
  // backgroundColor: "#1DA5cb",

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
  width: "100vh",
  height: "60vh",
  borderRadius: "20px",
  border: "2px solid #414346",
  [theme.breakpoints.down("sm")]: {
    padding: "0px 60px",
    width: "30vh",
    height: "auto",
  },
}));

const TopBar = styled(Box)(({ theme }) => ({
  // display: "flex",
  // flexDirection: "row",
  background: "red",
  // justifyContent: "space-between",
  // alignItems: "center",
}));

const ContainerBalls = styled(Box)(({ theme }) => ({
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
    }
}))


const Feed = () => {
  return (
  <>
   <NavBar />
    <WrapperFeed>
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
      <ConsoleInformation>
        <Typography variant="p" sx={{ color: "#FFFFFF" }}>{`const aboutMe = {`}</Typography>
        <Typography variant="p" sx={{ color: "#12C2A1",padding: "5px 20px",}}>{`profesion : Full Stack Web Developer,`}</Typography>
        <Typography variant="p" sx={{ color: "#12C2A1",padding: "5px 20px",}}>{`frontEndLanguages : ["React-Redux", "React Native"],`}</Typography>
        <Typography variant="p" sx={{ color: "#12C2A1",padding: "5px 20px",}}>{`backEndLanguages : ["NodeJS", "ExpressJS"],`}</Typography>
        <Typography variant="p" sx={{ color: "#12C2A1",padding: "5px 20px",}}>{`dataBase : ["PostgresSQL", "MongoDB"]`}</Typography>
        <Typography variant="p" sx={{ color: "#FFFFFF",paddingBottom:"20px" }}>{`}`}</Typography>

        <Typography variant="p" sx={{ color: "#FFFFFF" }}>{`const education = {`}</Typography>
        <Typography variant="p" sx={{ color: "#12C2A1",padding: "5px 20px",}}>{`bootcamp : SoyHenry,`}</Typography>
        <Typography variant="p" sx={{ color: "#FFFFFF",}}>{`}`}</Typography>
  
      </ConsoleInformation>
    </TerminalInfo>

    </WrapperFeed>
  </>
     
  );
};

export default Feed;
