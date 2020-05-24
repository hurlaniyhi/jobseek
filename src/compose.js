import React from 'react';
import {NavLink} from 'react-router-dom'
import createReactClass from 'create-react-class'
import axios from 'axios'
// import {FaGlobe} from 'react-icons/fa'
// import {FaSignOutAlt} from 'react-icons/fa'

import "./compose.css"


var Compose = createReactClass({
    getInitialState: function(){
        return{
            MailSubject: "",
            ComposedMail: ""
        }
    },
    componentDidMount: function(){
         
        if(localStorage.getItem("user") == null && localStorage.getItem("requiter") == null){
            this.props.history.push("/signin")
        }
        else{
        const data = {
            Username: localStorage.getItem("requiter")
        }

        axios.post('https://backendjob.herokuapp.com/fetchInfo', data).then((res)=>{
           
       
        if(res.data == "bad"){
            alert("could not retrieve your information from the database")
        }
        else{
            this.setState({
                ComposedMail: res.data.ComposedMail,
                MailSubject: res.data.MailSubject,
                
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
            MailSubject : this.state.MailSubject,
            ComposedMail: this.state.ComposedMail
            
        }
        alert(this.state.ComposedMail)
        axios.post('https://backendjob.herokuapp.com/compose', data).then((res)=>{
            
            
            if(res.data == "good"){
                alert("successfully updated")
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
                    <h4 id="ch4" style={{textAlign: "left", color: "whitesmoke",paddingLeft: "7%",paddingTop: "5px"}}>PROVIDE THE MAIL YOU WANT TO BE SENDING</h4>
                </div>
                <div className="outerBlock">
                
                    <br/><br/>
                <div className="formBlock">
                    <br/><br/>
                <form onSubmit={this.post}>
                <h3 style={{textAlign: "center"}}>Compose Mail</h3>
                <br/>
                <input name="MailSubject" className="sub1" onChange={this.handleChange} type="text" value={this.state.MailSubject} placeholder = "Subject" required/> <br/><br/>
                <textarea name="ComposedMail" onChange={this.handleChange} className="cfn" value={this.state.ComposedMail} type="text" required placeholder="Mail Content"></textarea><br/><br/><br/>
                <button className="mupload" value="submit">Compose</button><br/><br/><br/><br/>
                </form>
                </div>
                <br/><br/>
                </div>
                <br/><br/><br/><br/><br/>
            </div>
        )
    }
})

export default Compose