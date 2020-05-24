import React from 'react';
import {NavLink} from 'react-router-dom'
import createReactClass from 'create-react-class'
import axios from 'axios'
// import {FaGlobe} from 'react-icons/fa'
// import {FaSignOutAlt} from 'react-icons/fa'

import "./uploadCert.css"


var UploadCert = createReactClass({
    getInitialState: function(){
        return{
            SchoolCert: ""
        }
    },
    handleChange: function(e){
        this.setState({
            SchoolCert: e.target.files[0]
        })
    },
    post: function(e){
        e.preventDefault()

        const data = new FormData()
        data.append("SchoolCert", this.state.SchoolCert)
        data.append("Id", localStorage.getItem("Id"))
        

        axios.post(' https://backendjob.herokuapp.com/SchoolCert', data).then((res)=>{
            //alert("Data successfully encrypted")
            
            if(res.data == "good"){
                alert("SchoolCert successfully uploaded")
            }
           else if(res.data == "bad"){
                alert("Error occur during insertion")
            }
            else{
               
                alert(res.data)
               
            }
            
        }).catch((err)=>{
            alert("error occurred")
            console.log(err)
        })
       
    },
    render: function(){
        return(
            <div>
                <div style={{backgroundColor: "#EB4844", marginLeft:"7%",width:"86%", marginTop: "90px",height: "45px",marginRight: "7%"}}>
                    <h4 style={{textAlign: "left", color: "whitesmoke",paddingLeft: "7%",paddingTop: "5px"}}>UPLOAD SCHOOL CERTIFICATE</h4>
                </div>
                <div className="outerBlock">
                
                    <br/><br/>
                <div className="formBlock">
                    <br/><br/>
                <form onSubmit={this.post}>
                <h3 style={{textAlign: "center"}}>School Certificate Upload</h3>
                <br/><br/><br/>
                
                <input name="SchoolCert" onChange={this.handleChange} className="cufn" type="file" required/><br/><br/><br/>
                <button className="cupload" value="submit">Upload</button><br/><br/><br/><br/>
                </form>
                </div>
                <br/><br/>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        )
    }
})

export default UploadCert