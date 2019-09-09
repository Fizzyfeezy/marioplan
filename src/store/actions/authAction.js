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

export const signOut = () => {
    return (dispatch, getState) => {
        firebase.auth().signOut().then(() => {
            dispatch({type: 'SIGNOUT_SUCCESS'});
        } )
    }
}

export const signUp = (newUser) => {
    return (dispatch, getstate, {getFirestore}) => {
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
            firstname: newUser.firstname,
            lastname: newUser.lastname,
            phonenumber : newUser.phonenumber,
            gender : newUser.gender,
            confirmpassword : newUser.confirmpassword,
            initials: newUser.firstname[0] + newUser.lastname[0]
            })
        }).then(() => {
            dispatch({type: 'SIGNUP_SUCCESS'});
        }).catch((err) => {
            dispatch({type: 'SIGNUP_ERROR', err});
        })
    }
}