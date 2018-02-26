import React from 'react';
function ErrorLabel(props) {
    return (!props.validity) ? <span style={{ color: "red" }}>Not A Valid Email</span> : <p>Ok</p>;
}
class Email extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            emailRegxp: /[A-za-z0-9_%.]+@[A-Za-z0-9.-]+\.[A-z.]{2,3}$/,
            isValidEmail: true
        }
    }
    validEmail(e) {
        if (this.state.emailRegxp.test(e.target.value)) {
            this.setState({
                email: e.target.value,
                isValidEmail: true
            })
            this.props.emailIsValid(e.target.value)
        } else {
            this.setState({ isValidEmail: false });
            this.props.emailIsValid(false)            
        }
    }
    render() {
        var emailClass = (!this.state.isValidEmail) ? this.props.className+' error' : this.props.className;
        return (
            <input type="email" onBlur={(e) => this.validEmail(e)} className={emailClass} placeholder="Email Address" />
        )
    }
}
export default Email;