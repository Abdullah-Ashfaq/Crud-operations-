import axios from 'axios';
import React,{useState, useEffect} from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'

const Update = () => {
let navigate = useNavigate();
const [firstName, setfirstName] = useState('');
const [lastName, setlastName] = useState('');
const [regNo, setregNo] = useState(null);
const [id, setId] =useState(null)
console.log(firstName);
console.log(lastName)
const sendData = (event) => {
  axios.put(`https://63b2d5465901da0ab36f537d.mockapi.io/crud/${id}`, {
    firstName,
    lastName,
    regNo
 
    
  }).then(()=>navigate('/read'));
}
useEffect(()=> {
    setfirstName(localStorage.getItem('firstName'));
    setlastName(localStorage.getItem('lastName'));
    setregNo(localStorage.getItem('regNo'));
    setId(localStorage.getItem('id'))

},[])
  return (
    <>
      <div style={{marginRight: "100px"}}>
      <Form onSubmit={sendData}>
    <Form.Field>
      <label>First Name</label>
      <input name='fname' value={firstName} onChange={(e) => {setfirstName(e.target.value)}} placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' value={lastName} onChange={(e) => {setlastName(e.target.value)}} />
    </Form.Field>
    <Form.Field>
      <label>Reg No*</label>
      <input type="number" placeholder='Reg number' value={regNo} onChange={(e) => {setregNo(e.target.value)}} />
    </Form.Field>
    <Button color='pink' type='submit' >Update</Button>
  </Form>
  </div>
    </>
  )
}

export default Update