import React from "react";
import { Box, styled, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const TerminalInfo = styled(Box)(({ theme }) => ({
  background: "#1A222D",
  width: "80vh",
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
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#202530",
  borderRadius: "20px",
  width: "50%",
  height: "1.5rem",
}));

const ContainerInformation = styled(Box)(({ theme }) => ({ 
    display: "flex",
    flexDirection: "column",
    padding: "30px 60px",
}))

const Console = () => {
  return (
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
  );
};

export default Console;
