import { Box, Button, IconButton, styled, Typography } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";
import ReactPlayer from "react-player";

const ContainerProject = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: "100px",
  padding: "0px 70px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    gap: "50px",
    padding: "0px 30px",
  },
}));

const ContainerVideo = styled(Box)(({ theme }) => ({
  width: "40%",
  [theme.breakpoints.up("xl")]: {
    width: "30%",
  },
  [theme.breakpoints.down("lg")]: {
    width: "45%",
  },
  [theme.breakpoints.down("md")]: {
    width: "50%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const ContainerDescription = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-end",
  textAlign: "right",
  width: "50%",
  [theme.breakpoints.down("sm")]: {
    width: "100%!important",
  },
  [theme.breakpoints.down("md")]: {
    width: "50%",
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

const ProjectReverse = ({ urlVideo, title, description, link, linkGithub }) => {
  return (
    <ContainerProject>
      <ContainerDescription>
        <Title variant="h6" color="white" sx={{ paddingBottom: "15px" }}>
          {title}
        </Title>
        <Description variant="p" color="white">
          {description}
        </Description>
        <Box
          sx={{
            paddingTop: "30px",
            display: "flex",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          <Button
            startIcon={
              <WestIcon sx={{ paddingBottom: "3px", width: "20px" }} />
            }
            sx={{ color: "#0ee687", textTransform: "none" }}
            href={link}
            target="_blank"
          >
            See project
          </Button>
          <IconButton
            sx={{ color: "#0ee687", textTransform: "none" }}
            href={linkGithub}
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
        </Box>
      </ContainerDescription>
      <ContainerVideo>
        <ReactPlayer width={"100%"} url={urlVideo} controls={true} />
      </ContainerVideo>
    </ContainerProject>
  );
};

export default ProjectReverse;
