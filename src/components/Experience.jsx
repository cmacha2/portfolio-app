import { Box, styled, Typography } from '@mui/material';
import React from 'react'
import CircleIcon from "@mui/icons-material/Circle";

const Container = styled(Box)(({ theme }) => ({
    // height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: "100px",
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
    gap: "50px",
    padding: "20px 40px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0px",
    },
  }));

const Experience = () => {
  return (
    <Box sx={{paddingTop:"50px"}}>
          <Typography variant="h5" color="white" sx={{ padding: "20px 70px" }} id="Projects">
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
            >{`May 2022 - July 2022 - Teaching Assistant`}</Typography>
             <img width={"100%"} src="https://matiasfunes94.github.io/Portfolio-MatiasFunes94/assets/img/portfolio/henry.png" alt="logo" />
          </ConsoleInformation>
        </TerminalInfo>
    </Container>
    </Box>
  )
}

export default Experience