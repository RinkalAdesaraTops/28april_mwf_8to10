import React, { useEffect, useState } from "react";
import axios from "axios";
const ApiCrudExample = () => {
  const [alldata, setAllData] = useState([]);
  const [data, setData] = useState({
    name: "",
    age: "",
    salary: "",
  });
  const [id, setId] = useState("");
  const saveData = (e) => {
    e.preventDefault();
    if (id != "") {
      axios
        .put("http://localhost:3000/users/"+id, data)
        .then(() => console.log("updated.."));
    } else {
      axios
        .post("http://localhost:3000/users", data)
        .then(() => console.log("Inserted..."));
    }

    disp();
    setData({
      name: "",
      age: "",
      salary: "",
    });
    setId("");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  useEffect(() => {
    disp();
    // fetch('https://fakestoreapi.com/users')
    //     .then(response => response.json())
    //     .then(data => setAllData(data));
  }, []);
  const disp = () => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setAllData(res.data));
  };
  const editData = (id) => {
    axios
      .patch("http://localhost:3000/users/" + id)
      .then((res) => setData(res.data));
    setId(id);
  };
  const delData = (id) => {
    axios
      .delete("http://localhost:3000/users/" + id)
      .then(() => console.log("deleted..."));
    disp();
  };
  return (
    <div>
      <form action="#" method="post" onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          name="name"
          id=""
          value={data.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="">Name:</label>
        <input
          type="number"
          name="age"
          id=""
          value={data.age}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="">Name:</label>
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
        <br />
        <br />
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
          {alldata.map((i, index) => {
            return (
              <tr>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>{i.salary}</td>
                <td>
                  <button onClick={() => editData(i.id)}>Edit</button>
                  <button onClick={() => delData(i.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ApiCrudExample;
