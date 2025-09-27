import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFunc, delFunc, updFunc } from './usercrud/UserAction'

const UserComponent = () => {
    const [data,setData] = useState({
        name:"",
        age:""
    }) 
    const alldata = useSelector((state)=>state.data)
    const [id,setId]=useState('')
    const dispatch = useDispatch()
    const handleChange = (e)=>{
        const {name,value}=e.target
        setData({
            ...data,
            [name]:value
        })

    }
    const saveData = (e)=>{
        e.preventDefault()
        if(id!=''){
            console.log('upd called.');
            
            dispatch(updFunc(id,data))
        } else {
            console.log('ins called.');
            
            dispatch(addFunc(data))
        }
        setData({
            name:'',
            age:''
        })
        setId('')
    }
    const editData = (id)=>{
        setId(id)
        let res = alldata.find((i,index)=>index==id)
        setData(res)
    }
  return (
    <div>
      <form action="#" method='post' onSubmit={saveData}>
        Name:
        <input type="text" name="name" id="name" value={data.name} onChange={handleChange} /><br /><br />
        Age:<input type="number" name="age" id="age" value={data.age}  onChange={handleChange}/><br /><br />
        <input type="submit" name="name" id="name" value="Save"  /><br /><br />
      </form>
      <br /><br />
      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                alldata.map((i,index)=>{
                    return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                            <td>
                                <button onClick={()=>editData(index)}>Edit</button>
                                <button onClick={()=>dispatch(delFunc(index))}>Delete</button>
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

export default UserComponent
