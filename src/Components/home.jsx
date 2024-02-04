import profilePic from '../assets/PortfolioProfilePic.png'
import './css/home.css'

export default function Home(props) {
   
   return <>
      <div className='homeContainer'>
         <div className='ImageContainer'>
            <img width={200} className="profilePic" src={profilePic} alt="my image" />
            <div className='homeinfo'>
               <div className='rings'>
                  <div className='ring'></div>
                  <div className='ring'></div>
                  <div className='ring'></div>
               </div>
               <p>Am Kato Isa <br /> <span>full stack dev</span></p>
            </div>
         </div>

         <div className='CallToAction'>
            <div onClick={props.handleProjectsButton} className='projects Button'>
               <p>Projects</p>
            </div>
            <div onClick={props.handleContactMeButton} className='Contact Button'>
             <p>Contact me</p>
            </div>
         </div>
      </div>
   </>
}