import { useContext } from "react";
import { AuthContext } from "../Context/Context";


const UseAuth = () => {
 return useContext(AuthContext)
};

export default UseAuth;