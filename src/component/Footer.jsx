import iconWaward from "../assets/icon-award.png";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { CiYoutube } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return <>
    <div className="footer-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-6">
            <img className="icon-award" src={iconWaward} alt="Best Food Startup 2019" />
          </div>
          <div className="col-lg-3 col-6">
            <p className="icon-bg">
              <FaLocationDot size={26}/>
            </p>
            <h4>KNOW US</h4>
            <a href="#">About us</a><br/>
            <a href="#">Contact Us</a><br/>
            <p className="cin-no">CIN # U74999PN2018PTC176196</p>
            <div className="social-bg">
              <a href="#" target="_blank"><FaInstagram size={22}/></a>
              <a href="#" target="_blank" className='icon-facebook'><AiOutlineFacebook size={24}/></a>
              <a href="#" target="_blank" className='icon-youtube'><CiYoutube size={28}/></a>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <p className="icon-bg">
              <RiCustomerService2Fill size={26}/>
            </p>
            <h4>INFORMATION</h4>
            <a href="#">Blog</a><br/>
            <a href="#">Terms &amp; Conditions</a><br/>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="col-lg-3 col-6">
            <p className="icon-bg">
              <IoIosMail size={28}/>
            </p>
            <h4>SUBSCRIBE NOW !</h4>
            <p className="mb-0">Subscribe for product updates and exclusive offers.</p>
            <form id="contact_form" className="contact-form">
              <input type="email" name="contact[email]" id="contactFormEmail" placeholder="EMAIL ID *" required=""/>
              <input type="submit" className="btn contsend btn-submit" value="SUBMIT"/>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-copyright-bg">
      <div className="container">
        Copyright @ Frubites 2025 
        <a href="#" target="_blanck">VelocittaIndia.com</a>
      </div>
    </div>
  </>
}

export default Footer;