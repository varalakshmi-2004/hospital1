import React,{useState} from 'react'
import ReactDOM from 'react-dom/client'
import "./demo.css";
function Login(){
    const[formtype,setformtype]=useState(" ");
    const[name,setname]=useState(" ");
    return(
            <div className="box">
                <button onClick={()=>setformtype("login")}>LOGIN</button><br/><br/>
                {formtype==="login" && (
                <div className="change">
                   <input type="text" placeholder="enter your name"className="cen" id="name"/><br/>
                    <input type="password" placeholder="enter your password"className="cen" id="pass"/>
                </div>)}
                <button onClick={()=>setformtype("register")}>REGISTER</button><br/><br/>
                {formtype==="register" && (
                <div className="bing">
                    <input type="text" placeholder="enter your first name"className="cen"/><br/>
                    <input type="text" placeholder="enter your last name"className="cen"/><br/>
                    <input type="text" placeholder="enter your email"className="cen"/><br/>
                    <input type="password" placeholder="enter your password"className="cen"/>
                </div>)}
                <button>submit</button>
            </div>       
    );
}
export default Login;