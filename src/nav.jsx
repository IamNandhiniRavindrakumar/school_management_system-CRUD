import './nav.css';
import { FiAlignJustify } from "react-icons/fi";
import { RiDashboardFill } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { BsCalendar2Date } from "react-icons/bs";
import { TbTimeline } from "react-icons/tb";
import { IoBookSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import schlLogo from './assets/schl_finallogo.avif'


export default function Menubar(){
    const [status, setStatus]=useState(false);
    const showSideBar = ()=>{
        setStatus(!status)
    }
    return(
        <>
        <div className="nav-container">
            <div className="nav-left nav-com">
              
                <h4><img style={{width:"40px", height:"40px",background:"white",borderRadius:"50%"}} src={schlLogo}/></h4>
                <h4>Shalom School of Excellence</h4>
            </div>
            <div className="nav-right nav-com">
             <h5>↩ Sign Out</h5>
               <h4 onClick={showSideBar}><FiAlignJustify /></h4>
            </div>
        </div>
        <div style={status? {display:"block"} : {display:"none"}} className='sidebar'>

                <Link to="/"><div> <RiDashboardFill /> Dashboard</div> </Link> 
                <Link to="/student"><div> <PiStudentFill /> Students</div> </Link> 
                <Link to="/staff"><div><PiChalkboardTeacherFill /> Staff</div> </Link>
                <Link to="/timetable"><div><TbTimeline /> Timetable</div> </Link>
                <Link to="/booklist"><div><IoBookSharp /> Booklist</div> </Link>
                <Link to="/account"><div><MdAccountCircle /> Accounts</div> </Link>
                {/* <div> <BsCalendar2Date /> Attendance</div> */}
           
        </div>
        </>
    )
}