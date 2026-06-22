import { createContext, useState, useContext } from "react";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    const [user, setUser] = useState(currentUser? {userName: currentUser.userName, email:currentUser.email}: null)

    const saveCurrentUser = (userName, email) =>{
        localStorage.setItem("currentUser", JSON.stringify({userName, email}))
    }

    const signUp = (userName, email, password) => {
        const users = JSON.parse(localStorage.getItem("users")) || []

        if (users.find(user => user.email === email)){
            return {success: false, error:"Email already exists. Please login."}
        }
        else {
            users.push({email: email, password:password, userName:userName})
        localStorage.setItem("users", JSON.stringify(users))
        saveCurrentUser(userName, email)
        return {success: true, error:null}
        }
    }

    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem("users")) || []
        
        const validUser = users.find(user => user.email === email && user.password === password)

        if (validUser){
            setUser({userName:validUser.userName, email:validUser.email})
            saveCurrentUser(validUser.userName, validUser.email)
            return {success: true, error:null}
        }
        else {
        
        return {success: false, error:"Invalid email or password!"}
        }

    }

    const logout = () => {
        localStorage.removeItem("currentUser");
        setUser(null)

    }

    return <AuthContext.Provider value={{signUp, login, logout, user}}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;

export const useAuth = () => {
    const context = useContext(AuthContext);

    return context;
}
