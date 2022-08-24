import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import { faAngular,faCss3,faHtml5,faReact ,faJsSquare,faGit, faJava} from '@fortawesome/free-brands-svg-icons'


const About =()=>{
    const[letterClass,setLetterClass]=useState('text-animate')
    return(
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx={15}/>
                    </h1>
                    <p>
                    I am currently a Second-year student at the 
                        Informatics Institute of Technology (IIT) affiliated 
                        with University of Westminster, UK. I am an 
                        energetic, dynamic, hardworking individual who 
                        is willing to accept challenges that will come 
                        across my journey towards success. 
                    </p>
                    <p>
                    As a student, I 
                    believe my key strengths would be developing 
                    web and mobile applications, adoptability and a 
                    self-motivated individual who would work 
                    towards striving excellence.
                    </p>
                    <p>
                    I am a self-motivated, flexible and diligent individual who enjoys working in a challenging environment. Have good communication skills to work with different people from all walks of life (both internal and external). 
                    Strong analytical skills that are used to think beyond the immediate requirements. 
                    Highly organized with a logical and methodical approach to achieving tasks/objectives efficiently through attention to detail coupled with a positive attitude towards my career.
                     A team player; have a strong leadership qualities
                            
                        </p>
                    </div>
        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faJava} color="#EC4"/>
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faGit} color="#DD0031"/>
                </div>
            </div>
            </div>            


        </div>
    )
}
export default About