import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL} from './types'
import {AsyncStorage} from 'react-native'
import * as Facebook from 'expo-facebook'

export const facebookLogin = () => {
    return async (dispatch) =>  {
        let token = await AsyncStorage.getItem('fb_token')
        if (token) {
            dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token})
        } else {
            doFacebookLogin(dispatch)
        }
    }
}

doFacebookLogin = async(dispatch) => {
    let {type, token} = await Facebook.logInWithReadPermissionsAsync('369111150451069', {
        permissions : ['public_profile']
    })

    if (type == 'cancel') {
        dispatch({ type: FACEBOOK_LOGIN_FAIL})
    } else {
        await AsyncStorage.setItem('fb_token', token)
        dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token})
    }
}