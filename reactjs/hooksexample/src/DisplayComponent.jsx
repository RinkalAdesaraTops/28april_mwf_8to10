import React, { memo } from 'react'

const DisplayComponent = ({alldata,delData,editData}) => {
    console.log('display func called...');
    return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>AGe</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
        {alldata.map((i, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{i.name}</td>
              <td>{i.age}</td>
              <td>{i.salary}</td>
              <td>
                <button onClick={()=>editData(index)}>Edit</button>
                <button onClick={() => delData(index)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  )
}

export default memo(DisplayComponent)
