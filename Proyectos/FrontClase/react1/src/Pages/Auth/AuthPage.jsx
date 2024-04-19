import { Register } from "../../components/Register.jsx"
import { Login } from "../../components/Login.jsx"
import { useState } from "react"

import './AuthPage.css'

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false)
  const handleAuthPage = ()=>{
    setIsLogin((prev)=> !prev)
  }

  return (
    <div className="auth-container">
    {
      isLogin ? (
        <Login/>
      ) : (
        <Register switchAuthAndler={handleAuthPage}/>
      )
    
    
   }
 
    </div>

)
}
