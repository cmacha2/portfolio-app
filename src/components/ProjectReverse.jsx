import { Box, Button, styled, Typography } from '@mui/material';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import React from 'react'
import ReactPlayer from 'react-player';

const ContainerProject = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  // flexWrap: "wrap",
  // justifyContent: "space-between",
  // alignItems: "center",
  gap: "70px",
  padding: "0px 70px",
  //  backgroundColor: "#1DA5cb",
  // height: "60vh",
  // paddingBottom: "20px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
}
}));

const ContainerVideo = styled(Box)(({ theme }) => ({
  paddingTop: "20px",
  backgroundColor: "red",
  //  width: '100vh',
  //  backgroundColor: "#1DA5cb",
  [theme.breakpoints.up("xl")]: {
      //  width: "100vh",
  }
}));

const ContainerDescription = styled(Box)(({ theme }) => ({
  width: "70%", 
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  // backgroundColor: "green",
  [theme.breakpoints.up("xl")]: {
    // fontSize: "1.5rem",
  }
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
}));

const ProjectReverse = ({urlVideo,title,description}) => {
  return (
    <ContainerProject>
          <ContainerDescription>
            <Title variant="h6" color="white" sx={{paddingBottom:'15px'}}>
              {title}
            </Title>
            <Description variant="p" color="white">
              {description}
            </Description>
            <Box sx={{ paddingTop: "30px" }}>
              <Button
                endIcon={
                  <EastOutlinedIcon
                    sx={{ paddingBottom: "3px", width: "20px" }}
                  />
                }
                sx={{ color: "#0ee687", textTransform: "none" }}
                href="https://script-music.vercel.app/"
                target="_blank"
              >
                See project
              </Button>
            </Box>
          </ContainerDescription>
          <ContainerVideo>
          <ReactPlayer
            // width="100%"
            // height="80%"
            url={urlVideo}
          />
          </ContainerVideo>
        </ContainerProject>
  )
}

export default ProjectReverse