import { useState } from 'react'
import { useCookies} from 'react-cookie'

const Authentification = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const [isLogIn, setIsLogin] = useState(true)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [error, setError] = useState(null)

  const viewLogin = (status) => {
    setError(null)
    setIsLogin(status)
  }

  const handleSubmit = async (e, endpoint) => {
    e.preventDefault()
    if (!isLogIn && password !== confirmPassword) {
      setError('Make sure passwords match!')
      return
    }
    
    const response = await fetch(`http://localhost:8000/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({email, password})
    })

    const data = await response.json()

    if (data.detail) {
      setError(data.detail)
    } else {
      setCookie('Email', data.email)
      setCookie('AuthToken', data.token)

      window.location.reload()
    }

  }


  return (
    <div className="auth-container">
      <div className="auth-container-box" id='authen'>
        <form id='form'>
          <h1>{isLogIn  ? ' Log in !' : 'Sign up!'}</h1>
          <p> Enter Your Email</p>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          /> <br></br>
          <p> Enter Your Password</p>
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
         
          {!isLogIn && <div> 
            <p> confirm Your Password</p><input
            type="password"
            placeholder="confirm password"
            onChange={(e) =>setConfirmPassword(e.target.value)}
          /></div>
         }
          <br></br>
          <input type="submit" className="btn btn-hipster" id='btn' onClick={(e) => handleSubmit(e, isLogIn ? 'login' : 'signup')} />
          {error && <p>{error}</p>}
          
        </form>
        <br></br>
        <div className="auth-options">
          <button
            onClick={() => viewLogin(false)} className='btn btn-hipster' id='btnAut'
          >Sign Up</button>
       
          <button
            onClick={() => viewLogin(true)} className='btn btn-hipster' id='btnAut'
          >Login</button>
        </div>

      </div>
    </div>
  )
}

export default Authentification