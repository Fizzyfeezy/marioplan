import firebase from 'firebase/app';

export const signIn = (credentials) => {
    return (dispatch, getState) => {
        //make async call to database
        //const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS'});
        }).catch((err) => {
            dispatch({type: "LOGIN_ERROR", err});
        }) 
    }
}