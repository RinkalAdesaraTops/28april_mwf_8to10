import { Component } from "react";

class LifecycleClass extends Component {
    constructor(props){
        console.log('constructor called...');        
        super(props)
        this.state = {
            name:"Test",
            age:26,
            count:0,
            salary:this.props.mysalary
        }
        // this.addData = this.addData.bind()
        
    }
    addData = ()=>{
        this.setState({
                count:this.state.count+1
            })
          
        }
    minus = ()=>{
        this.setState({
            count:this.state.count - 1
        })
    }
    componentDidMount(){
        console.log('component did mount called...');
        setTimeout(()=>{
            this.setState({count:11})
        },3000)
    }
    static getDerivedStateFromProps(props,state){
        console.log("state is");
        console.log(state);
        console.log("props is");
        console.log(props); 
        return null
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate called..');
        return true
    }
    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log('previous props ');
        console.log(prevprops);
        
        console.log('previous state ');
        console.log(prevstate);
        return null
    }
    componentDidUpdate(){
        console.log('finally component updated...');
        
    }
    render(){
        console.log('render calling..');
        
        return(
            <div>
                <h3>Class component created</h3>
                <h4>Name is -- {this.state.name}</h4>
                <h4>Age is -- {this.state.age}</h4>
                <h4>Salary is -- {this.props.mysalary}</h4>
                <h4>Salary is -- {this.state.salary}</h4>
                <h4>Count is -- {this.state.count}</h4>
                <button onClick={this.addData}>Add</button>
                <button onClick={()=>this.setState({count:this.state.count-1})}>Minus</button>
            </div>
        )
    }
}

export default LifecycleClass