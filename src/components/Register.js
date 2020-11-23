import React from 'react'
import {useField} from '../hooks/hooks'
import { useHistory, Link } from "react-router-dom";
import {auth, googleProvider} from '../firebase'

const Register = () => {

    const first_name = useField('text')
    const last_name = useField('text')
    const email = useField('email')
    const password = useField('password')
    const password_repeat = useField('password')
    const history = useHistory()

    const userRegister = (e) => {
        e.preventDefault()
        console.log(`user: ${email.value} password: ${password.value}`)
        auth.createUserWithEmailAndPassword(email.value, password.value)
        .then((authUser) => {
            authUser.user.updateProfile({
                displayName:first_name.value
            })
            first_name.value = ''
            last_name.value = ''
            email.value = ''
            password.value = ''
            password_repeat.value = ''
            history.push('/')
        })
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

        <div className="container">
            <div className="card shadow-lg o-hidden border-0 my-5">
                <div className="card-body p-0">
                    <div className="row">
                        <div className="col-lg-5 d-none d-lg-flex"><img className="img-fluid" src={`${process.env.PUBLIC_URL}/img/3.png`} style={{ background: '#69a14a' }} alt='register image'/></div>
                        <div className="col-lg-7">
                            <div className="p-5">
                                <div className="text-center">
                                    <h4 className="text-dark mb-4">Create an Account!</h4>
                                </div>
                                <form className="user" onSubmit={userRegister}>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0"><input className="form-control form-control-user" type={first_name.type} value={first_name.value} onChange={first_name.onChange} id="exampleFirstName" placeholder="First Name" name="first_name" /></div>
                                        <div className="col-sm-6"><input className="form-control form-control-user" type={last_name.type} value={last_name.value} onChange={last_name.onChange} id="exampleFirstName" placeholder="Last Name" name="last_name" /></div>
                                    </div>
                                    <div className="form-group"><input className="form-control form-control-user" type={email.type} value={email.value} onChange={email.onChange} id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Email Address" name="email" /></div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0"><input className="form-control form-control-user" type={password.type} value={password.value} onChange={password.onChange} id="examplePasswordInput" placeholder="Password" name="password" /></div>
                                        <div className="col-sm-6"><input className="form-control form-control-user" type={password_repeat.type} value={password_repeat.value} onChange={password_repeat.onChange} id="exampleRepeatPasswordInput" placeholder="Repeat Password" name="password_repeat" /></div>
                                    </div><button className="btn btn-primary btn-block text-white btn-user" type="submit" style={{ background: '#69a14a' }}>Register Account</button>
                                    <hr /><a className="btn btn-primary btn-block text-white btn-google btn-user" role="button" onClick={googleLogin}><i className="fab fa-google" />&nbsp; Register with Google</a><a className="btn btn-primary btn-block text-white btn-facebook btn-user" role="button"><i className="fab fa-facebook-f" />&nbsp; Register with Facebook</a>
                                    <hr />
                                </form>
                                <div className="text-center"><a className="small" href="forgot-password.html">Forgot Password?</a></div>
                                <div className="text-center"><Link to='/login' className="small">Already have an account? Login!</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register