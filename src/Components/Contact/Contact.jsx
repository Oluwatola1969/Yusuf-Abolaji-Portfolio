import './contact.css';

const Contact = () => {
  return(
    <section id='contact'> 
        <div className="contact">
          <h2>Contact Me</h2>
        </div>
      <div className="container contact__container">
        <div className="contact__right">
            <h4>Get In Touch</h4>
          <div className="contact__right-details">
          <div className="contact__details">
            <span>EMAIL:</span> <p> <a href="mailto:yusufabolaji603@gmail.com" target="_blank" rel="noreferrer noopener">yusufabolaji603@gmail.com</a></p>
            </div>        
            <div className="contact__details">
              <span>WHATSAPP:</span> <p><a href="https://wa.me/message/3DUU6JJV3T5YA1" target="_blank" rel="noreferrer noopener">+2348146707809</a></p>
            </div>        
            <div className="contact__details">
              <span>LINKEDIN:</span> <p><a href="http://linkedin.com/in/yusuf-abolaji" target="_blank" rel="noreferrer noopener">linkedin.com/in/yusuf-abolaji</a></p>
            </div> 
            <div className="contact__details">
              <span>MESSENGER:</span> <p><a href="https://www.facebook.com/profile.php?id=100076252556017&mibextid=LQQJ4d" target="_blank" rel="noreferrer noopener">@Yusuf Abolaji</a></p>
            </div> 
          </div>
        </div>       
        
        <div className="contact__left">
        <form>
          <div className="name">
            <input type="text" id='name' placeholder='Your Name' required />
          </div>

         <div className="email"> 
            <input type="email" id="email" placeholder='Your Email' required />
          </div>

          <div className="textarea">
            <textarea name="" id="textarea" placeholder='Your Message' rows={10} cols={30} required></textarea>
          </div>
          <a href="" className="btn">Send Message</a>
        </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
