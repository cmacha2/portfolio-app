import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import Project from "./Project.jsx";
import ReactPlayer from "react-player";
import ProjectReverse from "./ProjectReverse.jsx";

const firstProject = 'This project was born with the need to that a wholesale company can manage its products to put on sale, facilitates the management by the owner of the store, where he has total control over user products, sales graphs, he also has the possibility of making promotions and discounts which will be notified immediately to customers who use our mobile app, which provides greater ease of management and purchase for all users.'
const secondProject = 'This project arises in the Bootcamp stage where all the knowledge obtained was put into practice. Travel World is a website that allows us to see all the countries in the world and filter them by continents and order them by population size and alphabetical order. It allows you to create a tourist activity associated with one or several countries in order to plan your trips to different tourist destinations. Technologies used React-Redux, NodeJS, ExpressJS, PostgresSQL, Sequelize'
const thirdProject = 'Project carried out while studying the second module of the bootcamps with the aim of clarifying some concepts that they had provided in the course. The project is a single page application that consumes data from a movie API where you can search for your desired movie and see more details about it, such as genre and description.'
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
        <Project urlVideo="https://www.youtube.com/watch?v=Og1z6ShsgMQ" title="Script Music" description={firstProject} link='"https://script-music.vercel.app/"'/>
        <ProjectReverse urlVideo="https://www.youtube.com/watch?v=Og1z6ShsgMQ" title="TravelWorld" description={secondProject} link="https://travel-world-app.vercel.app/"/>
        <Project urlVideo="https://www.youtube.com/watch?v=Og1z6ShsgMQ" title="Movies App" description={thirdProject}/>
        </ContainerProjects>
    </Container>
  );
};

export default Projects;
