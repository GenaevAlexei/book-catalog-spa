import {CREATE_BOOK, GET_REDACTION_FORM,
        DEACTIVATE_CHANGE_FORM, HIDE_ALERT_SUCCESS,
        SIGN_IN, SIGN_OUT, WILL_CREATE_ACCOUNT,
        WILL_SIGN_IN} from './types';

export const createBook = () => {
  return{
    type: CREATE_BOOK,
    payload: {
      tets: 'payload'
    }
  }
}

export const getDataToChange = (data) => {
  return{
    type: GET_REDACTION_FORM,
    payload: data,
  }
}

export const deactivateChangeForm = () => {
  return{
    type: DEACTIVATE_CHANGE_FORM,
  }
}

export const hideAlertSuccess = () => {
  return{
    type: HIDE_ALERT_SUCCESS,
  }
}

export const signIn = (email) => {
  return{
    type: SIGN_IN,
    payload: email,
  }
}

export const signOut = () => {
  return{
    type: SIGN_OUT,
  }
}

export const willCreateAccount = () => {
  return{
    type: WILL_CREATE_ACCOUNT,
  }
}

export const willSignIn = () => {
  return{
    type: WILL_SIGN_IN,
  }
}
