import axios from 'axios'
import { query } from "simple-graphql-query-builder"
import { routeApi } from '../../../setup/routes'
import cookie from 'js-cookie'

export const LOGIN_REQUEST = 'AUTH/LOGIN_REQUEST'
export const LOGIN_RESPONSE = 'AUTH/LOGIN_RESPONSE'
export const SET_USER = 'AUTH/SET_USER'
export const LOGOUT = 'LOGOUT'

export function register(userDetails) {
    return dispatch => {
        return axios.post(routeApi, query({
            operation: 'userSignup',
            variables: userDetails,
            fields: ['id', 'name', 'email']
        }))
    }
}

export function login(userCredentials, isLoading = true) {
    return dispatch => {
        dispatch({
            type: LOGIN_REQUEST,
            isLoading
        })

        return axios.post(routeApi, query({
            operation: 'userLogin',
            variables: userCredentials,
            fields: ['token', 'user { name, email, role}']
        })).then(response => {
            let error = ''
            if (response.data.errors && response.data.errors.length > 0) {
                error = response.data.errors[0].message
            } else if (response.data.data.userLogin.token !== '') {
                const token = response.data.data.userLogin.token
                const user = response.data.data.userLogin.user
                dispatch(setUser(token, user))
                loginSetUserLocalStorageAndCookie(token, user)
            }

            dispatch({
                type: LOGIN_RESPONSE,
                error
            })
        }).catch(error => {
            dispatch({
                type: LOGIN_RESPONSE,
                error: "Please try again"
            })
        })
    }
}
export function logout() {
    logoutUnsetUserLocalStorageAndCookie()
    dispatch({
        type: LOGOUT
    })
}

export function loginSetUserLocalStorageAndCookie(token, user) {
    window.localStorage.setItem('token', token)
    window.localStorage.setItem('user', JSON.stringify(user))

    cookie.set('auth', { token, user }, { path: '/' })
}

export function logoutUnsetUserLocalStorageAndCookie() {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('user',)

    cookie.remove('auth')
}

export function setUser(token, user) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        delete axios.defaults.headers.common['Authorization']
    }

    return { type: SET_USER, user }
}