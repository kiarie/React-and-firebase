
var authentication = {
    signupEmailAndPass: function (email, password) {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
    },
    singInEmailAndPass: function (email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password)
    },
    signOut: function () {
        return firebase.auth().signOut();
    },
    sendEmailVerification: function (actionCodeSettings) {
        var user = firebase.auth().currentUser;
        return user.sendEmailVerification(actionCodeSettings);
    }
}

export default authentication 