import React from 'react';
import {NavLink, Redirect} from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import createReactClass from 'create-react-class'
import {FaBars} from 'react-icons/fa'
import {FaSignOutAlt} from 'react-icons/fa'
import {FaGripVertical} from 'react-icons/fa'
import {FaUserEdit} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa'
import {FaUpload} from 'react-icons/fa'

import "./userdashboard.css"
import EditProfile from './editProfile.js'
import Preview from './preview.js'
import UploadCV from './uploadCV.js'
import UploadCert from './uploadCert.js'
import NYSC from './nysc.js'
import Waec from './waec.js'
import Dashboard from './dashboard.js'
import Ridwan from './rid1.jpg'
import axios from 'axios'

//import SignIn from './signin.js'


var UserDashboard = createReactClass({
    getInitialState: function(){
        return {
            fullname: "",
            profilePics: "",
            bg1: "#EEEEEE",
            c1: "#3C4858",
            bg2: "#EEEEEE",
            c2: "#3C4858",
            bg3: "#EEEEEE",
            c3: "#3C4858",
            bg4: "#EEEEEE",
            c4: "#3C4858",
            bg5: "#EEEEEE",
            c5: "#3C4858",
            bg6: "#EEEEEE",
            c6: "#3C4858",
            bg7: "#EEEEEE",
            c7: "#3C4858",
            bk:"",
            cl: "#0000AB",
            bd: "blue"
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

        axios.post('  https://backendjob.herokuapp.com/fetchInfo', data).then((res)=>{
        
           
            
        if(res.data == "bad"){
            alert("could not retrieve your information from the database")
        }
        else if(res.data.Picture != undefined){
            
            document.querySelector("#hint").style.display = "none"
            document.querySelector("#gtlogo").style.display = "block"
            
            this.setState({
                fullname: res.data.Fullname,
                profilePics: res.data.Picture
            })      
            
        }

        else if(res.data.Picture == undefined){

           
            this.setState({
                profilePics: res.data.Picture,
                fullname: res.data.Fullname
            })     
            
        }
        
            
            
            
        }).catch((err)=>{
            alert("error occurred")
            console.log(err)
        })
    }
    },
    click1: function(){
       
        this.setState({
            bg1: "#EB4844",
            c1: "whitesmoke",
            bg2: "#EEEEEE",
            c2: "#3C4858",
            bg3: "#EEEEEE",
            c3: "#3C4858",
            bg4: "#EEEEEE",
            c4: "#3C4858",
            bg5: "#EEEEEE",
            c5: "#3C4858",
            bg6: "#EEEEEE",
            c6: "#3C4858",
            bg7: "#EEEEEE",
            c7: "#3C4858",
        })
        if(window.screen.width < "981"){
        document.querySelector(".mainContainer1").style.display = "block"
        document.querySelector(".dropdown").style.display = "none"
        }
    },

    click2: function(){
        this.setState({
            bg2: "#EB4844",
            c2: "whitesmoke",
            bg1: "#EEEEEE",
            c1: "#3C4858",
            bg3: "#EEEEEE",
            c3: "#3C4858",
            bg4: "#EEEEEE",
            c4: "#3C4858",
            bg5: "#EEEEEE",
            c5: "#3C4858",
            bg6: "#EEEEEE",
            c6: "#3C4858",
            bg7: "#EEEEEE",
            c7: "#3C4858",
        })
        if(window.screen.width < "981"){
            document.querySelector(".mainContainer1").style.display = "block"
            document.querySelector(".dropdown").style.display = "none"
            }
    },
    click3: function(){
        this.setState({
            bg3: "#EB4844",
            c3: "whitesmoke",
            bg1: "#EEEEEE",
            c1: "#3C4858",
            bg2: "#EEEEEE",
            c2: "#3C4858",
            bg4: "#EEEEEE",
            c4: "#3C4858",
            bg5: "#EEEEEE",
            c5: "#3C4858",
            bg6: "#EEEEEE",
            c6: "#3C4858",
            bg7: "#EEEEEE",
            c7: "#3C4858",
        })
        if(window.screen.width < "981"){
            document.querySelector(".mainContainer1").style.display = "block"
            document.querySelector(".dropdown").style.display = "none"
            }
    },
    click4: function(){
        this.setState({
            bg4: "#EB4844",
            c4: "whitesmoke",
            bg1: "#EEEEEE",
            c1: "#3C4858",
            bg2: "#EEEEEE",
            c2: "#3C4858",
            bg3: "#EEEEEE",
            c3: "#3C4858",
            bg5: "#EEEEEE",
            c5: "#3C4858",
            bg6: "#EEEEEE",
            c6: "#3C4858",
            bg7: "#EEEEEE",
            c7: "#3C4858",
        })
        if(window.screen.width < "981"){
            document.querySelector(".mainContainer1").style.display = "block"
            document.querySelector(".dropdown").style.display = "none"
            }
    },
    click5: function(){
        this.setState({
            bg5: "#EB4844",
            c5: "whitesmoke",
            bg1: "#EEEEEE",
            c1: "#3C4858",
            bg2: "#EEEEEE",
            c2: "#3C4858",
            bg3: "#EEEEEE",
            c3: "#3C4858",
            bg4: "#EEEEEE",
            c4: "#3C4858",
            bg6: "#EEEEEE",
            c6: "#3C4858",
            bg7: "#EEEEEE",
            c7: "#3C4858",
        })
        if(window.screen.width < "981"){
            document.querySelector(".mainContainer1").style.display = "block"
            document.querySelector(".dropdown").style.display = "none"
            }
    },
    click6: function(){
        this.setState({
            bg6: "#EB4844",
            c6: "whitesmoke",
            bg1: "#EEEEEE",
            c1: "#3C4858",
            bg2: "#EEEEEE",
            c2: "#3C4858",
            bg3: "#EEEEEE",
            c3: "#3C4858",
            bg4: "#EEEEEE",
            c4: "#3C4858",
            bg5: "#EEEEEE",
            c5: "#3C4858",
            bg7: "#EEEEEE",
            c7: "#3C4858",
        })
        if(window.screen.width < "981"){
            document.querySelector(".mainContainer1").style.display = "block"
            document.querySelector(".dropdown").style.display = "none"
            }
    },
    click7: function(){
        this.setState({
            bg7: "#EB4844",
            c7: "whitesmoke",
            bg1: "#EEEEEE",
            c1: "#3C4858",
            bg2: "#EEEEEE",
            c2: "#3C4858",
            bg3: "#EEEEEE",
            c3: "#3C4858",
            bg4: "#EEEEEE",
            c4: "#3C4858",
            bg5: "#EEEEEE",
            c5: "#3C4858",
            bg6: "#EEEEEE",
            c6: "#3C4858",
        })
        if(window.screen.width < "981"){
            document.querySelector(".mainContainer1").style.display = "block"
            document.querySelector(".dropdown").style.display = "none"
            }
    },
    logOut: function(){
       localStorage.clear()
        this.props.history.push('/signin')
    },
    changeColor: function(){
        this.setState({
            bk: "#0000AB",
            cl: "whitesmoke",
            bd: "green"
        })
    },
    switchColor: function(){
        this.setState({
            bk: "",
            cl: "#0000AB",
            bd: "blue"
        })
    },
    show: function(){
          document.querySelector(".mainContainer1").style.display = "block"
          document.querySelector(".dropdown").style.display = "block"
        // document.querySelector(".content").style.float = "none"
    },
    handleImage: function(e){
        this.setState({
            [e.target.name]: URL.createObjectURL(e.target.files[0])
             
        })
        localStorage.setItem("profilepics",this.state.profilePics)
        
    //    document.querySelector("#gtlogo").src = this.state.profilePics

       if(this.state.profilePics != ""){
       document.querySelector("#hint").style.display = "none"
       document.querySelector("#gtlogo").style.display = "block"
       }


        alert(this.state.profilePics)
        const data = new FormData()
        data.append('Picture', e.target.files[0])
        data.append('Id', localStorage.getItem("Id"))
       
        if(this.state.profilePics == ""){
            alert("there is nothing to save")
        }
        else{
        axios.post(' https://backendjob.herokuapp.com/Picture', data).then((res)=>{
            
            
            if(res.data == "good"){
                alert("profile pics successfully uploaded")
               
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
    } 
    },
    render: function(){
        return (
            <Router>
               

            <div className="samerow1">
            <div className="dropdown">
            <div className="mainContainer1">
                
                {/* <img className="gtlogo" src="http://www.citypeopleonline.com/wp-content/uploads/2017/01/Guaranty-Trust-Bank-gtbank-logo.jpg" /> */}
                <div style={{width: "60%", height: "100px",backgroundColor:"#EEEEEE", marginLeft:"18%",borderRadius:"100%",marginTop:"20px"}}><label for="profile" id="shield" style={{width: "100%", height: "100px"}} ><p id="hint" style={{textAlign:"center", display: "block",paddingTop: "30px", fontSize:"12px"}}>Tap to upload<br/>profile picture</p><img className="Gtlogo" id="gtlogo" src={this.state.profilePics} style={{width:"100%",height:"100px",display:"none",borderRadius:"100%"}}/></label></div>
                <input id="profile" onChange={this.handleImage} name="profilePics" type="file" style={{display: "none"}} />
                <h3 className="profile"><i style={{color: "green"}}>{this.state.fullname}</i></h3>
                <hr/>
                <NavLink to = "/signin/userdashboard/dashboard.js" style={{textDecoration:"none"}}><button className="nav1" name="Bcolor1" onClick={this.click1} style={{backgroundColor: this.state.bg1, color: this.state.c1}}><FaGripVertical style={{float:"left", height:"25px",display:"inline-block",marginTop:"10px", marginLeft:"3%" }}/><p style={{paddingLeft: "10%", paddingRight: "5%",display:"inline-block", paddingTop: "5px"}}>Dashboard</p></button></NavLink><br/>
                <NavLink exact to = "/signin/userdashboard/editProfile.js" style={{textDecoration:"none"}}><button className="nav1" name="Bcolor1" onClick={this.click2} style={{backgroundColor: this.state.bg2, color: this.state.c2}}><FaUserEdit style={{float:"left", height:"25px",display:"inline-block",marginTop:"10px", width: "27px" }}/><p style={{paddingLeft: "10%", paddingRight: "5%",display:"inline-block", paddingTop: "5px"}}>Edit Profile</p></button></NavLink><br/>
                <NavLink to = "/signin/userdashboard/preview.js" style={{textDecoration:"none"}}><button className="nav1" name="Bcolor1" onClick={this.click3} style={{backgroundColor: this.state.bg3, color: this.state.c3}}><FaUser style={{float:"left", height:"25px",display:"inline-block",marginTop:"10px", width: "20px" }}/><p style={{paddingLeft: "10%", paddingRight: "5%",display:"inline-block", paddingTop: "5px"}}>Preview Info</p></button></NavLink><br/>
                <NavLink to = "/signin/userdashboard/uploadCv.js" style={{textDecoration:"none"}}><button className="nav1" name="Bcolor1" onClick={this.click4} style={{backgroundColor: this.state.bg4, color: this.state.c4}}><FaUpload style={{float:"left", height:"25px",display:"inline-block",marginTop:"10px", width: "20px" }}/><p style={{paddingLeft: "10%", paddingRight: "5%",display:"inline-block", paddingTop: "5px"}}> CV</p></button></NavLink><br/>
                <NavLink to = "/signin/userdashboard/uploadCert.js" style={{textDecoration:"none"}}><button className="nav1" name="Bcolor1" onClick={this.click5} style={{backgroundColor: this.state.bg5, color: this.state.c5}}><FaUpload style={{float:"left", height:"25px",display:"inline-block",marginTop:"10px", width: "20px" }}/><p style={{paddingLeft: "10%", paddingRight: "5%",display:"inline-block", paddingTop: "5px"}}>School Cert.</p></button></NavLink><br/>
                <NavLink to = "/signin/userdashboard/nysc.js" style={{textDecoration:"none"}}><button className="nav1" name="Bcolor1" onClick={this.click6} style={{backgroundColor: this.state.bg6, color: this.state.c6}}><FaUpload style={{float:"left", height:"25px",display:"inline-block",marginTop:"10px", width: "20px" }}/><p style={{paddingLeft: "10%", paddingRight: "5%",display:"inline-block", paddingTop: "5px"}}>NYSC Cert.</p></button></NavLink><br/>
                <NavLink to = "/signin/userdashboard/waec.js" style={{textDecoration:"none"}}><button className="nav1" name="Bcolor1" onClick={this.click7} style={{backgroundColor: this.state.bg7, color: this.state.c7}}><FaUpload style={{float:"left", height:"25px",display:"inline-block",marginTop:"10px", width: "20px" }}/><p style={{paddingLeft: "10%", paddingRight: "5%",display:"inline-block", paddingTop: "5px"}}>O' Level.</p></button></NavLink><br/>
                
              
            </div>
            </div>
            <div className="content1">
                <div className="button_feedcont">
                  <FaBars style={{width: "100px",height: "40px"}} onClick={this.show}/><p style={{textAlign: "left",fontWeight: "bold", display: "inline-block", color: "black"}}>Job Heist</p>
                  <button id="menu1_feedbutton" onMouseOver={this.changeColor} onMouseLeave={this.switchColor} onClick={this.logOut} style={{backgroundColor: this.state.bk, color:this.state.cl, borderColor: this.state.bd}}><FaSignOutAlt />Logout</button>
                </div>

                <Switch>

                <Route path = "/signin/userdashboard/editProfile.js" component = {EditProfile} />
                <Route path = "/signin/userdashboard/preview.js" component = {Preview} />
                <Route path = "/signin/userdashboard/uploadCV.js" component = {UploadCV} />
                <Route path = "/signin/userdashboard/uploadCert.js" component = {UploadCert} />
                <Route path = "/signin/userdashboard/nysc.js" component = {NYSC} />
                <Route path = "/signin/userdashboard/waec.js" component = {Waec} />
                <Route path = "/signin/userdashboard/dashboard.js" component = {Dashboard} />
                
                                
                </Switch>
            </div>
        </div>
            </Router>
        )
    }
})

export default UserDashboard