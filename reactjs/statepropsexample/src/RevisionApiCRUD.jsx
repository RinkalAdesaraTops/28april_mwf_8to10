import axios from "axios";
import { useEffect, useState } from "react";

const RevisionApiCRUD = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    salary: "",
  });
  const [id,setId] = useState()
  const [allData, setAllData] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const saveData = (e) => {
    e.preventDefault();
    if(id!=''){
            axios
            .put("http://localhost:3000/users/"+id, data)
    } else {
        axios
            .post("http://localhost:3000/users", data)
            .then(() => console.log("Data inserted..."));
    }
   
    disp()
    setData({
      name: "",
      age: "",
      salary: "",
    });
  };
  const disp = ()=>{
        axios.get("http://localhost:3000/users")
        .then((res)=>setAllData(res.data))
  }
  const delData = (id)=>{
        axios.delete("http://localhost:3000/users/"+id)
        disp()
  }
  const editData = (id)=>{
        setId(id)
        axios.patch("http://localhost:3000/users/"+id)
        .then((res)=>setData(res.data))
  }
  useEffect(()=>{
        disp()
  },[])
  return (
    <div>
      <form action="#" name="frm" method="post" onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={data.name}
        />
        <br />
        <br />
        <label htmlFor="">Age:</label>
        <input
          type="number"
          name="age"
          id="age"
          onChange={handleChange}
          value={data.age}
        />
        <br />
        <br />
        <label htmlFor="">Salary:</label>
        <input
          type="number"
          name="salary"
          id="salary"
          onChange={handleChange}
          value={data.salary}
        />
        <br />
        <br />
        <input type="submit" value="Save" />
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
          {allData.map((i) => {
            return (
              <tr>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>{i.salary}</td>
                <td>
                    <button onClick={()=>editData(i.id)}>Edit</button>
                    <button onClick={()=>delData(i.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RevisionApiCRUD;
