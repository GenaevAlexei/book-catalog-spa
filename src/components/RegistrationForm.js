import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as firebase from 'firebase';
import {willSignIn, signIn} from '../reduxApp/actions';

export const RegistrationForm = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    registration: false,
  })

  const dispatch = useDispatch();
  const regActive = useSelector(state => state.regActive);
  const hasAccountGlobal = useSelector(state => state.hasAccountGlobal);

  const createAccount = () => {
    const {email, password} = user;

    firebase.default.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        dispatch(signIn())
      })
      .catch((error) => {console.log(error)
                          alert('Ошибка! Попробуйте еще раз.')})
  }

  const regSubmitHandler = (e) => {
    e.preventDefault()

    const contains = /@/i.test(user.email);

    if(user.password.length < 6){
      alert('Пароль должен быть длиннее шести знаков!')
    }else if(user.email.length < 5 || !contains ){
      alert('Неверный формат Email')
    }else{
      createAccount()
    }

    setUser({
      email:'',
      password: '',
    })
  }

  const needAuthHandler = () => {
    dispatch(willSignIn())
  }

  if(regActive && hasAccountGlobal === false){
    return(
      <div className="container auth-wrapper">
        <form onSubmit={regSubmitHandler}>
          <div className="form-group">
            <input type="text"
                   className="form-control"
                   placeholder="Email"
                   value={user.email}
                   onChange={e => setUser({...user, email: e.target.value})}
                   required
                   />
            <input type="password"
                   className="form-control"
                   placeholder="Password"
                   value={user.password}
                   onChange={e => setUser({...user, password: e.target.value})}
                   required
                   />
          </div>
          <button type="submit"
                  className="btn btn-outline-success">
            Создать аккаунт
          </button>
        </form>
        <div className="container">
          <span className="buttonToRegistration" onClick={needAuthHandler}>
            Или войти в существующий аккаунт.
          </span>
        </div>
      </div>
    )
  }
  else{
    return null
  }
}
