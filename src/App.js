import React from 'react';
import authentication from './auth';
import views from './views';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: undefined,
            password: undefined,
            user: props.user,
            verificationEmailSent: false,
            signIn: true
        }
        this.auth = authentication;
        this.LoginScreen = views.LoginScreen.bind(this);
        this.SignUpView = views.SignUpView.bind(this);
        this.signInView = views.signInView.bind(this);
    }
    createUser(e) {
        e.preventDefault();
        if (this.state.email != false && this.state.password != false && this.state.confirmationPassword != false) {
            return this.auth.signupEmailAndPass(this.state.email, this.state.password).catch((error) => alert(error.message))
        }
        return false;
    }
    sendEmailVerification(e) {
        e.preventDefault();
        var _this = this;

        var actionCodeSettings = {
            url: (window.location.host == 'localhost')?'http://localhost:5004/':'https://my-first-fire-project-17b20.firebaseapp.com/',
            handleCodeInApp: false
        };
        this.auth.sendEmailVerification(actionCodeSettings).then(function () {
            _this.setState({ verificationEmailSent: true })
        }).catch(function (error) {
            console.log(error)
            _this.setState({ verificationEmailSent: false })
        });
    }
    validMail(email) {
        this.setState({ email: email })
    }
    validPass(password) {
        this.setState({ password: password })
    }
    validConfirmPass(password) {
        if (password != this.state.password) {
            this.setState({ confirmationPassword: false })
        }
    }
    redirectToSignUp(e) {
        e.preventDefault();
        this.setState({ signIn: false })
    }
    redirectToSignIn(e) {
        e.preventDefault();
        this.setState({ signIn: true })
    }
    signIn(e){
        e.preventDefault();
        this.auth.singInEmailAndPass(this.state.email, this.state.password).catch((error)=>{
            alert(error.message);
        })
    }
    signOut(e) {
        e.preventDefault();
        this.auth.signOut().then(()=>this.setState({signIn: true})).catch((error) => {
            alert(error.message);
        });
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.user != nextProps.user) {
            this.setState({ user: nextProps.user })
        }
    }
    renderMethod() {
        if (this.props.user != null || this.props.user != undefined) {
            return this.LoginScreen();
        } else {
            return (this.state.signIn) ? this.signInView() : this.SignUpView();
        }
    }
    render() {
        return this.renderMethod();
    }

}
export default App;

