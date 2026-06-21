import { useEffect, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const Auth = () => {
    const [authMode, setAuthMode] = useState("signup")
    const [userInput, setUserInput] = useState({
        email:"",
        password:""
    })
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const onChangeHandler = (e, inputField) => {
        setUserInput(prev => (
            {
                ...prev,
                [inputField]:e.target.value
            }
        ))

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validateForm(userInput))
        setIsSubmit(true)
    }

    const validateForm = (values) => {
        const errors = {}
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

        if (!values.email){
            errors.email = "Username is required"
        } else if (!emailRegex.test(values.email)){
            errors.email = "Please enter a valid email"
        }

        if (!values.password){
            errors.password = "Password is required"
        } else if(!passwordRegex.test(values.password)) {
            errors.password = "Password requires min 8 characters(at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character)"
        }

        return errors
    }

    useEffect(() => {
        console.log(formErrors)
        if (Object.keys(formErrors).length === 0 && isSubmit){
            console.log(userInput)
        }
    }, [formErrors])

    const switchAuth = () => {
        setAuthMode(prev => prev==="signup"?"login":"signup")
    }
    return ( 
        <div className="flex flex-col gap-8 bg-surface p-10 rounded-md items-start w-2/5">
            <div>
                <h1 className="text-2xl font-bold">{authMode === "signup"?"Signup":"Login"}</h1>
            </div>

            <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit} noValidate>
                <Input inputType="email" inputId="email" inputLable="Email" inputPlaceholder="Enter email" onChangeHandler={onChangeHandler} error={formErrors.email?formErrors.email:""}/>
                <Input inputType="password" inputId="password" inputLable="Password" inputPlaceholder="Enter Password" onChangeHandler={onChangeHandler}  error={formErrors.password?formErrors.password:""}/>
                <button type="submit" className="py-2 px-4 rounded-sm bg-primary hover:bg-secondary cursor-pointer">{authMode === "signup"?"Signup":"Login"}</button>
            </form>

            <div >
                <h2 className="text-sm">Already have an account? <span className="text-input-focus cursor-pointer" onClick={switchAuth}>{authMode === "signup"?"Login":"Signup"}</span></h2>
            </div>
        </div>
     );
}
 
export default Auth;