import React,{Component} from 'react'

class Welcome extends Component{
    render(){
         return <center> <p>hello, I am from class {this.props.class}</p> </center>
    }
}

export default Welcome;