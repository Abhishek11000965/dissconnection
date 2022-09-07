//import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
//import {useNavigate} from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Lineman from './Lineman';
import DelLineman from './DelLineman';
 import Assignwork from './Assignwork';

<BrowserRouter>
<Routes>
  
   <Route path="/Lineman" element={<Lineman />} />
   <Route path="/DelLineman" element={<DelLineman />} />
   <Route path="/Assignwork" element={<Assignwork />} />
   
</Routes>


</BrowserRouter>
function Welcome() {
 
   return (
    
    <>    
       <ul>
       <li className="nav-item">
       <Link className="nav-link" to="/Lineman">Create Lineman</Link>
     </li>
     <li className="nav-item">
       <Link className="nav-link" to="/DelLineman">Delete Lineman</Link>
     </li>     
     <li className="nav-item">
       <Link className="nav-link" to="/Assignwork">Work Allotment to Lineman</Link>
     </li>    
     </ul>
     </>


  );
}

export default Welcome
