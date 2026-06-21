import { createContext, useState } from "react";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const currentUser = localStorage.getItem("currentUserEmail")
    const [user, setUser] = useState(currentUser? {email:currentUser}: null)

    const signUp = (email, password) => {
        const users = JSON.parse(localStorage.getItem("users")) || []

        if (users.find(user => user.email === email)){
            return {success: false, error:"Email already exists. Please login."}
        }
        else {
            users.push({email: email, password:password})
        localStorage.setItem("users", JSON.stringify(users))
        return {success: true, error:null}
        }
    }

    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem("users")) || []

        if (users.find(user => user.email === email && user.password === password)){
            setUser({email})
            localStorage.setItem("currentUserEmail", email)
            return {success: true, error:null}
        }
        else {
        
        return {success: false, error:"Invalid email or password!"}
        }

    }

    const logout = () => {
        localStorage.removeItem("currentUseEmail");
        setUser(null)

    }

    return <AuthContext.Provider value={{signUp, login, logout, user}}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;