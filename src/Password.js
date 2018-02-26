import React from 'react';

class Password extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: null,
            passwordRegxp: /[A-za-z0-9_!@#$%^&*()><?]+$/,
            validpassword: true
        }
    }
    validpassword(e) {
        if (this.state.passwordRegxp.test(e.target.value)) {
            this.setState({
                password: e.target.value,
                validpassword: true
            })
            this.props.passwordIsValid(e.target.value)
        } else {
            this.setState({ validpassword: false });
            this.props.passwordIsValid(false);            
        }
    }
    render() {
        var passwordClass = (!this.state.validpassword) ? this.props.className+' error' : this.props.className;
        var placeholder = this.props.placeholder;
        return (
            <input type="password" onBlur={(e) => this.validpassword(e)} className={passwordClass} placeholder={(placeholder)?placeholder:"Password"} />
        )
    }
}
export default Password;