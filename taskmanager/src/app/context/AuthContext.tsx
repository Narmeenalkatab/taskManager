'use client';
import {createContext, useContext, useState,ReactNode, Children} from 'react'

interface AuthContextType{
    user: string | null;
    login: (email:string) => void;
    logout: ()=> void;

}

const AuthContext = createContext <AuthContextType|undefined> (undefined);

export const AuthProvider = ({Children}: {Children: ReactNode})=>{
    const [user, setUser] = useState<string | null> (null);

const login= (email:string)=>{
    setUser(email);
};
const logout =()=>{
    setUser(null);
};
return(
    < AuthContext.Provider value={{user,login,logout}}>
    {Children}
    </AuthContext.Provider>
);
};

export const useAuth= ()=>{
const context =useContext(AuthContext);
if (!context){
    throw new Error ('useAuth must be used within an AuthProvider');
}
return context;
}

