import React, { Component } from 'react'

const Profile = (props) =>{
    return(
        <div>
            Hello this is the Profile Component of {props.name} {props.age}
        </div>
    )
}

export default Profile;