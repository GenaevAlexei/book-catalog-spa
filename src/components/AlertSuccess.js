import React from 'react';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {hideAlertSuccess} from '../reduxApp/actions';

export const AlertSuccess = () => {
  const dispatch = useDispatch();
  const showAlertSuccess = useSelector(state => state.showAlertSuccess);

  if (showAlertSuccess) {
    return(
      <div className="alert alert-success" role="alert">

          <span className="book-change-msg">
            Данные этой книги успешно изменены!
          </span>
          <NavLink className="nav-link"
                   to="/">
             <span className="book-change-msg" onClick={() => dispatch(hideAlertSuccess())}>
               Перейдите на главную страницу, чтобы увидеть список, или создайте новую книгу в форме ниже.
             </span>
          </NavLink>

        <button type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={() => dispatch(hideAlertSuccess())}></button>
      </div>
    )
  }else{
    return null
  }


}
