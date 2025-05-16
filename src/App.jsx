import { Container } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TableComponent from './table';
import PopUpComponent from './popupComponent';
import Menubar from './nav.jsx'
import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Staff from "./staff.jsx";
import Booklist from './booklist.jsx'
import Timetable from './timetable.jsx'
import Account from './account.jsx'
import Dashboard from './dashboard.jsx';

function App() {

  const [show, setShow] = useState(false);
  
  const [status, setStatus] = useState(false);

  const [tempData, setTempData] = useState({})

  const handleClose = () => setShow(false);
  const handleShow = (rowData) => {
    if(rowData){
      setTempData(rowData);
    }else{
      setTempData({name: null,
        emailId : null,
        location : null,
        phoneNo : null,
        qualification : null})
    }
     
    setShow(true);
  }

  return (
    <>
    <Router>
    <div className='main'>
      <Menubar/>
      <Routes>

        <Route path='/' element={<Dashboard/>}/>
        <Route path='/student' element={ <Container fluid className='p-5 d-flex justify-content-center align-items-center'>
          <PopUpComponent ref={status} setRef={setStatus} modalShow={show} modalClose={handleClose} changeData={tempData} setChangeData={setTempData}/>
          <TableComponent className='ms-auto' boxView={handleShow} update={status} setUpdate={setStatus}/>
          </Container>}/>
        <Route path='/staff' element={<Staff/>}/> 
        <Route path='/booklist' element={<Booklist/>}/>
        <Route path='/timetable' element={<Timetable/>}/>
        <Route path='/account' element={<Account/>}/>
      </Routes>
     
    </div>
    </Router>
   
    </>
  )
}

export default App
