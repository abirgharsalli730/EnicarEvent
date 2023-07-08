import React, { useEffect,useState } from "react";
import Navbar from "../Component/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";



const Admin=()=>{
     const [columns, setColumns]= useState([])
     const [records, setRecords]= useState([])
      useEffect( ()=>{
         axios.get('http://localhost:3030/events')
         .then(res => {
            setColumns(Object.keys(res.data[0]))
            setRecords(res.data)
         })
      }, [])

      
      
    return(
        <>
         <Navbar />
         <div className="container mt-5">
            <div className="text-end"><Link to="/create" className="btn btn-primary">Add +</Link></div>
           
            <table className="table">
                <thead>
                    <tr>
                        {columns.map((c,i) =>(
                            <th key={i}>{c}</th>
                        ))}
                        <th>Action</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        records.map((d,i) => (
                            <tr key={i}>
                                <td>{d.IdEvent}</td>
                                <td>{d.Name}</td>
                                <td>{d.Place}</td>
                                <td>{d.Date}</td>
                                <td>{d.Responsable}</td>
                                <td>{d.Capacity}</td>
                                <td>
                                <Link to={`/update/${d.id}`}>
                                    <button type="Submit" className='btn btn-sm btn-success'> <strong>Update</strong></button>
                                </Link>
                                <Link to="/delete">
                                    <button type="Submit" className='btn btn-sm ms-1 btn-danger'> <strong>Delete</strong></button>
                                </Link>
                               
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
         </div>
        
        </>
    )
}
export default Admin;