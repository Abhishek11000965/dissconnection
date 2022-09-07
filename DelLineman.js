//import logo from './logo.svg';
import './style.css';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
 import { useNavigate}  from 'react-router-dom';

function DelLineman() {
const navigate=useNavigate();
  const dLineman = async (e) => {
    e.preventDefault();
    const userid = document.querySelector('#userid').value;

    console.log(userid);

    try {
      const response = await axios({
        method: "get",
        url: "http://localhost:8080/DelLineman/",
        params: { userid },

      });
      console.log(response);
      if (userid === response.data.userid) {
        alert("Linemman Deleted successfully");
        navigate('/welcome')

      } 
      
      else {

        alert(" Lineeman user id not exist  ");
      }
    }
    catch (err) {
      console.log(err);
    }



  };

  return (
    <div >

      <form onSubmit={dLineman}>
        <div className="htmlm-group">

          <label className="lbl" htmlFor="exampleInputEmail1">!!!! Delete Lineman !!!!</label>

        </div>
        <div className="htmlm-group">
          <label htmlFor="exampleInputEmail1">Enter Lineman User Id  </label>
          <input type="text" className="form-control" id="userid" aria-describedby="emailHelp" placeholder="Enter User id  " />

        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <a  href="" onClick={()=>navigate("/Welcome")}> Go Back </a>
      </form>
    </div>



  );
}

export default DelLineman;
