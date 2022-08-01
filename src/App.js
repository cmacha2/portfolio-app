import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";


const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          backgroundColor: `tomato`,
          backgroundImage: `linear-gradient(58deg, rgba(25,34,41,1) 15%, #212831 50%, rgba(45,81,147,1) 100%)`,
        }
      }
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <div className="App">
      <h1>Hello CodeSandbox</h1>
    </div>
  </ThemeProvider>
  );
}

export default App;
