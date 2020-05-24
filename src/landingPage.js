import React from 'react';
import {NavLink} from 'react-router-dom'
import createReactClass from 'create-react-class'
import {FaGlobe} from 'react-icons/fa'
import {FaSignInAlt} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import "./landingPage.css"


var LandingPage = createReactClass({
    render: function(){
        return (
            <div>
            <div className="button_feedcont">
    
      
              <FaGlobe style={{width: "100px",height: "50px"}} /><p style={{textAlign: "left",fontWeight: "bold", display: "inline-block", color: "black"}}>Job Heist</p>
  
              <button id="menu1_feedbutton" ><NavLink exact to = "./signin" style={{textDecoration: "none"}}><FaSignInAlt />LogIn</NavLink></button>
  
            </div>
            <div className="landcontainer">
                <div className ="landdisplay">
                    <br/>
                    <h2 className="landH2">Welcome To Job Heist</h2><br/><br/><br/>
                    <p className="landP">Job Heist make it easier for job seeker to get a better job.</p> 
                    <p className="landP">It makes easier for recruiter to quickly fetch candidates that have the qualities they are looking for </p><br/><br/>
                   
                    <NavLink exact to ="./signin" style={{textDecoration: "none"}}><button className="started2">Get Started</button></NavLink> 
                </div>

                <div className="landoverlay"></div>
            </div>
            <br/>
            <h3 className="landH3" style={{color: "black" ,fontWeight: "800", textAlign: "center"}}>About Job Heist</h3><br/>
            <p className="landP1" style={{color: "black"}}>Job Heist has come to reduce unemployment rate and saves the time spent by</p>
            <p className="landP1" style={{color: "black"}}>the job recruiter when filtering job seekers applications.</p>
            <p className="landP1" style={{color: "black"}}> Job heist makes Job seekers and recruiters find each other easily</p>
            <br/><br/>
            <div className="footer">
                <p className="landP" style={{fontWeight: "bold", paddingTop:"15px"}}>Job Heist by Ridwan Kolawole</p>
                <FaTwitter style={{marginLeft: "42%", width: "3%", height: "30px",color: "white"}} /><FaInstagram style={{marginLeft: "3%", width: "3%", height: "30px", color:"white"}}/><FaFacebook style={{marginLeft: "3%", width: "3%", height: "30px",color:"white"}}/>
            </div>
            </div>
        )
    }
})

export default LandingPage