import Table from 'react-bootstrap/Table';
import './staff.css'
import { useEffect, useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { BsTrash3Fill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function Staff({setCount}){

  const [status, setStatus]=useState(false)
  const [staffData, setStaffData]=useState([]);
  const [createData, setCreateData]=useState({})
  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (item) =>{

      if(item){
          setCreateData(item)
      }else{
          setCreateData({
            name:"",
            emailId:"",
            qualification:"",
            location:""
          })
      }
     
      setShow(true);
    } 

     console.log(createData)

// to get the data (read)
  useEffect(()=>{
    fetch('https://6825c72b0f0188d7e72e6bb5.mockapi.io/staff/staff',{
      method: "GET",
      headers: {"content-type":"application/json"}
    }).then((task)=>{
      if(task.ok){
        return task.json()
      }
    }).then((data)=>{
      console.log("data",data)
      setStaffData(data)
      setCount(data.length)
      console.log("data length",data.length)
    }).catch((error)=>{
      console.log(error)
    })
  },[status])

//to update data

    const updated = ()=>{
      fetch(`https://6825c72b0f0188d7e72e6bb5.mockapi.io/staff/staff/${createData.id}`,{
        method:"PUT",
        headers: {"content-type":"Application/json"},
        body: JSON.stringify(createData)
      }).then((res)=>{
        if(res.ok){
          return res.json()
        }
      }).then((tasks)=>{
        alert("updated")
        setStatus(!status)
      }).catch((error)=>{
        console.log(error)
      })

      handleClose()
    }

  // to create data

  const created = ()=>{
   fetch("https://6825c72b0f0188d7e72e6bb5.mockapi.io/staff/staff",{
    method:"POST",
    headers:{"content-type":'application/json'},
    body : JSON.stringify(createData)
   }).then((res)=>{
    if(res.ok){
      return res.json()
    }
   }).then((task)=>{
    alert("created")
     setStatus(!status)
   }).catch((error)=>{
    console.log(error)
   })

   handleClose()
  }

  const deleted = (dataID)=>{
    fetch(`https://6825c72b0f0188d7e72e6bb5.mockapi.io/staff/staff/${dataID}`,{
      method:"DELETE"
    }).then((res)=>{
      if(res.ok){
        return res.json()
      }
    }).then((task)=>{
      alert("deleted")
       setStatus(!status)
    }).catch((error)=>{
      console.log(error)
    })

  }

    return(
        <>
        <div className='staff-table'>

          <button className='addBtn' onClick={()=>handleShow({})}> + Add</button>

         <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th className='bg-info'>#</th>
                <th className='bg-info'>Full Name</th>
                <th className='bg-info'>Email ID</th>
                <th className='bg-info'>Qualification</th>
                <th className='bg-info'>Location</th>
                <th className='bg-info'>Edit/Dlt</th>
              </tr>
            </thead>
            <tbody>
              {staffData&&staffData.map((item,i)=>{
                return(
                   <tr>
                    <td>{i+1}</td>
                    <td>{item.name}</td>
                    <td>{item.emailId}</td>
                    <td>{item.qualification}</td>
                    <td>{item.location}</td>
                    <td>
                      <button className='editBtn' onClick={()=>handleShow(item)}> <CiEdit /> </button>
                      <button className='dltBtn' onClick={()=>deleted(item.id)}> <BsTrash3Fill /> </button>
                    </td>
                  </tr>
                )
              })}
             
            </tbody>
          </Table>

           <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="your name"
                defaultValue={createData.name}
                onChange={(e)=>{setCreateData({...createData, name: e.target.value})}}
                autoFocus
              />
            </Form.Group>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                defaultValue={createData.emailId}
                onChange={(e)=>{setCreateData({...createData, emailId: e.target.value})}}
                autoFocus
              />
            </Form.Group>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Qualification</Form.Label>
              <Form.Control
                type="text"
                placeholder="abc"
                defaultValue={createData.qualification}
                onChange={(e)=>{setCreateData({...createData, qualification: e.target.value})}}
                autoFocus
              />
            </Form.Group>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Chennai"
                defaultValue={createData.location}
                onChange={(e)=>{setCreateData({...createData, location: e.target.value})}}
                autoFocus
              />
            </Form.Group>
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {createData.id? <Button variant="warning" onClick={updated}>
            Save Changes
          </Button> : <Button variant="info" onClick={created}>
            Save
          </Button>}
          
        </Modal.Footer>
      </Modal>
        </div>
        </>
    )
}