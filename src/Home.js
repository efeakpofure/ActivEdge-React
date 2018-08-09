import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Home extends Component{
    constructor(props){
        super(props)
        this.state ={
            name:'Wale'
        }
    }
    componentWillMount(){
        this.setState({name:'Kenny'})
    }
    render(){
        var name = "/about/"+this.state.name;
        return(
            <div>
                This is the home Component, <Link to={name}>About</Link>
            </div>
        )
    }
}

export default Home;
