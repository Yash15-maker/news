import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import Register from "./component/Register";
import NewsGrid from "./component/NewsGrid";
function App() {
  const [signIn, setsignIn] = React.useState(false);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login signIn={signIn} setsignIn={setsignIn} />}
          />
          <Route path="/register" element={<Register />} />
          {signIn && <Route path="news" element={<NewsGrid />} />}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
