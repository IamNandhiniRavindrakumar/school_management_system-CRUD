import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { CiEdit } from "react-icons/ci";
import { BsTrash3Fill } from "react-icons/bs";
import './App.css'


export default function TableComponent(fromApp){
    const[tableData, setTableData] = useState(null)
    useEffect(()=>{
        fetch('https://67d7ed1d9d5e3a10152c9b9e.mockapi.io/student/details', {
            method: 'GET',
            headers: {'content-type':'application/json'},
          }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
          }).then(tasks => {
            setTableData(tasks.reverse())
          }).catch(error => {
            console.log(error)
          })
    },[fromApp.update])

console.log(tableData)

const deleteUser= (id) =>{
  
fetch(`https://67d7ed1d9d5e3a10152c9b9e.mockapi.io/student/details/${id}`, {
  method: 'DELETE',
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  // Do something with deleted task
  alert("deleted successfully...!")
  fromApp.setUpdate(!fromApp.update)
}).catch(error => {
  // handle error
  console.log(error)
})

}



    return(
        <>
        <div className='table-wrapper'>
        <Button onClick={()=>fromApp.boxView()} variant='success' className='fs-5 mb-3'>Add Data</Button>
        <Table striped bordered hover className='border-dark'>
          <thead className='text-center border-light'>
            <tr className='fs-5'>
              <th className='bg-dark text-light'>S.No</th>
              <th className='bg-dark text-light pe-5'>Name</th>
              <th className='bg-dark text-light'>Email Id</th>
              <th className='bg-dark text-light'>Location</th>
              <th className='bg-dark text-light pe-5'> Phone No </th>
              <th className='bg-dark text-light'>Qualification</th>
              <th className='bg-dark text-light pe-5'>Action</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {tableData&&tableData.map((item, i)=>{
              return(
                <>
                <tr>
              <td className='border-dark'>{i+1}</td>
              <td className='border-dark'>{item.name}</td>
              <td className='border-dark'>{item.emailId}</td>
              <td className='border-dark'>{item.location}</td>
              <td className='border-dark'>{item.phoneNo}</td>
              <td className='border-dark'>{item.qualification}</td>
              <td className='border-dark'>
                <Button onClick={()=>fromApp.boxView(item)} variant="light m-1" className='text-primary'><CiEdit /></Button>
                <Button onClick={()=> deleteUser(item.id)} variant="light" className='text-danger'><BsTrash3Fill /></Button>
              </td>
                </tr>
                </>
              )
            })}
          </tbody>
        </Table>
        </div>
        </>
    )
}