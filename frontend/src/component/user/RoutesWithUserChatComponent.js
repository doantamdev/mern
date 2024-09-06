import { Outlet } from "react-router-dom";


import React from 'react'
import UserChatComponent from "./UserChatComponent";

const RoutesWithUserChatComponent = () => {
  return (
    <>
    <UserChatComponent />
    <Outlet />
    </>
  )
}

export default RoutesWithUserChatComponent