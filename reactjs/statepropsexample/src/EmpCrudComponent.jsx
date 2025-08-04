import React, { useState } from "react";
const EmpCrudComponent = () => {
  const [data, setData] = useState({
    uname: "",
    age: "",
    salary: "",
  });
  const [id, setId] = useState("");
  const [alldata, setAllData] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    // const val = e.target.value
    // const name = e.target.name
    setData({
      ...data,
      [name]: value,
      // [name]:val
    });
  };
  const saveData = (e) => {
    e.preventDefault();
    if (id != "") {
         let res = alldata.map((i,index)=>{
                    if(index==id){
                        i=data
                    }
                    return i
            })
            setAllData(res)
    } else {
      setAllData([...alldata, data]);
      // localStorage.setItem('userinfo',JSON.stringify(alldata))
    }

    setData({
      uname: "",
      age: "",
      salary: "",
    });
    setId("");
  };
  const editData = (id) => {
    let res = alldata.find((i, index) => {
      return index == id;
    });
    setData(res);
    setId(id);
  };
  const delData = (id) => {
    let res = alldata.filter((i, index) => {
      return index != id;
    });
    setAllData(res);
  };
  return (
    <div>
      <form action="#" method="post" onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          name="uname"
          id=""
          value={data.uname}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="">Age:</label>
        <input
          type="number"
          name="age"
          id=""
          value={data.age}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="">Salary:</label>
        <input
          type="number"
          name="salary"
          id=""
          value={data.salary}
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" value="Save Data" />
      </form>
      <table border={"2"}>
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
          {alldata.map((i, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{i.uname}</td>
                <td>{i.age}</td>
                <td>{i.salary}</td>
                <td>
                  <button onClick={() => editData(index)}>Edit</button>
                  <button onClick={() => delData(index)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default EmpCrudComponent;
