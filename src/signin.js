import React from 'react';
import {NavLink} from 'react-router-dom'
import createReactClass from 'create-react-class'
import {FaGlobe} from 'react-icons/fa'
import {FaHome} from 'react-icons/fa'
import axios from 'axios'
// import {FaInstagram} from 'react-icons/fa'
// import {FaFacebook} from 'react-icons/fa'
// import {FaTwitter} from 'react-icons/fa'
import "./signIn.css"

var SignIn = createReactClass({
    getInitialState: function(){
        return{
            Password: "",
            Username: "",
           
        }
    },
    componentDidMount: function(){
        if(localStorage.getItem("user") != null){
            this.props.history.push("/signin/userdashboard/dashboard.js")
        }
        else if(localStorage.getItem("requiter") != null){
            this.props.history.push("/signin/requiter/Rdashboard.js")
        }
    },
    handleChange: function(e){
        this.setState({
            [e.target.name]: e.target.value
        })
       
    },

    post: function(e){
        e.preventDefault()

       
           
        const data = {
  
            Username: this.state.Username,
            Password: this.state.Password
            
        }

        axios.post('https://backendjob.herokuapp.com/signin', data).then((res)=>{
            //alert("Data successfully encrypted")
            
            if(res.data.nav == "jobseeker"){
                localStorage.setItem("user",this.state.Username)
                localStorage.setItem("Id",res.data.Id)
                this.props.history.push("/signin/userdashboard/dashboard.js")
            }
           else if(res.data.nav == "requiter"){
               localStorage.setItem("requiter",this.state.Username)
               localStorage.setItem("Id",res.data.Id)
                this.props.history.push("/signin/requiter/Rdashboard.js")
            }
            else{
               
                alert(res.data)
                document.querySelector("#signininp1").value = ""
                document.querySelector("#signintoo").value = ""
               
            }
            
        }).catch((err)=>{
            alert("error occurred")
            console.log(err)
        })
       
    },
    render: function(){
        return (
            <div>
            <div className="button_feedcont">
    
      
    <FaGlobe style={{width: "100px",height: "40px"}} /><p className="p" style={{textAlign: "left",fontWeight: "bold", display: "inline-block", color: "black"}}>Job Heist</p>

    <button id="menu1_feedbutton" ><NavLink exact to = "./" style={{textDecoration: "none"}}><FaHome />Home</NavLink></button>

  </div>
            <div className="signincap">
            <div className="signincontainer">
                <h2 className="hh">Sign In</h2>
                <br/>
                <form action="/" onSubmit={this.post} autocomplete="off">
                
                <input id="signininp1" onChange={this.handleChange} name="Username" className="signininp1" type="text" placeholder = "Enter Username" required/><br/><br/><br/>
               
                <input id="signintoo" onChange={this.handleChange} name="Password" className="signininp" type="password" placeholder = "Enter Password" required/> <br/><br/><br/><br/>
               
                <button className="signinbutt" value = "submit">Log In</button>
                <br/>
                <NavLink exact to = "./signUp"><p  style={{textAlign: "center"}}>Create New Account</p></NavLink>
                <NavLink exact to = "./forgetPassword"><p style={{textAlign: "center"}}>Forget Password?</p></NavLink>
                </form>
                <br/>

                
                               
            </div>
            <div className="signinoverlay"></div>
        </div>
        </div>
        )
    }
})

export default SignIn