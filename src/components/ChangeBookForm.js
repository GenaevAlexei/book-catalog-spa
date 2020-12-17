import React, {useState} from 'react';
import * as firebase from 'firebase';
import {useSelector, useDispatch} from 'react-redux';
import {deactivateChangeForm} from '../reduxApp/actions';

export const ChangeBookForm = () => {
  const dispatch = useDispatch();
  const changedBook = useSelector(state => state.changedBook);
  const activeChangeForm = useSelector(state => state.activeChangeForm);

  const [localState, setlocalState] = useState(changedBook);

  const changeData = () => {
    const db = firebase.default.database();
    const bookRef = db.ref('books/' + changedBook.uniqKey);
    bookRef.update({
      autor: localState.autor,
      title: localState.title,
      year:  localState.year,
      isbn:  localState.isbn,
    })
  }

  const submitHandler = (event) => {
    event.preventDefault()

    changeData()
    dispatch(deactivateChangeForm())
  }

  if(activeChangeForm){
    return(
      <form onSubmit={submitHandler}>
        <div className="container redact-title">
          <h3> Редактирование данных: </h3>
        </div>
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 placeholder="Название книги"
                 defaultValue={changedBook.title}
                 onChange={e => setlocalState({...localState, title: e.target.value})}
                 required
                 />
          <input type="text"
                 className="form-control"
                 placeholder="Автор"
                 defaultValue={changedBook.autor}
                 onChange={e => setlocalState({...localState, autor: e.target.value})}
                 required
                 />
          <input type="text"
                 className="form-control"
                 placeholder="Год издания"
                 defaultValue={changedBook.year}
                 onChange={e => setlocalState({...localState, year: e.target.value})}
                 required
                 />
          <input type="text"
                 className="form-control"
                 placeholder="ISBN"
                 defaultValue={changedBook.isbn}
                 onChange={e => setlocalState({...localState, isbn: e.target.value})}
                 required
                 />
        </div>
           <button type="submit">
               Отправить изменения
           </button>
      </form>
    )
  }else {
    return null
  }
}
