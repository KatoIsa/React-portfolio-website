import me from '../assets/me.png'
import './css/home.css'

export default function Home() {
    return <>
     <div className='ImageContainer'>
        <img width={200} src={me} alt="my image" />
        <div className='homeinfo'>
         <div className='rings'>
            <div className='ring'></div>
            <div className='ring'></div>
            <div className='ring'></div>
         </div>
         <p>Am Kato Isa <br/> a <span>full stack dev</span></p>
        </div>
     </div>
    </>
}