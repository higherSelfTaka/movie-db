import React,{useState, useEffect} from 'react'
import './LoginScreen.css'
import logo1 from '../assets/logo1.png'
import SignupScreen from './SignupScreen';

function LoginScreen() {

const [signIn, setSignIn] = useState(false);


  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
       <img 
       className="loginScreen__logo"
       src={logo1} alt=""/>
       <button 
       onClick={()=>setSignIn(true)}
       className="logoinScreen__button">
        Sign In
       </button>


       <div className="loginScreen__gradient"/>

      </div>


      <div className="loginScreen__body">
       {signIn ? (
          <SignupScreen/>
       ):(
       <>
        <h1>Video resources for survivor's soul and spiritual sanity. </h1>
        <h2>Watch anywhere when you need it, cancel anytime. </h2>
        <h3>Ready to watch? Enter your email to create and restart your membership </h3>
       
        <div className="loginScreen__input">
            <form>
                <input 
                type="email"
                placeholder="Email Address"/>
                <button
                
                
                onClick={()=>setSignIn(true)}
                className="loginScreen__getStarted"
                >Get Started</button>
            </form>
        </div>
        </>
       )}

        
      </div>

    </div>
  )
}

export default LoginScreen
