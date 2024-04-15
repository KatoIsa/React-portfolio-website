import profilePic from '../assets/PortfolioProfilePic.png'
import './css/home.css'

export default function Home(props) {
   
   return <>
      <div className='homeContainer'>
         <div className='ImageContainer'>
            <img width={200} className="profilePic" src={profilePic} alt="my image" />
            <div className='homeinfo'>
               <div className='rings'>
                 <a href="https://github.com/KatoIsa">
                 </a>
                 <a href="https://www.linkedin.com/in/kato-isa-932972206">
                 </a>
                 <a href="https://www.instagram.com/katoisa256/">
                 </a>
               </div>
               <p>Am Kato Isa <br /> <span>full stack dev</span></p>
            </div>
         </div>

         <div className='CallToAction'>
            {/* eslint-disable-next-line react/prop-types*/ }
            <div onClick={props.handleProjectsButton} className='projects Button'>
               <p>Projects</p>
            </div>
            {/* eslint-disable-next-line react/prop-types*/ }
            <div onClick={props.handleContactMeButton} className='Contact Button'>
             <p>Contact me</p>
            </div>
         </div>
      </div>
   </>
}