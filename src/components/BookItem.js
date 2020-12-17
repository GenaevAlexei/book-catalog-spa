import React from 'react';
import * as firebase from 'firebase';
import {NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {getDataToChange} from '../reduxApp/actions';
import {useSelector} from 'react-redux';

export const BookItem = ({book}) => {

  const dispatch = useDispatch();
  const hasAccountGlobal = useSelector(state => state.hasAccountGlobal);

  const removeBook = () => {
    const db = firebase.default.database();
    db.ref('books/' + book.uniqKey).remove();
  }

  return(
    <div className="book-item container">
      <div className="row row-cols-3">
        <div className="col">Название: {book.title}</div>
        <div className="col">Автор: {book.autor}</div>
        <div className="btn-container col">
        {hasAccountGlobal?
          <NavLink className="nav-link"
                   to="/card"
                   onClick={() => {dispatch(getDataToChange(book))}}
                   >
            Редактировать
          </NavLink> : null
        }
        </div>
        <div className="col">Год издания: {book.year}</div>
        <div className="col">ISBN: {book.isbn}</div>
        {hasAccountGlobal?
          <div className="btn-container col">
          <button type="button"
                  className="btn btn-outline-danger btn-sm"
                  onClick={removeBook}
                  >Удалить</button>
          </div> : null
        }
      </div>
    </div>
  )
}
