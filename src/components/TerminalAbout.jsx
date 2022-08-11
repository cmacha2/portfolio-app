import { Box, keyframes, styled, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Console from "./Console";
import Information from "./Information";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import NavBar from "./NavBar";
import CircleIcon from "@mui/icons-material/Circle";

const rollInLeft = keyframes`
  0% {
    -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
`

const TerminalInfo = styled(Box)(({ theme,roll}) => ({
    background: "#1A222D",
    width: "90vh",
    height: `auto`,
    borderRadius: "20px",
    border: "2px solid #414346",
    animation: roll && `${rollInLeft} 0.6s ease-in-out`,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "auto",
      paddingBottom: "10px",
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
    [theme.breakpoints.down("sm")]: {
      padding: "10px 30px",
    },
  }));
  
  const ContainerDominio = styled(Box)(({ theme }) => ({
    backgroundColor: "#1A222D",
    display: "flex",
    justifyContent: "center",
  }));
  
  const ConsoleInformation = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    padding: "30px 60px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.85rem",
      padding: "10px 20px",
      paddingBottom: "15px",
    },
  }));

const TerminalAbout = () => {
  const [roll,setRoll] = useState(false)

  useEffect(() => {
    setTimeout(()=>{
      setRoll(true)
    },500)
  }, [])


  return (
    <TerminalInfo roll={roll}>
    <TopBar>
      <ContainerBalls>
        <CircleIcon sx={{ color: "#D25450", width: "1rem" }} />
        <CircleIcon sx={{ color: "#D29F30", width: "1rem" }} />
        <CircleIcon sx={{ color: "#26A93E", width: "1rem" }} />
      </ContainerBalls>
      <ContainerDominio>
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
      >{`profesion : "Full Stack Web Developer",`}</Typography>
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
      >{`const education = [`}</Typography>
      <Typography
        variant="p"
        sx={{ color: "#12C2A1", padding: "5px 20px" }}
      >{`bootcamp : {`}</Typography>
       <Typography
        variant="p"
        sx={{ color: "#12C2A1", padding: "5px 20px" }}
      >{`name: "Henry",`}</Typography>
       <Typography
        variant="p"
        sx={{ color: "#12C2A1", padding: "5px 20px" }}
      ><a style={{textDecoration: "none",color: "#12C2A1"}} target='_blank' href="https://certificates.soyhenry.com/cert?id=348b9271-19c5-40d9-8a77-a22998b78445">{`certificate: "Click here",`}</a></Typography>
       <Typography
        variant="p"
        sx={{ color: "#12C2A1", padding: "5px 20px" }}
      >{`}`}</Typography>
      <Typography variant="p" sx={{ color: "#FFFFFF" }}>{`]`}</Typography>
    </ConsoleInformation>
  </TerminalInfo>
  )
}

export default TerminalAbout