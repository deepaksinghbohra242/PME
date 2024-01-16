import { useState , useEffect , createContext } from "react";
import axios from 'axios';

export const UserContext = createContext({});

export function UserContextProvider ({children}){
    const [user , setUser]  = useState(null);
    const [ready , setReady] = useState(false); 
    useEffect(()=>{
        if(!user){
            axios.get('/user/fetchByToken').then((data)=>{
                setUser(data);
                setReady(true);
            })
        }
    },[user,ready]);
    console.log(user);
    return(
        <UserContext.Provider value ={{user,setUser,ready,setReady}}>
            {children}
        </UserContext.Provider>
    )
}