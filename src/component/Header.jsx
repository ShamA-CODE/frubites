import logoFrubites from '../assets/logo-frubites.png';
import { FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { CiYoutube } from "react-icons/ci";
import { RiFunctionAddLine } from "react-icons/ri";
const Header = ({selectedTab, setSelectedTab}) => {
  return <>
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="logo" src={logoFrubites} alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <a className="nav-link" href="#">ABOUT US</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${selectedTab === "PRODUCTS" && "active"}`} href="#" onClick={() => setSelectedTab("PRODUCTS")}>PRODUCTS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">CAREER</a>
            </li>
           
            <li className="nav-item">
              <a className="nav-link" href="#">CONTACT US</a>
            </li>
          </ul>
          <div className="social-bg">
            <a href="#" target="_blank"><FaInstagram size={22} color='#fff'/></a>
            <a href="#" target="_blank"><AiOutlineFacebook size={24}/></a>
            <a href="#" target="_blank"><CiYoutube size={28} color='#fff'/></a>
            <a href="#" className={`${selectedTab === "ADD PRODUCT" && "active"} btn-add-product`} onClick={() => setSelectedTab("ADD PRODUCT")}><RiFunctionAddLine size={28}/> </a>
          </div>
        </div>
      </div>
    </nav>
  </>
}

export default Header;