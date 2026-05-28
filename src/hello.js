import React from 'react';
import ReactDom from 'react-dom/client';
import Home from './Home';
import About from './About';
import Course from './Course';
import Contact from './Contact';
import {Routes,Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import colour from './colour.css';

function Hello(){
    return(
            <div>
                <div>
                        <nav>
                        <Link to="/home" Class="colour"> HOME</Link><br/>
                       <Link to="/about" Class="colour">ABOUT</Link><br/>
                        <Link to="/course" Class="colour">COURSE</Link><br/>
                         <Link to="/contact" Class="colour">CONTACT</Link><br/>
                        </nav>
                        <div>
                            <img src="https://t3.ftcdn.net/jpg/07/97/45/74/360_F_797457455_wSjMx13AT54f0Yl6MDF6BsJAnyxayexq.jpg"/>
                        </div> 
                </div>
                 <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/course" element={<Course/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
           </div>
    );
}
export default Hello;