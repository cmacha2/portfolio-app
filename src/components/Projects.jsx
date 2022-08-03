import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import Project from "./Project.jsx";
import ReactPlayer from "react-player";
import ProjectReverse from "./ProjectReverse.jsx";

const firstProject = 'This project was born with the need to that a wholesale company can manage its products to put on sale, facilitates the management by the owner of the store, where he has total control over user products, sales graphs, he also has the possibility of making promotions and discounts which will be notified immediately to customers who use our mobile app, which provides greater ease of management and purchase for all users.'

const Container = styled(Box)(({ theme }) => ({

}));  

const LastWorks = styled(Typography)(({ theme }) => ({
  padding: "20px 70px",
  [theme.breakpoints.down("sm")]: {
    padding: "50px 30px",
    // paddingTop: "50px",
},
}));

  const ContainerProjects = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "70px",
  }));


const Projects = () => {
  return (
    <Container >
      <LastWorks variant="h5" color="white"  id="Projects">
        Latest Works
      </LastWorks>
      <ContainerProjects>
        <Project urlVideo="https://www.youtube.com/watch?v=7sDY4m8KNLc" title="Script Music" description={firstProject}/>
        {/* <ProjectReverse urlVideo="https://www.youtube.com/watch?v=0jgl5L8yeTw" title="Script Music" description={firstProject}/> */}
        <Project urlVideo="https://www.youtube.com/watch?v=d_t5nnK9Rn4" title="Script Music" description={firstProject}/>
        </ContainerProjects>
    </Container>
  );
};

export default Projects;
