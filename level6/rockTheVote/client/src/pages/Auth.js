import React, {useState} from 'react'

const initInputs = {username: "", password: ""}

export default function Auth() {
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSignup(e){
        e.preventdefault()
    }

    function handleLogin(e){
        e.preventdefault()
    }

  return (
    <div className="auth-container">
        <h1>Rock The Vote</h1>
        { !toggle ?
        <>
        <AuthoForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            inputs={inputs}
            btnText="Sign up"
            />
            <p onClick={() => setToggle(prev => !prev)}>Already a member?</p>
        </>
    :
        <>
            <AuthForm
                handleChange={handleChange}
                handleSubmit={handleLogin}
                inputs={inputs}
                btnText="Login"
            />
            <p onClick={()}
        
        </>
    }
    </div>
  )
}
