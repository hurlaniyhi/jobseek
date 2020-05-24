import React from 'react';
import {NavLink} from 'react-router-dom'
import createReactClass from 'create-react-class'
import axios from 'axios'
// import {FaGlobe} from 'react-icons/fa'
// import {FaSignOutAlt} from 'react-icons/fa'

import "./search.css"


var Search = createReactClass({
    getInitialState: function(){
        return{
            CourseOfStudy: "",
            ClassOfDegree: "",
            information: [],
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
    post: function(e){

        e.preventDefault()
        
        const data = {
            CourseOfStudy: this.state.CourseOfStudy,
            ClassOfDegree: this.state.ClassOfDegree,
        }

        axios.post(' https://backendjob.herokuapp.com/search', data).then((res)=>{
            
            
            if(res.data.comment == "good"){
                
                this.setState({
                    information: res.data.list
                })
               
                document.querySelector("#searchForm").style.display = "none"
                document.querySelector("#listTable").style.display = "block"
            }
          
            else{
                alert(res.data.list)
            }
            
        }).catch((err)=>{
            alert("error occurred")
            console.log(err)
        })
    },
    handleChange: function(e){
        this.setState({
            [e.target.name]: e.target.value
        }) 
    },
    sendMail: function(e){
      const data = {
          sendTo: e.target.value,
          Username: localStorage.getItem("requiter")
      }  

      axios.post(' https://backendjob.herokuapp.com/sendMail', data).then((res)=>{
            
            
            if(res.data.comment == "good"){
                
               alert("Mail successfully sent")
            }
          
            else{
                alert("Mail could not be sent")
            }
            
        }).catch((err)=>{
            alert("error occurred")
            console.log(err)
        })
    },
    // profile: function(e){

    //     localStorage.setItem("user",e.target.value)
    //     this.props.history.push("/signin/requiter/preview.js")
    // },
    handleDisplay: function(){

        document.querySelector("#listTable").style.display = "none"
        document.querySelector("#searchForm").style.display = "block"
    },
    handleDisplay2: function(){

        document.querySelector("#listTable").style.display = "block"
        document.querySelector("#searchForm").style.display = "none"
        document.querySelector("#preview").style.display = "none"
    },
    profile: function(e){
        
        localStorage.setItem("user",e.target.value)

        const data = {
            Username: localStorage.getItem("user")
        }

        axios.post(' https://backendjob.herokuapp.com/fetchInfo', data).then((res)=>{
            
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
           document.querySelector("#preview").style.display = "block"
           document.querySelector("#listTable").style.display = "none"
        }
            
            
            
        }).catch((err)=>{
            alert("error occurred")
            console.log(err)
        })
    },
    download: function(){

        const data = {

        }
       
        axios.get(' https://backendjob.herokuapp.com/file/'+this.state.CV, data).then((res)=>{
            
                
                window.open(" https://backendjob.herokuapp.com/file/"+this.state.CV, '_blank')
                
            }).catch((err)=>{
                alert("error occurred")
                console.log(err)
            })
        
    },
    download2: function(){

        const data = {

        }
       
        axios.get(' https://backendjob.herokuapp.com/file/'+this.state.SchoolCert, data).then((res)=>{
            
                
                window.open(" https://backendjob.herokuapp.com/file/"+this.state.SchoolCert, '_blank')
                
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
               
                <br/><br/><br/>
                <div className="formBlock">
                    <br/>
                <div id="searchForm">
                <form onSubmit={this.post}>
                <br/><br/><br/>
                <select name="CourseOfStudy" onChange={this.handleChange} className="sub" placeholder="course of study" required>
                    <option>Course of study</option>
                    <option value="Electrical/Electronics Engineering">Electrical/Electronics Engineering</option>
                    <option value="Mechanical Engineering<">Mechanical Engineering</option>
                    <option value="Accounting">Accounting</option>
                    <option value="Civil Engineering">Civil Engineering</option>
                    <option value="Medicine and surgery">Medicine and surgery</option>
                   
                </select>
                <select name="ClassOfDegree" onChange={this.handleChange} className="sub" placeholder="class of degree" required>
                    <option>Grade</option>
                    <option value="First Class">First Class</option>
                    <option value="Upper Class">Upper Class</option>
                    <option value="Lower Class">Lower Class</option>
                    <option value="Third Class">Third Class</option>
                    <option value="Pass">Pass</option>
                    
                </select><br/><br/>
                <br/>
                <button className="supload" value="submit">Search</button><br/><br/><br/><br/>
                </form>
                </div>
               <div id="listTable" style={{display:"none"}}>
                <table>
                    <thead>
                        <tr style={{borderBottomStyle: "1px solid"}}>
                            <th id="colon1">
                                Name
                            </th>
                            <th id="colon2">
                                Profile
                            </th>
                            <th id="colon3">
                                Send Mail
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.information.map(list =>(
                                <tr key={list._id}>
                                    <td ><button id="but1">{list.Fullname}</button></td>
                                    <td><button id="but2" onClick={this.profile} value={list.Username} >View Profile</button></td>
                                    <td ><button onClick={this.sendMail} value={list.Email} id="but3">Send Mail</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <br/><br/>
                <button id="close" onClick={this.handleDisplay}>Close</button>
                </div>

                <div id="preview" style={{display: "none"}}>
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
                <br/><br/><br/><br/>
                <button id="close" onClick={this.handleDisplay2}>Close</button>
                </div>
                 
                </div>
                <br/><br/>
                
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        )
    }
})

export default Search