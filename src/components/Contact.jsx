import { Box, Button, IconButton, styled, Typography } from '@mui/material'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from 'react'

const Wrapper = styled((Box))(({theme})=>({
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection: "column",
}))

const Container = styled(Box)(({ theme }) => ({
     height: "55vh",
    // backgroundColor: "blue",
     display: "flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection: "column",
}))

const ContainerContact = styled(Box)(({ theme }) => ({ 
    height: "50vh",
    width: '80vw',
    // backgroundColor:'green',
    display: 'flex',
    flexDirection:"column",
    gap:"20px",
    justifyContent:"center",
    alignItems:"center",
    color:"#fff",
    [theme.breakpoints.down("sm")]: {
      width: '80vw',
      height: '30vh',
      textAlign: 'center',
  }
}))

const Footer = styled(Box)(({ theme }) => ({
    // backgroundColor: "red",
    height: "15vh",
    width: "90%",
    borderTop: "1px solid #fff",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}))

const Icons = styled(Box)(({theme}) => ({
  // background:'red',
    height: '20%',
    // width: '100%',
}))

const ButtonIcon = styled(IconButton)(({ theme }) => ({
    backgroundColor: "transparent",
    // color: "#fff",
    width: "60px",
    height: "60px",
    "&:hover": {
      backgroundColor: "transparent",
    },
  }));

const Contact = () => {
  return (
    <Wrapper>
    <Container >
        <ContainerContact>
            <Typography variant="h6">Would you like to have my contact?</Typography>
            <Icons>
            <ButtonIcon href="https://www.linkedin.com/in/cmacha2/" target="_blank" size="large" ><LinkedInIcon fontSize='large'/></ButtonIcon>
          <ButtonIcon  href="https://github.com/cmacha2" target="_blank"  size="large"><GitHubIcon fontSize='large'/></ButtonIcon>
          <ButtonIcon  href="https://twitter.com/cmacha2_08" target="_blank"  size="large" ><TwitterIcon fontSize='large'/></ButtonIcon>
            </Icons>
            <Typography variant="h6" >Do you have a project in mind? Let's make it happen!</Typography>
            <a  href="mailto:cmacha2.08@gmail.com" style={{textDecoration:"none"}}>
            <Typography variant='h6' color="#0ee687">cmacha2.08@gmail.com</Typography>
            </a>
        </ContainerContact>
    </Container>
    <Footer>
   
        <Typography variant="p">© 2022 Cristian Machado</Typography>
    </Footer>
   </Wrapper>
  )
}

export default Contact