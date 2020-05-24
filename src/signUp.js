import React from 'react';
import {NavLink} from 'react-router-dom'
import createReactClass from 'create-react-class'
import {FaGlobe} from 'react-icons/fa'
import {FaSignInAlt} from 'react-icons/fa'
import axios from 'axios'
// import {FaInstagram} from 'react-icons/fa'
// import {FaFacebook} from 'react-icons/fa'
// import {FaTwitter} from 'react-icons/fa'
import "./signUp.css"

var SignUp = createReactClass({
    getInitialState: function(){
        return{
            Fullname: "",
            Username: "",
            Email: "",
            Website: "",
            Password: "",
            ConfirmPassword: ""
        }
    },
    handleChange: function(e){
        this.setState({
            [e.target.name]: e.target.value
        })
       
    },
    post: function(e){
        e.preventDefault()

       if(this.state.Password != this.state.ConfirmPassword){
           alert("Password did not match")
       }

       else{
           
        const data = {

            Fullname: this.state.Fullname,
            Username: this.state.Username,
            Email: this.state.Email,
            Website: this.state.Website,
            Password: this.state.Password
            
        }

        axios.post('https://backendjob.herokuapp.com/signup', data).then((res)=>{
            //alert("Data successfully encrypted")
            
            if(res.data == "good"){
                this.props.history.push("/signin")
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
            <div>
                <div className="button_feedcont">
    
      
    <FaGlobe style={{width: "100px",height: "40px"}} /><p className="pp" style={{textAlign: "left",fontWeight: "bold", display: "inline-block", color: "black"}}>Job Heist</p>

    <button id="menu1_feedbutton" ><NavLink exact to = "./signin" style={{textDecoration: "none"}}><FaSignInAlt />LogIn</NavLink></button>

  </div>
            <div className="signupcap">
            <div className="signupcontainer">
                <h2 className="h2">Create Account</h2>
                <br/>
                <form onSubmit={this.post} autocomplete="off">
                
                <input id="signupinp1" onChange={this.handleChange} name="Fullname" className="signupinp1" type="text" placeholder = "Enter Full Name" required/><br/><br/>
                <input id="signupinp1" onChange={this.handleChange} name="Username" className="signupinp1" type="text" placeholder = "Enter Username" required/><br/><br/>
                <input id="signupinp1" onChange={this.handleChange} name="Email" className="signupinp1" type="text" placeholder = "Enter Email" required/><br/><br/>
                <input id="signupinp1" onChange={this.handleChange} name="Website" className="signupinp1" type="text" placeholder = "Enter website (Requiter only)"/><br/><br/>
                <input id="signupinp1" onChange={this.handleChange} name="Password" className="signupinp1" type="password" placeholder = "Enter Password" required/><br/><br/>
                <input id="too" onChange={this.handleChange} name="ConfirmPassword" className="signupinp" type="password" placeholder = "Confirm Password" required/> <br/><br/><br/><br/>
               
                <button className="signupbutt" value = "submit">Sign Up</button>
                <br/>
               
                </form>
                <br/>
                               
            </div>
            <div className="signupoverlay"></div>
        </div>
        </div>
        )
    }
})

export default SignUp