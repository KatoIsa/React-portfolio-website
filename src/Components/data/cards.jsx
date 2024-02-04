/* eslint-disable react/prop-types */
import { useState } from 'react'
import backButton from '../css/Back-Button.png'
import frontButton from '../css/Next-Button.png'
import About from '../about'
import Blog from '../blog'
import '../css/card.css'
import logo from '../css/Icon-Small.png'
import Contact from '../contact'
import Home from '../home'
import Skills from '../skills'
import Work from '../work'

export default function Cards() {
    const [counter, setCounter] = useState(0);
    const [isanimate, setIsanimate] = useState(false);
    const [carddata,] = useState(
        [

            {
                cardname: 'HOME',
                shrinkdata: 'I am Kato Isa a full stack dev',
                grow: false,
                Expanded: () => {
                    return <Home handleProjectsButton={projectsButton} handleContactMeButton={contactMeButton}/>
                }
            },
            {
                cardname: 'ABOUT',
                shrinkdata: "Hello World! I'm Kato Isa a ...",
                grow: false,
                Expanded: () => {
                    return <About />
                }
            },
            {
                cardname: 'BLOG',
                shrinkdata: 'Dive into a tech haven where ...',
                grow: false,
                Expanded: () => {
                    return <Blog />
                }
            },
            {
                cardname: 'CONTACT',
                shrinkdata: 'Drop me a massage if your ...',
                grow: false,
                Expanded: () => {
                    return <Contact />
                }
            },
            {
                cardname: 'SKILL',
                shrinkdata: "I've worked on a wide range of ... ",
                grow: false,
                Expanded: () => {
                    return <Skills />
                }
            },
            {
                cardname: 'WORK',
                shrinkdata: 'The projects I have been working ...',
                grow: false,
                Expanded: () => {
                    return <Work />
                }
            }
        ]
    )

    const projectsButton = () => {setCounter(5);}
    const contactMeButton = () => {setCounter(3);}
   
    const handleFrontButtonClick = () => {
        setCounter((prevCounter) => (prevCounter + 1) % carddata.length);
        handleAnimation('.active', 'animate 0.5s');
        handleAnimation('.slideleft', 'slide 0.5s');

        console.log(counter);
    };

    const hundleBackButtonClick = () => {
        setCounter((prevCounter) => (prevCounter - 1 + carddata.length) % carddata.length);
        handleAnimation('.active', 'animate  0.5s');
        handleAnimation('.slideleft', 'slide 0.5s');

        console.log(counter);
    }

    const handleAnimation = (ele, animationname) => {
        const element = document.querySelector(ele);

        if (!isanimate) {
            setIsanimate(true);
            element.style.animation = animationname;
        }

        element.addEventListener('animationend', () => {
            setIsanimate(false);
            element.style.animation = '';

        });
    };



    const adjustedArray = [...carddata.slice(counter), ...carddata.slice(0, counter)];
    adjustedArray.forEach(element => {
        element.grow = false;
    });

    adjustedArray[0].grow = true;

    return <>
        {
            adjustedArray.map((element, index) =>
                <div
                    key={index}
                    id={`corousel-item-${index}`}
                    className={`card 'corousel-item' ${index === 1 ? 'slideleft' : ''} ${index === 0 ? 'active' : ''} `}
                >
                    {element.grow === false ?
                        <div className='fill'>
                            <div className="center">
                                <div className="CardHeader">
                                    <div className="logo">
                                        <img src={logo} alt="logo" />
                                    </div>
                                    <div className="tittle"> <h1>{element.cardname}</h1> </div>
                                </div>
                                <p>{element.shrinkdata}</p>
                            </div>

                        </div> : <>
                            <div className='alignmentHelper'></div>
                            {element.Expanded()}
                            <div className='NavigationButtons'>
                                <button onClick={hundleBackButtonClick} className='backButton'>
                                    <img src={backButton} alt="back" />
                                </button>
                                <div className='counter'><p>{counter + 1}<span className='slash'>/</span><span className='out'>6</span></p></div>
                                <button onClick={handleFrontButtonClick} className='nextButton'>
                                    <img src={frontButton} alt="front" />
                                </button>
                            </div>
                        </>
                    }
                </div>)
        }
    </>
}