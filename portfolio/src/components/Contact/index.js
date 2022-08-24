import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState } from 'react'

const Contact=()=>{
    const [letterClass,setLetterClass]=useState('text-animate')
//     useEffect(()=>{
//             return setTimeout(()=>{
//                 setLetterClass('text-animate-hover')
//             }, 4000)
//         },[])
return(
    <>
    <div className='container contact-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters letterClass={letterClass}
                strArray={['C','o','n','t','a','c','t','','m','e']}
                idx={15}/>
            </h1>
            <p>
            This Contact Us page is for a marketing agency that works directly with businesses. 
            Since it knows its audience, Brandaffair encourages visitors to "have a talk" one-on-one rather than providing a one-way communication channel via support resources.
            </p>
            <div className='contact-form'>
               
                <form> <ul>
                    <li className='half'>
                    <input type="text" name="name" placeholder='Name' required/>
                    </li>
                    <li className='half'>
                    <input type="text" name="name" placeholder='Name' required/>
                    </li>
                    <li >
                    <input placeholder="Subject" type="text" name='subject' required/>
                    </li>
                    <li >
                    <textarea placeholder="Message" name="message"  required></textarea>
                    </li>
                    <li >
                    <input type="submit" className='flat-button' value="SEND"/>
                    </li>
                    
                    </ul>
                    </form>
                
            </div>
        </div>
        </div>
        </>
)
}
export default Contact