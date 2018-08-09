import {GET_POSTS,CREATE_POST} from './types';

export const fetchPosts = () => (dispatch)=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(posts=>dispatch({type:GET_POSTS,payload:posts}));
}

export const createPost =() =>(dispatch) =>{
    
}
