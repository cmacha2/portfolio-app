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
    height: "60vh",
    paddingBottom: "20px",
  }));
  
  const ContainerVideo = styled(Box)(({ theme }) => ({
    paddingTop: "20px",
    //  width: '100vh',
    //  backgroundColor: "#1DA5cb",

  }));
  
  const ContainerDescription = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  }));

const Project = ({urlVideo,title,description}) => {
  return (
    <ContainerProject>
          <ContainerVideo>
          <ReactPlayer
            // width="100%"
            // height="80%"
            url={urlVideo}
          />
          </ContainerVideo>
          <ContainerDescription>
            <Typography variant="h6" color="white" sx={{paddingBottom:'15px'}}>
              {title}
            </Typography>
            <Typography variant="p" color="white">
              {description}
            </Typography>
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
        </ContainerProject>
  )
}

export default Project