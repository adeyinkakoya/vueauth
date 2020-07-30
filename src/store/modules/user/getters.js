export default {
    currentUser: (state) => {
        return state.user
    },
    errors: (state) => {
        return state.errors
    },
    regSuccess: (state) => {
        return state.regSuccess
    },
    isLoggedIn: (state) => {
        return !!state.token // returns token state as a  boolean value( true of false).True if it has value and false if it has no value.
    }

}