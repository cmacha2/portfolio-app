import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import Project from "./Project.jsx";
import ReactPlayer from "react-player";
import ProjectReverse from "./ProjectReverse.jsx";

const firstProject = 'This project was born with the need to that a wholesale company can manage its products to put on sale, facilitates the management by the owner of the store, where he has total control over user products, sales graphs, he also has the possibility of making promotions and discounts which will be notified immediately to customers who use our mobile app, which provides greater ease of management and purchase for all users.'

// const Container = styled(Box)(({ theme }) => ({
//   height: "210vh",
// }));

  const ContainerProjects = styled(Box)(({ theme }) => ({
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
  }));


const Projects = () => {
  return (
    <Box>
      <Typography variant="h5" color="white" sx={{ padding: "20px 70px" }}>
        Latest Works
      </Typography>
      <ContainerProjects>
        <Project urlVideo="https://www.youtube.com/watch?v=7sDY4m8KNLc" title="Script Music" description={firstProject}/>
        <ProjectReverse urlVideo="https://www.youtube.com/watch?v=7sDY4m8KNLc" title="Script Music" description={firstProject}/>
        <Project urlVideo="https://www.youtube.com/watch?v=7sDY4m8KNLc" title="Script Music" description={firstProject}/>
        </ContainerProjects>
    </Box>
  );
};

export default Projects;
