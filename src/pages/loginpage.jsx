import { useContext, useEffect, useState } from "react"
import { backendURL } from "../App"
import { AppContext } from "../global/useContext"

export const Login = () => {
    const {setToken} = useContext(AppContext)
    const [loginName, setLoginName] = useState("")
    const [password, setPassword] = useState("")
    const loginData = {
        username: loginName,
        password: password,
    }
    useEffect(() => {
        console.log("loginData", loginData)
    }, [password])

    const onLogin = async (e) => {
        e.preventDefault()
        if(loginName && password) {
            const res = await fetch(`${backendURL}/login`, {
                method: 'post',
                withCredentials: true,
          
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
              })
          
              const resData = await res.json()
              console.log('resData', resData)
              setToken(resData.auth)
              // setUserData(resData.userData)
              // saveInLocalStorage('auth', resData.auth)
              // saveInLocalStorage('user', resData.userData)
              // res.status === 200 && navigate('/dashboard', { replace: true })
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