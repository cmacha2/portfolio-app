import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { IconButton, styled } from "@mui/material";

const ScrollTopButton = styled(IconButton)(({ theme }) => ({
    position: "fixed",
    right: "20px",
    bottom: "20px",
    zIndex: "1",
    width: "50px",
    height: "50px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }));

const IconScrollTop = () =>{
    const scrollTopFunction = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return(
      <ScrollTopButton onClick={scrollTopFunction}>
        <ArrowCircleUpIcon sx={{ fontSize: "40px" }}  />
      </ScrollTopButton>
    )
  }
  
  export default IconScrollTop;