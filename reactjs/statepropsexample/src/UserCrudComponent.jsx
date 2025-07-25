import React, { useState } from 'react'

const UserCrudComponent = () => {
    const [uname,setUname] = useState('')
    const [age,setAge] = useState('')
    const [salary,setSalary] = useState('')
    const [id,setId] = useState('')
    const [data,setData] = useState([])
    const saveAge = (e)=>{
        setAge(e.target.value)
    }
    const saveData = (e)=>{
        e.preventDefault()   
        if(id!=''){
            //update
            let res = data.map((i,index)=>{
                    if(index==id){
                        i.uname = uname
                        i.age = age
                        i.salary = salary
                    }
                    return i
            })
            setData(res)
        }else {
            //insert
            setData([
                ...data,
                {
                    "uname":uname,
                    "age":age,
                    "salary":salary
                }
            ])
        }
        setAge('')
        setSalary('')
        setUname('')
        setId('')
    }
    const delData = (id)=>{
        //1 2  4 5 = 3
            let res = data.filter((i,index)=>{
                return index != id
            })
            setData(res)
            // let data1 = data.splice(id,1)
            // console.log(data1);
            // setData(data1)
    }
    const editData = (id)=>{
         let res = data.find((i,index)=>{
                return index == id
            })
            console.log(res);
            
            setUname(res.uname)
            setAge(res.age)
            setSalary(res.salary)
            setId(id)
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
                data.map((i,index)=>{
                    return (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{i.uname}</td>
                            <td>{i.age}</td>
                            <td>{i.salary}</td>
                            <td>
                                <button onClick={()=>editData(index)}>Edit</button>
                                <button onClick={()=>delData(index)}>Delete</button>
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
      </table>


    </div>
  )
}

export default UserCrudComponent
