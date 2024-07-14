import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [method, setMethod] = useState('Sign Up');
  const [pincode, setPincode] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');

  const toggleMethod = () => {
    setMethod(prevMethod => (prevMethod === 'Login' ? 'Sign Up' : 'Login'));
  };

  const handlePincodeChange = (e) => {
    const pin = e.target.value;
    setPincode(pin);
    if (pin.length === 6) {
      // Example logic for auto-filling state and country based on PINCODE
      // This should be replaced with actual API logic
      if (pin.startsWith('11')) {
        setState('Delhi');
        setCountry('India');
      } else if (pin.startsWith('43')) {
        setState('Maharashtra');
        setCountry('India');
      } else if (pin.startsWith('42')) {
        setState('Maharashtra');
        setCountry('India');
      }else if (pin.startsWith('41')) {
        setState('Maharashtra');
        setCountry('India');
      }else if (pin.startsWith('44')) {
        setState('Maharashtra');
        setCountry('India');
      }else if (pin.startsWith('38')) {
        setState('Gujarat');
        setCountry('India');
      }else if (pin.startsWith('11')) {
        setState('Delhi');
        setCountry('India');
      }else {
        setState('Unknown');
        setCountry('Unknown');
      }
    } else {
      setState('');
      setCountry('');
    }
  };

  return (
    <>
      <div className="loginForm">
        <form className="Loginform-container">
          <h1 className="headingForm">{method === 'Login' ? 'Login Account' : 'Create a new account'}</h1>
          <div className="formBox">
            {method === 'Sign Up' && (
              <>
                <input type="text" placeholder="Enter your Full name here" />
                <div className="inputFileds">
                  <input type="number" placeholder="Enter Your Number here " />
                  <input
                    type="number"
                    placeholder="Enter City PINCODE"
                    value={pincode}
                    onChange={handlePincodeChange}
                  />
                </div>
                <input type="text" placeholder="Enter your Email Here" />
                <div className="inputFileds">
                  <input type="password" placeholder="Enter your Password Here" />
                  <input type="password" placeholder="Confirm your Password Here" />
                </div>
                <div className="inputFileds">
                  <input type="text" placeholder="Your State" value={state} readOnly />
                  <input type="text" placeholder="Country" value={country} readOnly />
                </div>
              </>
            )}
            {method === 'Login' && (
              <>
                <input id='Login-inputs' type="text" placeholder="Enter your Email Here" />
                <input id='Login-inputs' type="password" placeholder="Enter your Password Here" />
              </>
            )}
            <input type="submit" value={method === "Login" ? "Login" : "Create Account"} id="submit" />
          </div>
          <p>
            {method === 'Login' ? "Don't have an account?" : 'Already have an account?'}{' '}
            <span onClick={toggleMethod}>{method === 'Login' ? 'Sign Up' : 'Login'}</span>
          </p>
        </form>
        <div className="rightImg-login">
          <img width={"450px"} src="/authuntication.svg" alt="Error to load img" />
        </div>
      </div>
    </>
  );
}

export default Login;
