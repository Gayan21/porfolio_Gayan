import { useEffect, useState } from "react";
import { Link
 } from "react-router-dom"
 import LogoTitle from '../../assets/images/gayan.jpg';
import AnimatedLetters from "../AnimatedLetters";
 import './index.scss'


const Home=() => {
const [letterClass,setLetterClass]=useState('text-animate')
const nameArray=['G','a','y','a','n']
const jobArray=['f','u','l','l','s','t','a','c','k',' __', 'd','e','v','l','o','p','e','r']

// useEffect(()=>{
//     return setTimeout(()=>{
//         setLetterClass('text-animate-hover')
//     }, 4000)
// },[])

    return(
        <div className="container home-page">
           {/* < div className="img-zone">
<img src={LogoTitle} alt="developer"/>
           </div> */}
            <div className="text-zone">
            
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={'${letterClass}_12'}>i,</span>
                    <br/> 
                    <span className={'${letterClass}_13'}>I</span>
                    <span className={'${letterClass}_14'}>'m  Gayan </span>
                {/* <img src={LogoTitle} alt="developer"/> */}
                {/* <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                
                idx={15}/> */}
                <img src={LogoTitle} alt="developer"/>
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={38}/>
                </h1>
                <h2> Frontend Developer / Mobile Developer</h2>
                <Link to ="/contact" className="flat-button">CONTACT ME</Link>
                </div>
               
                </div>
              
        
    );
}
export default Home