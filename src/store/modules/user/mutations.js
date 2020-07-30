export default {
    SET_USER(state, user) {
        state.user = user
    },
    AUTH_REQUEST: (state) => {
        state.status = "loading"
    },
    AUTH_SUCCESS: (state, { token, user }) => {
        state.status = "Success"
        state.token = token
        state.user = user
        state.isLoggedIn = true
    },
    REG_SUCCESS: (state) => {
        state.regSuccess = 'Registration was succesful'
    },
    REG_CLEAR: (state) => {
        state.regSuccess = ''
    },
    AUTH_ERROR: (state, errors) => {
        state.status = 'error'
        state.errors = errors
    },
    LOGOUT: (state) => {
        state.status = ''
        state.token = ''
    }
}