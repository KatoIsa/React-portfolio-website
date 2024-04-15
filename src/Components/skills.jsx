import './css/skills.css'

export default function Skills() {
    const spclc = "'"
    return <div className='AboutContainer skillsContainer'>
        <h1>SKILLS</h1>
        <p>
            I{spclc}ve worked on a wide range of web and mobile development Technologies. From front-end and design to backend
        </p>

        <div className="table">
            <div className="sec sec-1">
                <p>
                    <span className="header">WEB DEVELOPMENT</span> <br />
                    <span className="Subheader">Experienced in</span> <br /> <br/>
                    HTML, CSS, JavaScript, <br/>
                    Node Js, React Js, <br/>
                    Next js
                </p>
            </div>
            <div className="sec sec-2">
                <p>
                    <span className="header">APP DEVELOPMENT</span> <br />
                    <span className="Subheader">Experienced in</span> <br /> <br/>
                    Java, C++, Python, <br/>
                    React Native, Flutter
                </p>
            </div>
            <div className="sec sec-3">
                <p>
                    <span className="header">Back-End</span> <br />
                    <span className="Subheader">Experienced in</span> <br /> <br/>
                    SLQ, <br/>
                    No SQL(Mongo db, FireBase),<br/>
                    Supabase

                </p>
            </div>
            <div className="sec sec-4">
                <p>
                    <span className="header">LEARNING</span> <br />
                    <span className="Subheader">Currrently learning</span> <br /> <br/>
                    Data Science, <br/>
                    Artificial intelligence <br/>
                    Cyber Security <br/>
                    Ethical Hacking 

                </p>
            </div>
        </div>
    </div>
}