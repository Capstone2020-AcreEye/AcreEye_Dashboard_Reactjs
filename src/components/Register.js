import React from 'react'

const Register = () => {
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
                                <form className="user">
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0"><input className="form-control form-control-user" type="text" id="exampleFirstName" placeholder="First Name" name="first_name" /></div>
                                        <div className="col-sm-6"><input className="form-control form-control-user" type="text" id="exampleFirstName" placeholder="Last Name" name="last_name" /></div>
                                    </div>
                                    <div className="form-group"><input className="form-control form-control-user" type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Email Address" name="email" /></div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0"><input className="form-control form-control-user" type="password" id="examplePasswordInput" placeholder="Password" name="password" /></div>
                                        <div className="col-sm-6"><input className="form-control form-control-user" type="password" id="exampleRepeatPasswordInput" placeholder="Repeat Password" name="password_repeat" /></div>
                                    </div><button className="btn btn-primary btn-block text-white btn-user" type="submit" style={{ background: '#69a14a' }}>Register Account</button>
                                    <hr /><a className="btn btn-primary btn-block text-white btn-google btn-user" role="button"><i className="fab fa-google" />&nbsp; Register with Google</a><a className="btn btn-primary btn-block text-white btn-facebook btn-user" role="button"><i className="fab fa-facebook-f" />&nbsp; Register with Facebook</a>
                                    <hr />
                                </form>
                                <div className="text-center"><a className="small" href="forgot-password.html">Forgot Password?</a></div>
                                <div className="text-center"><a className="small" href="login.html">Already have an account? Login!</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register