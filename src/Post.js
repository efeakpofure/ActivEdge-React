import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from './actions/postAction';
import {Link} from 'react-router-dom';

class Post extends Component{
    constructor(props){
        super(props)
        this.state ={
            name:'Wale',
            posts:[]
        }
    }
    componentWillMount(){
        this.props.fetchPosts();
    }
    render(){
        
        return(
            <div>
                {this.props.posts.items ? this.props.posts.items.map((item,index,array)=>
                <div key={index}>
                    <p>{index+1}</p>
                    <p>{item.title}</p>
                    <p>{item.body}</p>
                </div>):null}
                
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log('State is ',state);
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps,{fetchPosts})(Post);