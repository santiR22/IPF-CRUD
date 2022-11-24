import { Toaster } from "react-hot-toast";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Routing } from "./routes/Routing";

function App() {
  return (
    <>
      <Navbar />
      <Routing />
      <Toaster />
    </>
  );
}

export default App;
