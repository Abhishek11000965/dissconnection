//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate} from 'react-router-dom';

function Lineman() {
const navigate=useNavigate();

const clineman = async (e)=>{
e.preventDefault();
const userid=document.querySelector('#userid').value;
const fname=document.querySelector('#fname').value;
const lname=document.querySelector('#lname').value;
const age=document.querySelector('#age').value;
const email=document.querySelector('#email').value;
const password=document.querySelector('#password').value;


 try{const response = await axios({
    method: "post",
    url:"http://localhost:8080/Lineman/",
    params:{userid ,fname,lname,age,email,password},
 });
 console.log(response);
 
}
catch(err ) 
{
  console.log(err);
}

};

  return (
    <div >
    
   <form onSubmit={clineman}>
   <div className="htmlm-group">
    <label className="lbl" htmlFor="exampleInputEmail1">!!!! Create Lineman  !!!!</label>
       
  </div>
  <div className="htmlm-group">
  <select class="form-select" aria-label="Select Designation " id="role">
  <option selected>Select Your Designation</option>
  <option value="JE">Junior Engineer</option>
  <option value="Lineman">Lineman</option>
 </select>

</div>
  <div className="htmlm-group">
    <label htmlFor="exampleInputEmail1"> Lineman user id  </label>
    <input type="text" className="form-control" id="userid" aria-describedby="userid" placeholder="Create Lineman user id  "/>
    <label htmlFor="lbllineman"> Ex: Lineman name 'laxman01 , pramod02'</label>
  </div>
  
  <div className="htmlm-group">
    <label htmlFor="exampleInputEmail1"> First Name </label>
    <input type="text" className="form-control" id="fname" aria-describedby="emailHelp" placeholder="Enter First name "/>
    
  </div>
  
  <div className="form-group">
    <label htmlFor="lname1">Last Name</label>
    <input type="address" className="form-control" id="lname" aria-describedby="address" placeholder="Enter Last Name "/>
    
  </div>
  <div className="form-group">
    <label htmlFor="age1">Age </label>
    <input type="text" className="form-control" id="age" aria-describedby="mobile" placeholder="Enter Age "/>
    
  </div>
  <div className="form-group">
    <label htmlFor="email1">E-mail </label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email "/>
    
  </div>
  <div className="form-group">
    <label htmlFor="password1">Password</label>
    <input type="password" className="form-control" id="password" aria-describedby="password" placeholder="Enter password  "/>
    
  </div>
  
  
  <button type="submit" className="btn btn-primary" >Create Lineman</button>

  <a onClick={()=>navigate("/Welcome")}> Go Back </a>
</form>



</div>



  );
}

export default Lineman;
