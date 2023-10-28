import './footer.css';
import {FiLinkedin } from "react-icons/fi"
import {FiFacebook} from "react-icons/fi"
import {FaXTwitter} from "react-icons/fa6"


const Footer = () => {
  return <footer>
    <div id="footer">
      <h2><a href="#"><span>Y</span>usuf <span>A</span>bolaji</a></h2>
      <ul className='footer__links'>
        <li>
          <a href="#about">About me</a>
        </li>
        <li>
          <a href="#project">Portfolio</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
        <div className="footer__socials">
              <a href="https://www.facebook.com/profile.php?id=100076252556017&mibextid=LQQJ4d"><FiFacebook className="icon"/></a>
              <a href="http://linkedin.com/in/yusuf-abolaji"><FiLinkedin/></a>
              <a href="https://twitter.com/yac_grillo"><FaXTwitter/></a>
        </div>
    </div>
        <small> &copy; 2023 Yusuf Abolaji, All right reserved </small>
  </footer>;
};

export default Footer;
