import React, { useState } from 'react'

const UserCrudComponent = () => {
    const [uname,setUname] = useState('')
    const [age,setAge] = useState('')
    const [salary,setSalary] = useState('')
    const [data,setData] = useState([])
    const saveAge = (e)=>{
        setAge(e.target.value)
    }
    const saveData = (e)=>{
        e.preventDefault()      
        setData([
            ...data,
            {
                "uname":uname,
                "age":age,
                "salary":salary
            }
        ])
        setAge('')
        setSalary('')
        setUname('')
    }
  return (
    <div>
      <form action="#" method='post' onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input type="text" name="uname" id="" value={uname} onChange={(e)=>setUname(e.target.value)} /><br /><br />
        <label htmlFor="">Age:</label>
        <input type="number" name="age" id=""  value={age} onChange={saveAge}/><br /><br />
        <label htmlFor="">Salary:</label>
        <input type="number" name="salary" id="" value={salary} onChange={(e)=>setSalary(e.target.value)}/><br /><br />
        <input type="submit" value="Save Data" />
      </form>

      <br /><br />
      <table border={'2'}>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Salary</th>
            </tr>
            {
                data.map((i,index)=>{
                    return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{i.uname}</td>
                            <td>{i.age}</td>
                            <td>{i.salary}</td>
                        </tr>
                    )
                })
            }
      </table>


    </div>
  )
}

export default UserCrudComponent
