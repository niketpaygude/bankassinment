import React, { useState, useEffect,  Component} from "react";
//import classes from "./Login.css";
import classes from "./style_min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import { loginData } from "./login_data";
import ProfileListing from '../ProfileDetails/ProfileDetails';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router-dom';


const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isformsubmitted, setUserAuth] = useState('0');
  
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function logOut(event)
  {
    let history = "isfalse";
  }

  useEffect(() => {
    if (isformsubmitted === '1') {
      props.onSubmit(isformsubmitted);
    }
  }, [isformsubmitted, error]);

  function handleSubmit(event) {
    event.preventDefault();
    if (!email) {
      return setError('Username is required');
    }

    if (!password) {
      return setError('Password is required');
    }
    let itemFound = false;
    setError('');
    loginData.map((job) => {
      if (job.user === email && job.pwd === password) {
        setError('');
        itemFound = true;
      }
    });

    if (!itemFound) {
      return setError('Invalid Username and Password!');
    }
    if (!error) {
      setUserAuth('1');
      return setError('');
    }

  }

  if(error)
  {
    return (
      <div className={classes.contentsso} role="main">
              <div>
              <nav className={classes.topbar.clearfix}>
              <div className={classes.clearfix}>
                <a className={classes.topbarbrand} href="#">
                  <span className={classes.atosIconFont.atosIconFontlogo}></span>
                </a>
              </div>
            </nav>
            </div>

            <div className={classes.ssobox}>
                <form id="dataForm" onSubmit={logOut}> 
                      <h3>
                          <span className="atosIconFont atosIconFont-clock_dotted_arrow"></span> 
                          Authentication 
                          Unsuccessful

                        </h3>

                      <legend>Authenticator
                            <div className={classes.tooltipInfo} tabindex="0">
                                <span className={classes.icoInfo}>i</span>
                                <div>
                                </div>
                            </div>
                            <noscript>
                                <div class="tooltipWarn" tabindex="0">
                                    <span class="icoWarn">w</span>
                                    <div>
                                        <p>Your browser does not allow JavaScript for this page, thus some supportive controls are not available. Please, enable JavaScript to get the full functionality.</p>
                                    </div>
                                </div>
                            </noscript>
                        </legend>

                      <p style={{textAlign: 'center'}}>
                                You could not be authenticated successfully. Please, retry and ensure that the credentials that you provide are valid.
                      </p>

                      <fieldset>
                        <input type="hidden" name="com.siemens.dxa.applications.web.authn.selection.login.state" value="true"/>
                        <input type="submit" 
                        className={classes.btn} 
                        value="Retry"
                        onclick="logOut('dataForm', this)"/>                        
                      </fieldset>

                </form>        
            </div>  
      </div>
    ); 

  }
  return (
          <div className={classes.contentsso} role="main">
              <div>
              <nav className={classes.topbar.clearfix}>
              <div className={classes.clearfix}>
                <a className={classes.topbarbrand} href="#">
                  <span className={classes.atosIconFont.atosIconFontlogo}></span>
                </a>
              </div>
            </nav>
            </div>

            <div className={classes.ssobox}>
                <form id="dataForm" onSubmit={handleSubmit}> 
                      <h3>
                          <span className="atosIconFont atosIconFont-clock_dotted_arrow"></span> 
                          AUTH
                      </h3>

                      <legend>Authenticator
                            <div className={classes.tooltipInfo} tabindex="0">
                                <span className={classes.icoInfo}>i</span>
                                <div>
                                </div>
                            </div>
                            <noscript>
                                <div class="tooltipWarn" tabindex="0">
                                    <span class="icoWarn">w</span>
                                    <div>
                                        <p>Your browser does not allow JavaScript for this page, thus some supportive controls are not available. Please, enable JavaScript to get the full functionality.</p>
                                    </div>
                                </div>
                            </noscript>
                        </legend>

                      <p style={{textAlign: 'center'}}>
                                <u><a href="https://wac.das.myatos.net/portal/DAS_WAC_SSO_AUTH_User_Guide.pdf">AUTH User's Guide</a></u>
                      </p>

                      <fieldset>
                        <input type="hidden" name="com.siemens.dxa.applications.web.authn.selection.login.state" value="true"/>
                        <label>Email</label>
                        <input type="text" 
                        name="com.siemens.dxa.applications.web.authn.challenging.username" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autofocus/>
                        <label>Password</label>
                        <input type="password"
                         name="com.siemens.dxa.applications.web.authn.challenging.response"
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}
                        />
                        <input type="submit" className={classes.btn} value="Login" onclick="validateForm('dataForm', this)"/>
                      </fieldset>

                </form>        
            </div>  
            </div>
  );
}
export default Login