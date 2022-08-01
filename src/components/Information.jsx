import React from 'react'
import { Box, styled, Typography } from "@mui/material";


const ContainerInfo = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    // backgroundColor: `red`,
    width: "60%",
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

const Information = () => {
  return (
    <ContainerInfo>
        <Description>
          <Hola variant="h6">¡Hola!</Hola>
          <Name variant="h6">Soy Cristian Machado,</Name>
          <Developer variant="h6">Full Stack Web Developer.</Developer>
        </Description>
      </ContainerInfo>
  )
}

export default Information