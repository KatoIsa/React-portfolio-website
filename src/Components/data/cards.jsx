/* eslint-disable react/prop-types */
import About from '../about'
import Blog from '../blog'
import '../css/card.css'
import downarrow from '../css/downArrow.png'
import logo from '../css/Icon-Small.png'
import Cv from '../cv'
import Home from '../Home'
import Skills from '../skills'
import Work from '../work'

export default function Cards() {

    let carddata = [
        {
            cardname: 'HOME',
            shrinkdata: 'this is info to fill in the missing',
            grow: true,
            Expanded: () => {
                return <Home />
            }
        },
        {
            cardname: 'ABOUT',
            shrinkdata: 'this is info to fill in the missing',
            grow: false,
            Expanded: () => {
                return <About />
            }
        },
        {
            cardname: 'BLOG',
            shrinkdata: 'this is info to fill in the missing',
            grow: false,
            Expanded: () => {
                return <Blog />
            }
        },
        {
            cardname: 'CV',
            shrinkdata: 'this is info to fill in the missing',
            grow: false,
            Expanded: () => {
                return <Cv />
            }
        },
        {
            cardname: 'SKILL',
            shrinkdata: 'this is info to fill in the missing',
            grow: false,
            Expanded: () => {
                return <Skills />
            }
        },
        {
            cardname: 'WORK',
            shrinkdata: 'this is info to fill in the missing',
            grow: false,
            Expanded: () => {
                return <Work />
            }
        }
    ]

    return <>
        {
            carddata.map(data =>
                <div key={data.cardname} className="card">
                    {data.grow === false ?
                        <div className='fill'>
                            <div className="center">
                                <div className="CardHeader">
                                    <div className="logo">
                                        <img src={logo} alt="logo" />
                                    </div>
                                    <div className="tittle"> <h1>{data.cardname}</h1> </div>
                                </div>
                                <p>{data.shrinkdata}</p>
                            </div>

                            {
                                data.grow === true ? 
                                <div className="expandButton">
                                    <button><img src={downarrow} alt="arrow" /> </button>
                                </div> : <></>
                            }
                        </div> : <>
                        {data.Expanded()}
                        </> 
                    }
                </div>)
        }
    </>
}