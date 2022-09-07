//import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './Navbar';
import {UseNavigate } from 'react-router-dom'; 
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
//import App from "./App";
import Login from "./Login";

import DelLineman from './DelLineman';
import Lineman from './Lineman';
import Welcome from './Welcome';
function App() {

  return (
    
<BrowserRouter>
<Navbar/>

<Routes>
  <Route path="/" element={<Login />} />
   <Route path="/Lineman" element={<Lineman />} />
   <Route path="/DelLineman" element={<DelLineman />} />
   <Route path="/Welcome" element={<Welcome />} />
</Routes>


</BrowserRouter>

  );
}

export default App;
