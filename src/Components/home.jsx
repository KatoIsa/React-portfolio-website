import me from '../assets/me.png'
import Card from './data/cards'

export default function Home() {
    return <Card cardname='HOME'
        center={
            <>
                <div className='image'>
                    <img width={140} height={290} src={me} alt="me" />
                    <div className='data'>
                        <div className='ring'></div>
                        <div className='ring'></div>
                        <div className='ring'></div>
                    </div>
                </div>
                <div className='words'>
                    <p>Am Kato Isa, a
                        <span className='highliter'> full stack dev</span></p>
                </div>
            </>
        }
    />
}