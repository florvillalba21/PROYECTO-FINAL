import React from 'react'
import NavUser from '../components/layout/navprofile';
import UserProfile from "../components/layout/userprofile";
import CambiarPw from "../components/layout/cambiarpw";

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