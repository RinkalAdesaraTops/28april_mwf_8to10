import React, { useEffect, useState } from 'react'
import axios from 'axios'
const ApiCrudExample = () => {
    const [alldata,setAllData] = useState([])
    const [data,setData] = useState({
        name:'',
        age:'',
        salary:''
    })
    const saveData = (e)=>{
        e.preventDefault()
        console.log(data);
        
        axios.post('http://localhost:4000/users',data)
            .then(()=>console.log("Inserted..."))
    }
    const handleChange = (e)=>{
        const {name,value}= e.target
        setData({
            ...data,
            [name]:value
        })
    }
    useEffect(()=>{
        axios.get('http://localhost:4000/users')
            .then((res)=>setAllData(res.data))
        // fetch('https://fakestoreapi.com/users')
        //     .then(response => response.json())
        //     .then(data => setAllData(data));
    },[])
    const delData = (id)=>{
        axios.delete('http://localhost:4000/users/'+id)
            .then(()=>console.log("deleted..."))

    }
  return (
    <div>
      <form action="#" method='post' onSubmit={saveData}>
            <label htmlFor="">Name:</label>
            <input type="text" name="name" id="" value={data.name} onChange={handleChange} />
            <br /><br />
            <label htmlFor="">Name:</label>
            <input type="number" name="age" id="" value={data.age} onChange={handleChange} />
            <br /><br />
            <label htmlFor="">Name:</label>
            <input type="number" name="salary" id="" value={data.salary} onChange={handleChange} />
            <br /><br />
            <input type="submit" value="Save Data"/>
            <br /><br />
      </form>
      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Salary</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
            alldata.map((i,index)=>{
                return (
                    <tr>
                        <td>{i.id}</td>
                        <td>{i.name}</td>
                        <td>{i.age}</td>
                        <td>{i.salary}</td>
                        <td><button onClick={()=>delData(i.id)}>Delete</button></td>
                    </tr>
                )
            })  
        }
        </tbody>
      </table>
    </div>
  )
}

export default ApiCrudExample
