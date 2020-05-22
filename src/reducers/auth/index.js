import React from 'react';
import AsyncStorage from "@react-native-community/async-storage"
import configureStore from './../../store/index';

let {store} = configureStore()
import {
    fetchUserData
} from '../features/profile/action';

export const isAuth = async () => {
    try {
      const value = await AsyncStorage.getItem('login');
      if (value && value !== null) {
            // We have data!!
        console.log(value);
        return true
      }
      return false
    } catch (error) {
          // Error retrieving data
      console.log("Error retrieving data ",error)
    }
}

export const setToken = async (res) => {
     unsetToken();

   await AsyncStorage.multiSet([['token', res.token],['email', res.email],['message', res.message], ['login', 'true'], ['firstTimeUser', "false"]], (err) => {
    //to do something
    console.log("callback:.",err)
   });
   store.dispatch(fetchUserData('JWT ' + res.token))
        .then((res) => {
            //console.log("fetch setToken: res: ",res)
        })
        .catch((err) => {
            console.log("After sigin out err: ",err)
        })
    store.dispatch({
        type: 'SET_TOKEN_DATA',
        payload: res
    })
}


export const unsetToken = async () => {
       let keys = ['token', 'email', 'message', 'login'];
        await AsyncStorage.multiRemove(keys, (err) => {
            console.log("unset callback:.",err)
        });
}

export const signOut = async () => {
    unsetToken()
    // console.log("in Utils auth!!!");
    // to support logging out from all windows
    // await AsyncStorage.setItem('logout', new Date())
   console.log("Utils auth!!! loging out at ",Date.now())
   return "loging out at ",Date.now()
}