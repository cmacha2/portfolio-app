
import { Box, styled } from "@mui/material";
import Feed from "./components/Feed";
import { GlobalStyle } from "./Styles/GlobalStyles";

const WrapperApp = styled(Box)({
  backgroundColor: `#1C2229`,
  backgroundImage: `linear-gradient(58deg, rgba(25,34,41,1) 15%, #212831 50%, rgba(45,81,147,1) 100%)`,
  // width: `100vw`,
})

function App() {
  return (
    <WrapperApp >
      <Feed />
    </WrapperApp >
  );
}

export default App;
