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
            <span>Email:</span> <p>Yusufabolaji@gmail.com</p>
            </div>        
            <div className="contact__details">
              <span>Phone:</span> <p>+23481654521</p>
            </div>        
            <div className="contact__details">
              <span>Linkedin:</span> <p>Yusufabolaji@gmail.com</p>
            </div> 
          </div>
        </div>       
        
        <div className="contact__left">
        <form>
          <div className="name">
            <input type="text" id='name' placeholder='Your Name' />
          </div>

         <div className="email"> 
            <input type="email" id="email" placeholder='Your Email' />
          </div>

          <div className="textarea">
            <textarea name="" id="textarea" placeholder='Your Message' rows={10} cols={30}></textarea>
          </div>
          <a href="" className="btn">Send Message</a>
        </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
