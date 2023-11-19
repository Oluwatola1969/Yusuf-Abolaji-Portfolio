import "./header.css"
import {CiLocationArrow1} from 'react-icons/ci';
import {motion} from "framer-motion";
import {FiLinkedin } from "react-icons/fi"
import {FiFacebook} from "react-icons/fi"
import {FaXTwitter} from "react-icons/fa6"


function Header() {
  return (
    <section id="header">
        <div className="container header__container">
          <div className="content">
            <motion.h2 
              className="note"
              animate={{opacity:1}}
              initial={{opacity:0}}
              transition={{
                delay:0.8,
                duration:2
              }}
            >
                Welcome <span className="wave">👋</span>, <br />I'm <span> YUSUF ABOLAJI</span> <br /> a Product Manager passionate about  <br />innovative digital designs
            </motion.h2>
            <motion.a href="#contact"
             className="btn btn__header"
             animate={{opacity:1,y:0}}
             initial={{opacity:0,y:40}}
             transition={{delay: 0.9}}
             >
              Get in Touch <CiLocationArrow1 size={23} />
              </motion.a>

              <motion.div className="header__socials"
              animate={{opacity:1}}
              initial={{opacity:0}}
              transition={{delay:2}}
              >
              <a href="https://www.facebook.com/profile.php?id=100076252556017&mibextid=LQQJ4d" target="_blank" rel="noreferrer noopener"><FiFacebook className="icon"/></a>
              <a href="http://linkedin.com/in/yusuf-abolaji" target="_blank" rel="noreferrer noopener"><FiLinkedin/></a>
              <a href="https://twitter.com/yac_grillo" target="_blank" rel="noreferrer noopener"><FaXTwitter/></a>
              
              </motion.div>
          </div>
        </div>
    </section>
  );
}

export default Header;
