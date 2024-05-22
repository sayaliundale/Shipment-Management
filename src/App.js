import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Register from "./Components/Register";
import Login from "./Components/Login";
import DashBoard from "./Components/DashBoard";

function App() {

  return (
    <div className="App">
    <Router>
      <Routes>  
          <Route path="/" element={<Navigate to="/register"/>} />
          <Route path="/register" element ={<Register/>}/>
          <Route path ="/login" element={<Login/>}/>
          <Route path ="/dashboard" element={<DashBoard/>}/>

      </Routes>
      </Router>
    </div>
  );
}

export default App;
