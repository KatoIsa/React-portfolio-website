import './css/about.css'
import './css/blog.css'
import blogImage from '../assets/blog.png'

export default function Blog() {
    return <div className='AboutContainer blog space'>
        <h1>BLOG</h1>
        <img src={blogImage} alt="blogImage" className='blogimage' />

        <div className='buttonWrapper'>
         <a href="https://lad-blogger.vercel.app/">
            <button className="Button" ><p>VISIT SITE</p></button>
         </a>
        </div>
    </div>
}