import { Toaster } from "react-hot-toast";
import "./App.css";
import Routes from "./routes/index";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes />
      <Toaster
        toastOptions={{
          success: {
            style: {
              backgroundColor: "var(--feedback-palette-success)",
              color: "#fff",
              minWidth: "200px",
              fontWeight: "bold",
            },
          },
          error: {
            style: {
              backgroundColor: "var(--feedback-palette-negative)",
              color: "#fff",
              minWidth: "200px",
              fontWeight: "bold",
            },
          },
        }}
      />
    </div>
  );
}

export default App;
