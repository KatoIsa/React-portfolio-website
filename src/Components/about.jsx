import './css/about.css'
export default function About() {
    const slash = "'"
    return <div className="AboutContainer space">
        <h1>ABOUT ME</h1>
        
        <p>
        🚀 Hello World! I{slash}m Kato Isa, a passionate Full Stack Developer from the lively city of Kampala, Uganda.
        <br/><br/>
        With each keystroke, I{slash}m on a mission to transform ideas into digital realities, fueled by the belief that coding is a fusion of logic and creativity 💻✨
        </p>

        <div className='buttonWrapper'>
        <button className="Button" ><p>DOWNLOAD CV</p></button>
        </div>
    </div>
}