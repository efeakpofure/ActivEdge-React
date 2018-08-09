import React, { Component } from 'react';

// class About extends Component{
//     render(){
//         return(
//             
//         )
//     }
// }
const About =(props) => {
    console.log('Browser Router Properties',props);
    // props.history.push('/');
    return(
        <div>
            This is the About Component and the name pased in the url is {props.match.params.name}
        </div>
    )
}

export default About;