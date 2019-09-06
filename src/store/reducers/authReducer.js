const initState = {}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            console.log('create project', action.project)
            return state;
        case "LOGIN_ERROR":
            console.log('create project error', action.err)
            return state;
        default:
            return state;
    } 
}

export default authReducer