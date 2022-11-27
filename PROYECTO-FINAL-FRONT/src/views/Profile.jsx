import React from 'react'
import NavUser from './../components/navprofile';
import UserProfile from "./../components/userprofile";
import CambiarPw from "../components/cambiarpw";

const Profile = () => {
  return (
    <>
    <NavUser/>
    <div>
        <UserProfile/>
        <CambiarPw/>
    </div>
    </>
  )
}

export default Profile