import React, { useEffect, useState } from 'react'
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { Box, Button, keyframes, styled, Typography } from '@mui/material';

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

  const Description = styled(Box)(({ theme ,roll}) => ({
    display: "flex",
    flexDirection: "column",
    animation: roll && `${rollInLeft} 0.6s ease-in-out`,
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

  const ContainerDownload = styled(Box)(({ theme }) => ({
    // backgroundColor: "#1DA5cb",
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
   padding: "15px 0px",
 }));


const Presentation = () => {
  const [roll,setRoll] = useState(false)

  useEffect(() => {
    setTimeout(()=>{
      setRoll(true)
    },500)
  }, [])
  return (
    <Description roll={roll}>
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
  )
}

export default Presentation