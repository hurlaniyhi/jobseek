import React from 'react';
import {NavLink} from 'react-router-dom'
import createReactClass from 'create-react-class'
// import {FaGlobe} from 'react-icons/fa'
// import {FaSignOutAlt} from 'react-icons/fa'

import "./preview.css"
import axios from 'axios'

var Preview = createReactClass({
    getInitialState: function(){
        return{
            Fullname: "",
            DateOfBirth: "",
            Gender: "",
            Email: "",
            Address: "",
            Country: "",
            State: "",
            Status: "",
            NYSC: "",
            PhoneNumber: "",
            HomeNumber: "",
            Institution: "",
            Course: "",
            ClassOfDegree: "",
            Experience: "",
            Employers: "",
            JobRole: "",
            AboutYou: "",
            CV: "",
            SchoolCert: "",
            Waec: "",
            NyscFile: ""
        }
    },
    componentDidMount: function(){

        if(localStorage.getItem("user") == null && localStorage.getItem("requiter") == null){
            this.props.history.push("/signin")
        }
        else{
        const data = {
            Username: localStorage.getItem("user")
        }

        axios.post('https://backendjob.herokuapp.com/fetchInfo', data).then((res)=>{
            
        if(res.data == "bad"){
            alert("could not retrieve your information from the database")
        }
        else{
            this.setState({
                Fullname: res.data.Fullname,
                DateOfBirth: res.data.DateOfBirth,
                Email: res.data.Email,
                Gender: res.data.Gender,
                Address: res.data.Address,
                Country: res.data.Country,
                State: res.data.State,
                Status: res.data.Status,
                NYSC: res.data.NYSC,
                PhoneNumber: res.data.PhoneNumber,
                HomeNumber: res.data.HomeNumber,
                Institution: res.data.Institution,
                Course: res.data.Course,
                ClassOfDegree: res.data.ClassOfDegree,
                Experience: res.data.Experience,
                Employers: res.data.Employers,
                JobRole: res.data.JobRole,
                AboutYou: res.data.AboutYou,
                CV: res.data.CV,
                SchoolCert: res.data.SchoolCert,
                Waec: res.data.Waec,
                NyscFile: res.data.NyscFile

            })
            
        }
            
            
            
        }).catch((err)=>{
            alert("error occurred")
            console.log(err)
        })
    }
    },

    download: function(){

        const data = {

        }
       
        axios.get('https://backendjob.herokuapp.com/file/'+this.state.CV, data).then((res)=>{
            
                
                window.open("https://backendjob.herokuapp.com/file/"+this.state.CV, '_blank')
                
            }).catch((err)=>{
                alert("error occurred")
                console.log(err)
            })
        
    },
    download2: function(){

        const data = {

        }
       
        axios.get('https://backendjob.herokuapp.com/file/'+this.state.SchoolCert, data).then((res)=>{
            
                
                window.open("https://backendjob.herokuapp.com/file/"+this.state.SchoolCert, '_blank')
                
            }).catch((err)=>{
                alert("error occurred")
                console.log(err)
            })
        
    },
    download3: function(){

        const data = {

        }
       
        axios.get('https://backendjob.herokuapp.com/file/'+this.state.NyscFile, data).then((res)=>{
            
                
                window.open("https://backendjob.herokuapp.com/file/"+this.state.NyscFile, '_blank')
                
            }).catch((err)=>{
                alert("error occurred")
                console.log(err)
            })
        
    },
    download4: function(){

        const data = {

        }
       
        axios.get('https://backendjob.herokuapp.com/file/'+this.state.Waec, data).then((res)=>{
            
                
                window.open("https://backendjob.herokuapp.com/file/"+this.state.Waec, '_blank')
                
            }).catch((err)=>{
                alert("error occurred")
                console.log(err)
            })
        
    },
    
    render: function(){
        return(
            <div>
                <div style={{backgroundColor: "#EB4844", marginLeft:"7%",width:"86%", marginTop: "90px",height: "45px",marginRight: "7%"}}>
                    <h4 className="ph4" style={{textAlign: "left", color: "whitesmoke",paddingLeft: "7%",paddingTop: "5px"}}>USER INFORMATION PREVIEW</h4>
                </div>
                <div className="outerBlock">
                    <br/><br/>
                <div className="formBlock">
                
                <br/><br/>
                <h3 className="ph3" style={{textAlign: "center"}}>Preview Information</h3>
                <br/><br/>
                <label for="pfn" id="pfn" style={{fontSize: "15px"}}>Full Name</label>
                <p id="pfn" className="pfn" style={{paddingTop:"17px"}}>{this.state.Fullname}</p><br/>


                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Date of Birth</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>{this.state.DateOfBirth}</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Gender</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>{this.state.Gender}</p><br/>

                <label for="epln" id="epln" id="pfn" style={{fontSize: "15px"}}>Email Address</label>
                <p id="epln" className="epln" style={{paddingTop:"17px"}}>{this.state.Email}</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Home Address</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>{this.state.Address}</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Country</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>{this.state.Country}</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>State of Origin</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>{this.state.State}</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Status</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>{this.state.Status}</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>NYSC Number</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>{this.state.NYSC}</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Phone Number</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>{this.state.PhoneNumber}</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Home Number</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>{this.state.HomeNumber}</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Institution Attended</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>{this.state.Institution}</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Course of Study</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>{this.state.Course}</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Class of Degree</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>{this.state.ClassOfDegree}</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Year of Experience</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>{this.state.Experience}</p><br/>

                <h5 style={{textAlign: "left",paddingLeft: "8%"}}>Work Experience</h5><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Name of Organization</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>{this.state.Employers}</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Job Role</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>{this.state.JobRole}r</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>About Me</label>
                <p id="pln" className="pln" style={{paddingTop:"10px", lineHeight:"27px"}}>{this.state.AboutYou}</p><br/>


               <br/><br/>
                
               <h3 style={{textAlign: "center"}}>Download Candidate Uploaded Files</h3>
                <br/>

               <button id="short" onClick={this.download} style={{width: "15%",color:"white", marginLeft:"10%",marginRight: "5%",backgroundColor: "green", hight:"45px",display:"inline-block",height:"45px", borderRadius:"10px",borderBottomStyle: "none",borderRightStyle: "none"}}>CV</button>
               <button id="short" onClick={this.download2} style={{width: "15%",marginRight: "5%",color:"white", backgroundColor: "green", hight:"45px",display:"inline-block",height:"45px", borderRadius:"10px",borderBottomStyle: "none",borderRightStyle: "none"}}>Cert</button>
               <button id="short" onClick={this.download3} style={{width: "15%",marginRight: "5%",color:"white",backgroundColor: "green", hight:"45%",display:"inline-block",height:"45px", borderRadius:"10px",borderBottomStyle: "none",borderRightStyle: "none"}}>Nysc</button>
               <button id="short" onClick={this.download4} style={{width: "15%",marginRight: "5%",color:"white",backgroundColor: "green", hight:"45px",display:"inline-block",height:"45px", borderRadius:"10px",borderBottomStyle: "none",borderRightStyle: "none"}}>O'Level</button>
                <br/><br/>
                    </div>
                    <br/><br/>
                </div>
                <br/>
            </div>
        )
    }
})

export default Preview