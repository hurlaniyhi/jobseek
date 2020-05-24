import React from 'react';
import {NavLink} from 'react-router-dom'
import createReactClass from 'create-react-class'
// import {FaGlobe} from 'react-icons/fa'
// import {FaSignOutAlt} from 'react-icons/fa'

import "./Rdashboard.css"


var RDashboard = createReactClass({
    render: function(){
        return(
            <div>
                <div style={{backgroundColor: "#EB4844", marginLeft:"7%",width:"86%", marginTop: "90px",height: "45px",marginRight: "7%"}}>
                    <h4 style={{textAlign: "left", color: "whitesmoke",paddingLeft: "7%",paddingTop: "5px"}}>WELCOME TO JOB HEIST</h4>
                </div>
                <div className="outerBlock">
                
                    <br/><br/>
                <div className="formBlock">
                    <br/><br/>
                    <form>
                <h2 style={{textAlign: "center"}}>Instruction</h2>
                <br/><br/>
                
                    <p className="ifn1"><strong>1.</strong> Please select Compose to compose mail you will be sending</p>
                    <p className="ifn1"><strong>2.</strong> Please select Search and put in the qualities you are looking for </p>
                    <p className="ifn1"><strong>4.</strong> Click on the logo at the top left corner to upload profile picture</p>
                    
                
                
                <br/><br/><br/><br/>
                </form>
                </div>
                <br/><br/>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        )
    }
})

export default RDashboard