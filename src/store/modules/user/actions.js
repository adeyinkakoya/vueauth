import { api } from '../../../api/base'
import $router from '../../../router'
export default {
    loginUser: (context, user) => {
        context.commit('AUTH_REQUEST')
        api.get('csrf-cookie').then(() => {
            api.post('login', user)
                .then(resp => {
                    console.log(resp);
                    //const user = resp.data.user
                    const token = resp.data.token
                    if (token) {
                        localStorage.setItem('token', token)
                        api.defaults.headers.common['Authorization'] = token
                    }
                    //context.commit('AUTH_SUCCESS', { token, user })
                    //context.commit('REG_SUCCESS')

                })
                //.then(() => { $router.push('/') })
                .catch(err => {
                    console.log(err);
                    context.commit('AUTH_ERROR', err.response.data.errors)
                    localStorage.removeItem('token')
                })
        })
    },
    registerUser: (context, registerData) => {
        context.commit('AUTH_REQUEST')
        api.get('csrf-cookie').then(() => {
            api.post('register', registerData)
                .then(resp => {
                    //const user = resp.data.user
                    const token = resp.data.token
                    if (token) {
                        localStorage.setItem('token', token)
                        api.defaults.headers.common['Authorization'] = token
                    }
                    //context.commit('AUTH_SUCCESS', { token, user })
                    context.commit('REG_SUCCESS', resp.statusText)

                })
                //.then(() => { $router.push('/') })
                .catch(err => {
                    console.log(err);
                    context.commit('AUTH_ERROR', err.response.data.errors)
                    localStorage.removeItem('token')
                })
        })

    },
    logoutUser: (context) => {
        context.commit('LOGOUT')
            .then(() => {
                $router.push('/login')
            })
        localStorage.removeItem('token')
        delete api.defaults.headers.common['Authorization']
    }

}