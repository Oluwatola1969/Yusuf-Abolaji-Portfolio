import "./header.css"
import {CiLocationArrow1} from 'react-icons/ci';
import {motion} from "framer-motion";


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
                Welcome 👋, <br />I'm <span> YUSUF ABOLAJI</span> <br /> a Product Manager passionate about  <br />innovative digital designs
            </motion.h2>
            <motion.a href="/"
             className="btn btn__header"
             animate={{opacity:1,y:0}}
             initial={{opacity:0,y:40}}
             transition={{delay: 0.9}}
             >
              Get in Touch <CiLocationArrow1 size={23} />
              </motion.a>
          </div>
        </div>
    </section>
  );
}

export default Header;
