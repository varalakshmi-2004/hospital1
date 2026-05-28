import React,{useState} from 'react';
function Text(){
    const[password,Setpassword]=useState(" ");
    const[name,Setname]=useState(" ");
    const[country,Setcountry]=useState(" ");
    const handle=(e)=>{e.preventDefault();
                    console.log("form submitted by password:",password);
                    console.log("form submitted by name:",name);
    };
    return(
            <form onSubmit={handle}>
                <label>Name:
                    <input type="text" placeholder="enter username"
                    value={name}
                    onChange={(e)=>Setname(e.target.value)}
                    />
                </label><br/><br/>
                <label>password: 
                <input type="password" 
                placeholder="123@89" 
                value={password}
                 onChange={(e)=>Setpassword(e.target.value)}
                 />
               </label><br/><br/>
               <label>Country:
                    <select value={country} onChange={(e)=>Setcountry(e.target.value)}>
                        <option value=" ">--Select--</option>
                        <option value="india">India</option>
                        <option value="usa">USA</option>
                        <option value="uk">UK</option>
                        </select>
               </label><br/>
                <button type="submit">submit</button>
                <p>the password is:{password}</p>
                <p>the name is:{name}</p> 
            </form>
    );

}
export default Text;