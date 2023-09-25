import React ,{useState}from 'react'
import {loginContext} from './loginContext'
import axios from 'axios'
function UserLoginContextStore({children}) {
    const [currentUser,setCurrentUser]=useState({})
    const [error,setError]=useState("")
    const [userLoginStatus,setUserLoginStatus]=useState(false)
    //user login
    const login=(userLogData)=>{
        axios.post('http://localhost:4000/user-api/user-login',userLogData)
        .then((response)=>{
            if(response.data.message==="User Logged Successfully")
            {
                //update current user state
                setCurrentUser({...response.data.user})
                //update user login status
                setUserLoginStatus(true)
                //update error status
                setError("")
                //store the jwt token in browser storage
                localStorage.setItem("token",response.data.token)
            }
            else
            {
                setError(response.data.message)
            }
        })
        .catch(err=>{

        })
    }
    //user logout
    const logout=()=>{
        //clear broswer storage
        localStorage.clear();
        //update user login status
        setUserLoginStatus(false)
    }
  return (
    <loginContext.Provider value={[currentUser,error,userLoginStatus,login,logout]}>
        {children}
        {/* our store is ready */}
    </loginContext.Provider>
  )
}

export default UserLoginContextStore