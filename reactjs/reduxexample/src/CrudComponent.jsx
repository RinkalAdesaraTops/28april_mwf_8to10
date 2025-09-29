import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { del, ins, upd } from './CrudRtk/CrudReducer'

const CrudComponent = () => {
  const [data,setData] = useState({
    name:"",
    age:""
  })
  const [id,setId] = useState("")
  const alldata=  useSelector((state)=>state.User.data)
  const dispatch = useDispatch()
  const handleChange = (e)=>{
      const {name,value} = e.target 
      setData({
        ...data,
        [name]:value
      })
  }
  const saveData = (e)=>{
    e.preventDefault()
    console.log(id);
    
    if(id!='' || id==0)
      dispatch(upd({id,data}))
    else
      dispatch(ins(data))
    setData({
      name:"",
      age:''
    })
    setId('')
  }
  const editData = (id)=>{
    let res = alldata.find((i,index)=> index == id)
    setData(res)
    setId(id)
  }

  return (
    <div>
      <form action="#" method="post" onSubmit={saveData}>
        Name:
        <input type="text" name="name" id="name" value={data.name} onChange={handleChange}/>
        <br /><br />
        Age:
        <input type="number" name="age" id="age" value={data.age} onChange={handleChange}/>
        <br /><br />
        <input type="submit" value="Save" />
      </form>
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
                      <button onClick={()=>dispatch(editData(index))}>Edit</button>
                      <button onClick={()=>dispatch(del(index))}>Delete</button>
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

export default CrudComponent
