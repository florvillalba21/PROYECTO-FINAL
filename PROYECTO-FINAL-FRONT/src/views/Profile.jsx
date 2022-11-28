import React from 'react'
import UserProfile from "../components/Userprofile";
import CambiarPw from "../components/CambiarPass";
import NavAdmin from '../components/layout/NavAdmin';

const Profile = () => {
  return (
    <>
    <NavAdmin/>
    <div>
        <UserProfile/>
        <CambiarPw/>
    </div>
    </>
  )
}

export default Profile