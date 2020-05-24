import React from 'react';
import {NavLink} from 'react-router-dom'
import createReactClass from 'create-react-class'
import axios from "axios"
// import {FaGlobe} from 'react-icons/fa'
// import {FaSignOutAlt} from 'react-icons/fa'

import "./editProfile.css"

var EditProfile = createReactClass({
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
            COD: "",
            Experience: "",
            Employers: "",
            JobRole: "",
            AboutYou: ""
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
                COD: res.data.ClassOfDegree,
                Experience: res.data.Experience,
                Employers: res.data.Employers,
                JobRole: res.data.JobRole,
                AboutYou: res.data.AboutYou

            })
        }
            
            
            
        }).catch((err)=>{
            alert("error occurred")
            console.log(err)
        })
    }
    },
    post: function(e){

        e.preventDefault()
        
        const data = {
            Id: localStorage.getItem("Id"),
            Fullname: this.state.Fullname,
            DateOfBirth: this.state.DateOfBirth,
            Email: this.state.Email,
            Gender: this.state.Gender,
            Address: this.state.Address,
            Country: this.state.Country,
            State: this.state.State,
            Status: this.state.Status,
            NYSC: this.state.NYSC,
            PhoneNumber: this.state.PhoneNumber,
            HomeNumber: this.state.HomeNumber,
            Institution: this.state.Institution,
            Course: this.state.Course,
            ClassOfDegree: this.state.COD,
            Experience: this.state.Experience,
            Employers: this.state.Employers,
            JobRole: this.state.JobRole,
            AboutYou: this.state.AboutYou
            
        }
        
        axios.post('https://backendjob.herokuapp.com/editProfile', data).then((res)=>{
            
            
            if(res.data == "good"){
                alert("Profile successfully updated")
            }
           else if(res.data == "bad"){
               alert("Error occur during profile update")
            }
            else{
                alert(res.data)
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
    
    render: function(){
        return(
            <div>
                <div style={{backgroundColor: "#EB4844", marginLeft:"7%",width:"86%", marginTop: "90px",height: "45px",marginRight: "7%"}}>
                    <h4 className="eh4" style={{textAlign: "left", color: "whitesmoke",paddingLeft: "7%",paddingTop: "5px"}}>PERSONAL INFORMATION FORM</h4>
                </div>
                <div className="outerBlock">
                    <br/><br/>
                <div className="formBlock">
                <form onSubmit={this.post} autocomplete="off">
                <br/><br/>
                <h3 className="eh3" style={{textAlign: "center"}}>Personal Information</h3>
                <br/><br/>
                <input onChange={this.handleChange} name="Fullname" className="fn" type="text" placeholder = "FullName" value={this.state.Fullname} required/><br/><br/>
    
                <input onChange={this.handleChange} name="DateOfBirth" className="DOB" type="date" placeholder = "Date of Birth" value={this.state.DateOfBirth} required/>
                <select name="Gender" onChange={this.handleChange} className="gender" value={this.state.Gender} required>
                    <option>Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select><br/><br/>
                <input name="Email" onChange={this.handleChange} className="em" type="Email" placeholder = "Email" value={this.state.Email} required/><br/><br/>
                <input name="Address" onChange={this.handleChange} className="ha" type="text" placeholder = "Home Address" value={this.state.Address} required/><br/><br/>
                <input name="Country" onChange={this.handleChange} className="cty" type="text" placeholder = "Country" value={this.state.Country} required/> 
                <input name="State" onChange={this.handleChange} className="st" type="text" placeholder = "State of Origin" value={this.state.State} required/><br/><br/>
                <select name="Status" onChange={this.handleChange} className="status" value={this.state.Status} required>
                    <option>Select Status</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorcee">Divorcee</option>
                    <option value="Widow">Widow</option>
                </select>
                <input name="NYSC" onChange={this.handleChange} className="nysc" type="text" placeholder = "NYSC Number" value={this.state.NYSC} required/><br/><br/>
                <input name="PhoneNumber" onChange={this.handleChange} className="pn" type="number" placeholder = "Phone Number" value={this.state.PhoneNumber} required/>
                <input name="HomeNumber" onChange={this.handleChange} className="hn" type="number" placeholder = "Home Number" value={this.state.HomeNumber} /><br/><br/>
                <input name="Institution" onChange={this.handleChange} className="ia" type="text" placeholder = "Institution Attended" value={this.state.Institution} required/><br/><br/>
                
                <select name="Course" onChange={this.handleChange} className="cs" placeholder="course of study" value={this.state.Course} required>
                    <option>Course of study</option>
                    <option value="Electrical/Electronics Engineering">Electrical/Electronics Engineering</option>
                    <option value="Mechanical Engineering<">Mechanical Engineering</option>
                    <option value="Accounting">Accounting</option>
                    <option value="Civil Engineering">Civil Engineering</option>
                    <option value="Medicine and surgery">Medicine and surgery</option>
                   
                </select><br/><br/>
                <select name="COD" onChange={this.handleChange} className="cod" value={this.state.COD} required>
                    <option>Grade</option>
                    <option value="First Class">First Class</option>
                    <option value="Upper Class">Upper Class</option>
                    <option value="Lower Class">Lower Class</option>
                    <option value="Third Class">Third Class</option>
                    <option value="Pass">Pass</option>
                </select>
                <input name="Experience" onChange={this.handleChange} className="yoe" type="text" placeholder = "Year of Experience" value={this.state.Experience} required/> <br/><br/><br/>
                
                <h5 style={{textAlign: "left",paddingLeft: "8%"}}>Work Experience</h5><br/>
                <input name="Employers" onChange={this.handleChange} className="noo" type="text" placeholder = "Name of Organizations" value={this.state.Employers} required/> <br/><br/>
                <input name="JobRole" onChange={this.handleChange} className="jr" type="text" placeholder = "Job Role" value={this.state.JobRole} required/> <br/><br/><br/>
                <h5 style={{textAlign: "left",paddingLeft: "8%"}}>Sell Yourself (not more than 3 lines)</h5><br/>
                <textarea name="AboutYou" onChange={this.handleChange} className="about" type="text" placeholder = "About you" value={this.state.AboutYou} required></textarea><br/>
               <br/><br/>
                <button className="savebutt" value = "submit">Save</button>
                <br/>
               
                </form>

                    </div>
                    <br/><br/>
                </div>
                <br/>
            </div>
        )
    }
})

export default EditProfile