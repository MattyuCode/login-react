import { Routes, Route } from "react-router-dom";
import { Login } from './components/Auth/Login';
import { Logout } from './components/Auth/Logout';
import "./App.css";
import { Navbar } from "./components/Home/Navbar";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Navbar />} /> */}
      <Route path="/" element={<Login/>} />
      <Route path="/Logout" element={<Logout/>} />
    </Routes>
  );
}

export default App;


// import { Routes, Route } from "react-router-dom";
// import { Login } from './components/Auth/Login';
// import "./App.css";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Login/>} />

//     </Routes>
//   );
// }

// export default App;
