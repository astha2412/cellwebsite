import Navsm from "./Navsm";
import "../style/HeadTnp.css";
import Footer from "./utils/Footer";
import InvitationText from "./utils/IntvitationText";
import Email from '../images/email2.png';
import Phone from '../images/phone-call.png';

const Headtnp = () => {
  return (
    <>
      <Navsm />
      <div className="headTNP">
        <div className="headImg">
          <div className="imaGE"></div>
          <br />
          <h4 style={{'color':'#457B9D'}}>Prof. V K Dwivedi</h4>
          <h4>Professor, Training & Placement Cell</h4>
          <h4>MMMUT, Gorakhpur</h4>

          <h4><img src={Email} alt="email icon" className="img-fluid"/> 
          <a href="mailto:tnp@mmmut.ac.in" style={{'textDecoration':"none",'color':' #212121'}}>tnp@mmmut.ac.in /</a>
          </h4> <h4><a href="mailto:vkdtnp@mmmut.ac.in" style={{'textDecoration':"none",'color':' #212121'}}>vkdtnp@mmmut.ac.in</a>
          </h4>

          <h4><img src={Phone} alt="phone icon" className="img-fluid" /><a href="tel:+919953001761" style={{'textDecoration':"none",'color':' #212121'}}>+91 9953 0017 61</a></h4>

      
          <h3 style={{'color':'#457B9D'}}>Home</h3>

          <h2 style={{ textDecoration: "underline" }}>INVITATION</h2>
          
        </div>
        <InvitationText/>
        <Footer/>
      </div>
    </>
  );
};

export default Headtnp;
