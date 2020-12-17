import React, {useState} from 'react';
import * as firebase from 'firebase';
import {useSelector} from 'react-redux';

export const BookForm = () => {
  const [bookObj, setBookObj] = useState({
    title: '',
    autor: '',
    year: '',
    isbn: ''
  });

  const activeChangeForm = useSelector(state => state.activeChangeForm);

  const sendData = () => {
    const db = firebase.default.database();
    db.ref('books').push(bookObj)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    console.log(bookObj);
    sendData()
    setBookObj({
      title: '',
      autor: '',
      year: '',
      isbn: ''
    })
  }

  if (!activeChangeForm) {
    return(
      <form onSubmit={submitHandler}>
        <div className="container redact-title">
          <h3> Добавление новой книги: </h3>
        </div>
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 placeholder="Название книги"
                 value={bookObj.title}
                 onChange={e => setBookObj({...bookObj, title: e.target.value})}
                 required
                 />
          <input type="text"
                 className="form-control"
                 placeholder="Автор"
                 value={bookObj.autor}
                 onChange={e => setBookObj({...bookObj, autor: e.target.value})}
                 required
                 />
          <input type="text"
                 className="form-control"
                 placeholder="Год издания"
                 value={bookObj.year}
                 onChange={e => setBookObj({...bookObj, year: e.target.value})}
                 required
                 />
          <input type="text"
                 className="form-control"
                 placeholder="ISBN"
                 value={bookObj.isbn}
                 onChange={e => setBookObj({...bookObj, isbn: e.target.value})}
                 required
                 />
        </div>
        <button type="submit">Создать</button>
      </form>
    )
  }else{
    return null
  }


}
