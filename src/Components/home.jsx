import profilePic from '../assets/PortfolioProfilePic.png'
import './css/home.css'

export default function Home() {
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
      </div>
   </>
}