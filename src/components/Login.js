import React from 'react'
import {useField} from '../hooks/hooks'
import {auth, googleProvider} from '../firebase'
import { useHistory, Link } from "react-router-dom";



const Login = () => {

    const email = useField('email')
    const password = useField('password')
    const history = useHistory()

    const userLogin = (e) => {
        e.preventDefault()
        console.log(`user: ${email.value} password: ${password.value}`)
        auth.signInWithEmailAndPassword(email.value, password.value)
        .then(() => history.push('/'))
      .catch((error) => alert(error.message))
    }

    const googleLogin  = (e) => {
        auth.signInWithPopup(googleProvider)
        .then(result => {
            console.log('successfully logged in with google')
            history.push('/')
           console.log(result)
        })
        .catch(error => alert(error.message))

    } 


    return (
        <div>
            <div className="container" >
                <div className="row justify-content-center" >
                    <div className="col-md-9 col-lg-12 col-xl-10">
                        <div className="card shadow-lg o-hidden border-0 my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-flex"><img className="img-fluid" src={`${process.env.PUBLIC_URL}/img/2.png`} style={{ background: '#69a14a' }} /></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h4 className="text-dark mb-4">Welcome Back!</h4>
                                            </div>
                                            <form className="user" onSubmit={userLogin}>
                                                <div className="form-group"><input className="form-control form-control-user" type={email.type} onChange={email.onChange} value={email.value} id="exampleInputEmail" placeholder="Enter Email Address..." name="email" /></div>
                                                <div className="form-group"><input className="form-control form-control-user" type={password.type} onChange={password.onChange} value={password.value} id="exampleInputPassword" placeholder="Password" name="password" /></div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <div className="form-check"><input className="form-check-input custom-control-input" type="checkbox" id="formCheck-1" /><label className="form-check-label custom-control-label" htmlFor="formCheck-1">Remember Me</label></div>
                                                    </div>
                                                </div><button className="btn btn-primary btn-block text-white btn-user" type="submit" style={{ background: '#69a14a' }}>Login</button>
                                                <hr></hr><a className="btn btn-primary btn-block text-white btn-google btn-user" role="button" onClick={googleLogin}><i className="fab fa-google" />&nbsp; Login with Google</a><a className="btn btn-primary btn-block text-white btn-facebook btn-user" role="button"><i className="fab fa-facebook-f" />&nbsp; Login with Facebook</a>
                                                <hr></hr>
                                            </form>
                                            <div className="text-center"><a className="small" href="forgot-password.html">Forgot Password?</a></div>
                                            <div className="text-center"><Link to='/register' className="small">Create an Account!</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login