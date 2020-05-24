import React from 'react';
import {NavLink} from 'react-router-dom'
import createReactClass from 'create-react-class'
import axios from 'axios'
// import {FaGlobe} from 'react-icons/fa'
// import {FaSignOutAlt} from 'react-icons/fa'

import "./waec.css"


var Waec = createReactClass({
    getInitialState: function(){
        return{
            Waec: ""
        }
    },
    handleChange: function(e){
        this.setState({
            Waec: e.target.files[0]
        })
    },
    post: function(e){
        e.preventDefault()

        const data = new FormData()
        data.append('Waec', this.state.Waec)
        data.append("Id", localStorage.getItem("Id"))
        

        axios.post(' https://backendjob.herokuapp.com/Waec', data).then((res)=>{
            //alert("Data successfully encrypted")
            
            if(res.data == "good"){
                alert("O'Level result successfully uploaded")
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
                    <h4 style={{textAlign: "left", color: "whitesmoke",paddingLeft: "7%",paddingTop: "5px"}}>UPLOAD O'Level CERTIFICATE</h4>
                </div>
                <div className="outerBlock">
                
                    <br/><br/>
                <div className="formBlock">
                    <br/><br/>
                <form onSubmit={this.post}>
                <h3 style={{textAlign: "center"}}>O'Level Certificate Upload</h3>
                <br/><br/><br/>
                
                <input name="Waec" onChange={this.handleChange} className="cufn" type="file" required/><br/><br/><br/>
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

export default Waec