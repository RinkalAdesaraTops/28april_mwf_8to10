import React, { useCallback, useState } from "react";
import DisplayComponent from "./DisplayComponent";

const UserCrudComponent = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    salary: "",
  });
  const [alldata, setAllData] = useState([]);
  const [id,setId] = useState('')
  const changeData = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    // let val = e.target.value
    // let nm = e.target.name
  };
  const saveData = useCallback((e) => {
    e.preventDefault();
    if(id!=''){
        let dt = alldata.map((i,index)=>{
                if(index==id){
                    i = data
                }
                return i
        })
        setAllData(dt)
    } else {
        //insert
        setAllData([...alldata, data]);
    }

    setData({
      name: "",
      age: "",
      salary: "",
    });
    setId('')
  },[data])
  const delData = (id) => {
    alldata.splice(id, 1);
    let ab = alldata.map((i) => i);
    setAllData(ab);
  };
  const editData = (id)=>{
    let dt = alldata.find((i,index)=> index == id)
    setData(dt)
    setId(id)
  }
  return (
    <div>
      <form action="#" method="post" onSubmit={saveData}>
        Name:
        <input type="text" name="name" id="name" value={data.name} onChange={changeData} /> <br />
        <br />
        Age:
        <input type="number" name="age" id="age" value={data.age} onChange={changeData} /> <br />
        <br />
        Salary:
        <input
          type="number"
          name="salary"
          id="salary"
          value={data.salary}
          onChange={changeData}
        />{" "}
        <br />
        <br />
        <input type="submit" value="Save" />
      </form>
      <br />
      <br />
      <DisplayComponent alldata={alldata} delData={delData} editData={editData}/>
    </div>
  );
};
export default UserCrudComponent;
