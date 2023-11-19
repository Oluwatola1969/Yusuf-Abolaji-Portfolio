import './nav.css';
import {motion} from "framer-motion";
import { useState } from 'react';

export default function Nav() {
  const [activeNav, setActiveNav] = useState("#")

  return(
    <>
    <nav 
    >
      <div className="container nav__container">
        <motion.h1 
          className='logo'
          animate={{
            y:0,
          }}  

          initial={{
            y: -200
          }}

          transition={{
            type: 'spring',
            stiffness:150
            
          }}
        >
          <a href="#"><span>Y</span>usuf <span>A</span>bolaji</a></motion.h1>
        <ul>
          <motion.li className={activeNav === '#' ? 'active': " "} onClick={()=> setActiveNav('#')}
            animate={{
              y:0,
            }}  
  
            initial={{
              y: -200
            }}
  
            transition={{
              type: 'spring',
              stiffness:150,
              delay:0.1
            }}
          >
            <a href="#">
              Welcome
            </a>
          </motion.li>
          <motion.li onClick={()=> setActiveNav("#about")} className={activeNav === '#about'? 'active': ''}
              animate={{
                y:0,
              }}  
    
              initial={{
                y: -200
              }}
    
              transition={{
                type: 'spring',
                stiffness:80,
                delay:0.2
              }}
          >
            <a href="#about">About me</a>
          </motion.li>
          <motion.li onClick={()=> setActiveNav('#projects')} className={activeNav === '#projects'? 'active' : ''}
              animate={{y:0}}  
              initial={{y: -200}}
              transition={{
                type: 'spring',
                stiffness:80,
                delay: 0.3
              }}
          >
            <a href="#projects" >Portfolio</a>
          </motion.li>
          <motion.li onClick={()=>setActiveNav('#blog')} className={activeNav === '#blog'? 'active' : ''}
              animate={{
                y:0,
              }}  
    
              initial={{
                y: -200
              }}
    
              transition={{
                type: 'spring',
                stiffness:80,
                delay:0.4
              }}
          >
            <a href="#contact">Contact</a>
          </motion.li>
        </ul>
      </div>
    </nav>

    </>
  );
}
