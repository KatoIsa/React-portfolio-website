import './css/contact.css';

export default function Contact() {
    return <div className="AboutContainer space contact">
        <h1>CONTACT ME</h1>
        <p>
            Drop me a massage if your looking 
            for a software development service 
            or just say hi
        </p>
        <div className="straight">
            <p><a href="#" type="email">katoisa256@gmail.com</a></p>
            <p><a href="#" type="phone">+256 705207718</a></p>
        </div>

        <form>
        <input type="text" placeholder='name' />
        <input type="email" placeholder='email' />
        <input type="text" placeholder='Subject' />
        <textarea placeholder='massage'></textarea>
        <div className='adjust'>
        <button className='Button'><p>Send Massage</p></button>
        </div>
        </form>



    </div>
}