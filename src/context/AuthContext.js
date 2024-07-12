import createDataContext from './createDataContext'; 
import trackerApi from '../utilities/dbApi'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { navigationRef } from '../utilities/navigationRef';

const authReducer = (state, action) => { 
    switch (action.type) {
        case 'signin': 
            return { errorMessage: '', token: action.payload } 
        case 'signup': 
            return { errorMessage: '', token: action.payload } 
        case 'add_error': 
            return { ...state, errorMessage: action.payload } 
        case 'clear_err_msg': 
            return { ...state, errorMessage: '' }
        case 'signout': 
            return { token: null, errorMessage: '' }
        default: 
            return state; 
    }
}; 

const tryLocalSignIn = (dispatch) => async () => { 
    const token = await AsyncStorage.getItem('token'); 
    if (token) {
        dispatch({ type: 'signin', payload: token }); 
        navigationRef.navigate('MainTab');
    } else {
        navigationRef.navigate('Onboarding');   
    }; 
} 

const signin = (dispatch) => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signin', { email, password }); 
            await AsyncStorage.setItem('token', response.data.token); 
            dispatch({ type: 'signin', payload: response.data.token }); 
            navigationRef.navigate('MainTab'); 
        } catch (err) {
            dispatch({ type: 'add_error', payload: 'Sign in failed' }) 
        }
    } 
} 

const clearErrorMessage = (dispatch) => () => { 
    dispatch({ type: 'clear_err_msg' }); 
} 

const signup = (dispatch) => {
    return async ({ email, password }) => { 
        try {
            const response = await trackerApi.post('/signup', { email, password }) 
            await AsyncStorage.setItem('token', response.data.token); 
            dispatch({ type: 'signup', payload: response.data.token }); 
            navigationRef.navigate('MainTab'); 
        } catch (err) {
            dispatch({ type: 'add_error', payload: 'Sign up failed' })
        } 

        
    } 
} 

const signout = (dispatch) => {
    return async () => {
        await AsyncStorage.removeItem('token'); 
        dispatch({ type: 'signout' }); 
        navigationRef.navigate('AuthStack'); 
    } 
} 

export const { Provider, Context } = createDataContext(
    authReducer, 
    { signup, signin, signout, clearErrorMessage, tryLocalSignIn }, 
    { token: null, errorMessage: '' } 
); 