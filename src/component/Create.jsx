import axios from 'axios';
import React,{useState} from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';

const Create = () => {
let navigate = useNavigate()
const [firstName, setfirstName] = useState('');
const [lastName, setlastName] = useState('');
const [regNo, setregNo] = useState(null);

const sendData = () => {
  axios.post(`https://63b2d5465901da0ab36f537d.mockapi.io/crud`, {
    firstName,
    lastName,
    regNo
 
    
  }).then(()=>navigate('/read'))


}
  return (
    <>
      <div style={{marginRight: "100px"}}>
      <Form onSubmit={sendData}>
    <Form.Field>
      <label>First Name</label>
      <input name='fname' onChange={(e) => {setfirstName(e.target.value)}} placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' onChange={(e) => {setlastName(e.target.value)}} />
    </Form.Field>
    <Form.Field>
      <label>Reg No*</label>
      <input type="number" placeholder='Reg number' onChange={(e) => {setregNo(e.target.value)}} />
    </Form.Field>
    <Button color='pink' type='submit' >Submit</Button>
  </Form>
  </div>
    </>
  )
}

export default Create