import { useEffect, useState } from "react"
import { backendURL } from "../App"

export const Login = () => {
    const [loginName, setLoginName] = useState("")
    const [password, setPassword] = useState("")
    const loginData = {
        name: loginName,
        password: password,
    }
    useEffect(() => {
        console.log(loginData)
    }, [password])

    const onLogin = () => {
        if(loginName && password) {
            fetch(`${backendURL}/login`)
            .then((response) => response.json())
            .then((data) => console.log(data));
        }
    }

    return(
        <section className="loginPage">
            <form className="loginContainer" action="">
                <label htmlFor="">Login</label>
                <input onChange={e => setLoginName(e.target.value)} type="text" />
                <label htmlFor="">Password</label>
                <input onChange={e => setPassword(e.target.value)} type="password" />
                <button onClick={onLogin} type="submit">Login</button>
            </form>
        </section>
    )
}