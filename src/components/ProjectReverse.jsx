import { Box, Button, styled, Typography } from '@mui/material';
import WestIcon from '@mui/icons-material/West';
import React from 'react'
import ReactPlayer from 'react-player';

const ContainerProject = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    // flexWrap: "wrap",
    // justifyContent: "space-between",
    // alignItems: "right",
    gap: "100px",
    padding: "0px 70px",
    //  backgroundColor: "#1DA5cb",
    // height: "60vh",
    // paddingBottom: "20px",

   
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      alignItems: "center",
      padding: "0px 20px",
  },
  [theme.breakpoints.down("md")]: {
    gap: "50px",
    padding: "0px 30px",
}
  }));
  
  const ContainerVideo = styled(Box)(({ theme }) => ({
    // paddingTop: "20px",
    // backgroundColor: "red",
    width: "100%", 
    //  height: '30vh',
    // backgroundColor: "#1DA5cb",
  //   [theme.breakpoints.down("lg")]: {
  //     width: '60vh',
  //     height: '40vh',
  // },

  [theme.breakpoints.down("lg")]: {
    width: "70vw", 
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
},
  }));
  
  const ContainerDescription = styled(Box)(({ theme }) => ({
    // width: "50%", 
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    textAlign: "right",
    // backgroundColor: "green",
    [theme.breakpoints.down("lg")]: {
      width: "80%", 
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
  },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "2.1rem",
    [theme.breakpoints.up("xl")]: {
      fontSize: "2.5rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.8rem",
},
  }));

  const Description = styled(Typography)(({ theme }) => ({
    fontSize: "1.2rem",
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.5rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1rem",
},
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
                startIcon={
                  <WestIcon
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
          width={'100%'}
            url={urlVideo}
      controls={false}
          />
          </ContainerVideo>
        </ContainerProject>
  )
}

export default ProjectReverse