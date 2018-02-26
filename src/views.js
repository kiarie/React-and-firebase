import React from 'react';
import Email from './Email';
import Password from './Password';
function Verified(props) {
    if (props.isEmailVerified) {
        return 'Go AHead';
    } else {
        return (<button
            className="btn btn-lg"
            type="button"
            onClick={(e) => { props.sendEmailVerification(e) }}>
            Verify Email </button>)
    }
}
function Alert(props) {
    return <div className="alert alert-success">{props.message}</div>
}
var views = {
    LoginScreen: function () {
        var verificationEmailSent = this.state.verificationEmailSent;
        var displayName = this.state.user.displayName;
        return (<div className="panel panel-default" style={{ width: '100%' }}>
            <div className="panel-body">
                <div className="text-right"><a onClick={(e) => { this.signOut(e) }}>Logout</a></div>
                <div className="text-center">
                    <h2>Welcome {displayName ? displayName : ''}!</h2>
                    {verificationEmailSent ? (<Alert message="Verification Mail sent!" />) : (
                        <div><Alert message="You Have Successfully Signed In!" />
                            <Verified isEmailVerified={this.state.user.emailVerified} sendEmailVerification={(e) => this.sendEmailVerification(e)} />
                        </div>
                    )}
                </div>
            </div>
        </div>)
    },
    SignUpView: function () {
        return (
            <div className="panel panel-default">
                <div className="text-center">
                    <h2>FireBase Login</h2>
                    <p>SIGN UP</p>
                </div>
                <form onSubmit={(e) => this.createUser(e)}>
                    <div className="form-group">
                        <Email className='form-control' emailIsValid={(email) => this.validMail(email)} />
                    </div>
                    <div className="form-group">
                        <Password className='form-control' passwordIsValid={(pass) => this.validPass(pass)} />
                    </div>
                    <div className="form-group">
                        <Password className='form-control' passwordIsValid={(pass) => this.validConfirmPass(pass)} placeholder="Confirm Password" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-lg" type="submit"> SIGN UP </button>
                    </div>
                    <div className="form-group" style={{ textAlign: 'right' }}>
                        Already Have an Account? <a href="#" onClick={(e) => this.redirectToSignIn(e)}>Sign In</a>
                    </div>
                </form>
            </div>
        )
    },
    signInView: function () {
        return (
            <div className="panel panel-default">
                <div className="text-center">
                    <h2>FireBase Login</h2>
                    <p>SIGN IN</p>
                </div>
                <form onSubmit={(e) => this.signIn(e)}>
                    <div className="form-group">
                        <Email className='form-control' emailIsValid={(email) => this.validMail(email)} />
                    </div>
                    <div className="form-group">
                        <Password className='form-control' passwordIsValid={(pass) => this.validPass(pass)} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-lg" type="submit"> SIGN IN </button>
                    </div>
                    <div className="form-group" style={{ textAlign: 'right' }}>
                        New Here? <a href="#" onClick={(e) => this.redirectToSignUp(e)}>Sign Up</a>
                    </div>
                </form>
            </div>
        )

    }

}
export default views;