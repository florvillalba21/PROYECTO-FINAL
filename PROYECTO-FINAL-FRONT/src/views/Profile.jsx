import React from 'react'
import UserProfile from "../components/Userprofile";
import CambiarPw from "../components/CambiarPass";
import NavAdmin from '../components/layout/NavAdmin';

const Profile = () => {
  return (
    <>
    <NavAdmin text={"Su perfil"}/>
    <div className="form" style={{ width: "18rem", position: "relative", left: "15%" }}>
        <UserProfile/>
        <CambiarPw/>
    </div>
    </>
  )
}

export default Profile