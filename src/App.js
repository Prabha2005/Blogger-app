import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Posts from "./Posts";
import Documentation from "./pages/Documentation";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Posts />} />

        <Route
          path="/documentation"
          element={<Documentation />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>

  );

}

export default App;