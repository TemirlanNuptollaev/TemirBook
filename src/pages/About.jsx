import React from 'react';
import logoImg from '../images/Logo.png'

const About = () => {
    return (
        <>
        <div className='App'>
            <h1 style={{fontSize:"100px", color:"#fff" , textAlign:"center", marginBottom:"50px"}}>TemirBook</h1>
            <h3 style={{color:"#fff"}}>
                <p style={{textAlign:"center"}}>- This is social network which decides most social problem with teenages and helpfull to decision of political.</p>
                <p style={{textAlign:"center"}}>- This is one step for future. We are belive, that it is decide been resolve. </p>
                <hr></hr>
                <h1 style={{textAlign:"center"}}>Our command will be improve this product.</h1>
                 
                <h3 style={{textAlign:"center"}}>In on one time, we are refined backend side and we are hiring for a team a new specialits, best frames.</h3> 
            </h3>
            <img style={{marginTop:"50px"}} src={logoImg}></img>
        </div>
        
        </>
        
    );
}

export default About;
