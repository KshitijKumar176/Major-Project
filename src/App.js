import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Auth from "./Auth";
import End from "./End";
import Form from "./Form";
import Home from "./Home";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            key={1}
            path="/"
            element={[<Header />, <Home />, <Footer />]}
          />
          <Route key={2} path="/auth" element={[<Header />, <Auth />]} />
          <Route
            key={2}
            path="/form"
            element={[<Header />, <Form />, <Footer />]}
          />
          <Route
            key={2}
            path="/voted"
            element={[<Header />, <End />, <Footer />]}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
