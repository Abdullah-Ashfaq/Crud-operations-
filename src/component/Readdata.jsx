import React,{useEffect, useState} from 'react'
import { Table, Button } from 'semantic-ui-react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Readdata = () => {


const [data, setData] = useState([])
useEffect(() => {
  axios.get(`https://63b2d5465901da0ab36f537d.mockapi.io/crud`)
  .then((response)=> {
    setData(response.data)
    
   
  })

  
}, [])

const setStorage = (id,firstName,lastName,regNo) => {
    
    localStorage.setItem('id', id);
    localStorage.setItem('firstName', firstName)
    localStorage.setItem('lastName', lastName)
    localStorage.setItem('regNo', regNo)

}
const getUpdatedData = () => {
    axios.get(`https://63b2d5465901da0ab36f537d.mockapi.io/crud`)
  .then((response)=> {
    setData(response.data)
    
   
  })
}

const onDelete = (id) => {
    axios.delete(`https://63b2d5465901da0ab36f537d.mockapi.io/crud/${id}`)
    .then(()=> {
        getUpdatedData();
      
     
    })
}


  return (
  <>
  <div style={{width:"60%"}}>
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>Reg No</Table.HeaderCell>
        <Table.HeaderCell>Update</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
     {data.map((val) => {
        return  <Table.Row key={val.id}>
        <Table.Cell>{val.firstName}</Table.Cell>
        <Table.Cell>{val.lastName}</Table.Cell>
        <Table.Cell>{val.regNo}</Table.Cell>
        <Table.Cell>
            <Link to='/update'>
            <Button color='green' onClick={() => setStorage(val.id,val.firstName,val.lastName,val.regNo )}>Update</Button>
            </Link>
            
            </Table.Cell>
        <Table.Cell>
            
            <Button color='red' onClick={()=>onDelete(val.id)}>Delete</Button>
            
            </Table.Cell>

      </Table.Row>
     })}
      
    </Table.Body>
  </Table>
  </div>
  
  
  </>
  )
}

export default Readdata