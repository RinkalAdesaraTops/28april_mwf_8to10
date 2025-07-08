import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';
import BootstrapExample from './BootstrapExample';
import MaterialUI from './MaterialUI';
import StyledExample from './StyledExample';
function App() {
  var name="Rinkal"
  const age = 25
  let qualification = "MCA"
  let arr = [10,20,30,40,50]
  return (
    <div>
      {/* <h3>React js Project </h3>
      <h4>My Name is -- {name}</h4>
      <h4>Age is -- {age}</h4>
      <h4>Qualification is - {qualification}</h4>
      <ul>
        {
          arr.map((i,index)=>{
              return(
                <li>{i}</li>
              )
          })
        }
      </ul> */}

      {/* <FirstComponent /> */}
      {/* <BootstrapExample /> */}
      {/* <MaterialUI /> */}
      <StyledExample />
    </div>
  );
}

export default App;
