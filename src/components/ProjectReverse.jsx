import { Box, Button, IconButton, keyframes, styled, Typography } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";
import ReactPlayer from "react-player";
import { useInView } from 'react-intersection-observer';

const rollInRight = keyframes`
 0% {
    -webkit-transform: translateX(50px);
            transform: translateX(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
`

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

const ContainerVideo = styled(Box)(({ theme ,inView}) => ({
  width: "40%",
  animation: inView && `${rollInRight} 1s ease-in-out`,
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

const ContainerDescription = styled(Box)(({ theme,inView }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-end",
  textAlign: "right",
  width: "50%",
  animation:inView && `${rollInRight} 1s ease-in-out`,
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
  const {ref:refDes, inView:inViewDes} = useInView();
  const {ref, inView} = useInView();
  return (
    <ContainerProject >
      <ContainerDescription ref={refDes} inView={inViewDes}>
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
      <ContainerVideo ref={ref} inView={inView}>
        <ReactPlayer width={"100%"} url={urlVideo} controls={true} />
      </ContainerVideo>
    </ContainerProject>
  );
};

export default ProjectReverse;
