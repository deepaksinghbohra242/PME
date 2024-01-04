import { useState , useEffect , createContext } from "react";
import axios from 'axios';

export const UserContext = createContext({});

export function UserContextProvider ({children}){
    const [test , setTest]  = useState(null);
    useEffect(()=>{
        axios.get('/user/test').then((data)=>{
            setTest(data);
        })
    },[])
    return(
        <UserContext.Provider value ={{test}}>
            {children}
        </UserContext.Provider>
    )
}