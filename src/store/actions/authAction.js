export const createProject = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        //make async call to database
        const firestore = getFirebase();
        firestore.auth().signInWithEmailPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS'});
        }).catch((err) => {
            dispatch({type: "LOGIN_ERROR", err});
        }) 
    }
}