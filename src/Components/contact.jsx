import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import './css/contact.css';

export default function Contact() {
    const nameref = useRef();
    const subjectref = useRef();
    const emailref = useRef();
    const messageref = useRef();
    const formref = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            "service_qk3pncs",
            "template_wzifqhf",
            formref.current,
            "UMCV1YwfNUNEnBTqj"
          )
          .then(
            (nameref.current.value = ""),
            (emailref.current.value = ""),
            (subjectref.current.value = ""),
            (messageref.current.value = "")
          )
          .then(alert("thank you, your message has been sent successfully"))
          .catch(() => alert("something went wrong try again"));
      };


    return <div className="AboutContainer space contact">
        <h1>CONTACT ME</h1>
        <p>
            Drop me a massage if your looking 
            for a software development service 
            or just say hi
        </p>
        <div className="straight">
            <p><a href="mailto:katoisa256@gmail.com" type="email">katoisa256@gmail.com</a></p>
            <p><a href="tel:+256 705207718" type="phone">+256 705207718</a></p>
        </div>

        <form ref={formref} autoComplete="off" onSubmit={sendEmail}> 
        <input 
        type="text" 
        placeholder='name' 
        name='user_name' 
        ref={nameref}
        required
        />
        
        <input 
        type="email" 
        placeholder='email' 
        name='user_email'
        ref={emailref}
        required
        />
        
        <input 
        type="text" 
        placeholder='Subject' 
        name='subject'
        ref={subjectref}
        required
        />

        <textarea 
        placeholder='massage' 
        name='massage'
        ref={messageref}
        required
        ></textarea>

        <div className='adjust'>
        <button type='submit' value='send' className='Button'><p>Send Massage</p></button>
        </div>
        </form>

    </div>
}