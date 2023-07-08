import React , { useState } from "react";
import  { useNavigate } from "react-router-dom";
import axios from 'axios';

const Add=()=>{
    const [inputData, setInputData] = useState({IdEvent: '', Name: '', Place: '', Date:'', Responsable:'', Capacity:''})
    const navigat = useNavigate();
    function handleSubmit(event){
     event.preventDefault()
    axios.post('http://localhost:3030/events', inputData)
    .then(res => {
        alert("Event added successfully!");
        navigat('/Admin')
    }).catch(err => console.log(err));
}
    return(
       <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-light p-5'>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="IdEvent"> IdEvent:</label>
                <input type="text" name="IdEvent" className='form-control'
                onChange={e => setInputData({... inputData,IdEvent: e.target.value})}/>
            </div>
            <div>
                <label htmlFor="Name">  Name:</label>
                <input type="text" name=" Name" className='form-control'
                onChange={e => setInputData({... inputData, Name: e.target.value})}/>
            </div>
            <div>
                <label htmlFor="Place"> Place:</label>
                <input type="text" name="Place" className='form-control'
                onChange={e => setInputData({... inputData,Place: e.target.value})}/>
            </div>
            <div>
                <label htmlFor=" Date">  Date:</label>
                <input type="text" name="Date" className='form-control'
                onChange={e => setInputData({... inputData,Date: e.target.value})}/>
            </div>
            <div>
                <label htmlFor=" Responsable">  Responsable:</label>
                <input type="text" name="Responsable" className='form-control'
                onChange={e => setInputData({... inputData, Responsable: e.target.value})}/>
            </div>
            <div>
                <label htmlFor=" Capacity">  Capacity:</label>
                <input type="text" name="Capacity" className='form-control'
                onChange={e => setInputData({... inputData, Capacity: e.target.value})}/>
            </div> <br />
            <button className='btn btn-info'> Submit</button>
            </form>
        </div>
       </div>
    )
}
export default Add;