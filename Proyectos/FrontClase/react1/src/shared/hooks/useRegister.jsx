import { useState } from "react"
import toast from 'react-hot-toast'
import { registerRequest} from "../../services/api.js"

export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false)

    const register = async(email, username, password)=>{     
        setIsLoading(true)
        const user = {
            email,
            username,
            password

        }
        //consultar al API
        const response = await registerRequest(user)
        setIsLoading(false)

        if(response.error){
            return toast.error(
                response?.e?.response?.date ||
                'Error general al intentar registrar al usuario, intenta de nuevo.'
            )
        }
        console.log(response);
    }
        return {
            register,
            isLoading                            
        }    
    
}