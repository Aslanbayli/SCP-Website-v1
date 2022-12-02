import React from 'react';
import Signin from './signin';
import Landing from './Navbar';
import './index.css';
import Signup from './signup';
import Practice from './practice';
import Codesnippets from './codesnippets';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// function App() {
//   return (
//     <Landing/>
//   );
// }

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/codesnippets" element={<Codesnippets />} />
        <Route exact path="/sign-in" element={<Signin />} />
        <Route exact path="/practice" element={<Practice />} />
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/sign-up" element={<Signup />} />
      </Routes>
    </Router>
  );
}


export default App;