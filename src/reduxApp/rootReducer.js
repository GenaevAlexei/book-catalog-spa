import {CREATE_BOOK, GET_REDACTION_FORM,
        DEACTIVATE_CHANGE_FORM, HIDE_ALERT_SUCCESS,
        SIGN_IN, SIGN_OUT, WILL_CREATE_ACCOUNT,
        WILL_SIGN_IN} from './types';

const initialState =
  {
    hiddenForm: false,
    activeChangeForm: false,
    showAlertSuccess: false,
    hasAccountGlobal: false,
    regActive: false,
    email: '',
    veriError: null,
  }
;

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {...state, ...{hasAccountGlobal: true,
                            email: action.payload,
                            regActive: false,}};
    case SIGN_OUT:
      return {...state, ...{hasAccountGlobal: false,
                            email: '',}};
    case WILL_CREATE_ACCOUNT:
      return {...state, regActive: true };
    case WILL_SIGN_IN:
      return {...state, regActive: false };
    case CREATE_BOOK:
      return {...state, created: true};
    case GET_REDACTION_FORM:
      return {...state, ...{changedBook: action.payload,
                            activeChangeForm: true}};
    case DEACTIVATE_CHANGE_FORM:
      return {...state, ...{activeChangeForm: false,
                            showAlertSuccess: true}};
    case HIDE_ALERT_SUCCESS:
      return {...state, showAlertSuccess: false};
    default:
      return state;
  }
}
