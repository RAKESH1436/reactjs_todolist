import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar/Navbar";
import Home from "./page/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Adduser from "./User/Adduser";
import EditUser from "./User/EditUser";



function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path ="/" element={<Home/>}/>
        <Route exact path ="/Adduser" element={<Adduser/>}/>
        <Route exact path ="/edituser/:id" element={<EditUser/>}/>


        
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
