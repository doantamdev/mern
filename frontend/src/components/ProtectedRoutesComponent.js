import { Outlet,Navigate } from "react-router-dom";
import UserChatComponent from "./user/UserChatComponent";

const ProtectedRoutesComponent = ({admin}) => {
    if(admin){
        let adminAuth = true
        return adminAuth ? <Outlet /> : <Navigate to="/login"/>;
    }else{
        let userAuth = true
        return userAuth ? <> <Outlet /> <UserChatComponent/> </> : <Navigate to="/login"/>;
    }
}

export default ProtectedRoutesComponent