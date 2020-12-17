import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as firebase from 'firebase';
import {signIn, signOut, willCreateAccount} from '../reduxApp/actions';

export const AuthForm = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const dispatch = useDispatch();
  const regActive = useSelector(state => state.regActive);
  const hasAccountGlobal = useSelector(state => state.hasAccountGlobal);
  const userEmailGlobal = useSelector(state => state.email);

  const writeLogin = () => {
    const {email, password} = user;

    firebase.default.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch(signIn())
      })
      .catch((error) => {if(error.code === 'auth/user-not-found'){
            alert('Нет такого аккаунта! Возможно надо его создать!')
          }
        });
  }

  const authSubmitHandler = (e) => {
    e.preventDefault()

    const contains = /@/i.test(user.email);

    if(user.password.length < 6){
      alert('Пароль должен быть длиннее шести знаков!')
    }else if(user.email.length < 5 || !contains ){
      alert('Неверный формат Email')
    }else{
      writeLogin()
    }

    setUser({
      email: '',
      password: '',
    })
  }

  const needRegHandler = () => {
    dispatch(willCreateAccount())
  }

  const userOutHandler = () => {
    firebase.default.auth().signOut()
      .then(() => {dispatch(signOut())})
      .catch((error) => {console.log(error)})
  }

 if(regActive){
   return null
 }else if(hasAccountGlobal){
   return <div className="container">
            Вход выполнен: <br/>
            <span slassName="user-name">
              {userEmailGlobal}
              <button type="button"
                      className="user-out"
                      onClick={userOutHandler}>
                Выйти
              </button>
            </span>
          </div>
 }else{
   return(
     <div className="container auth-wrapper">
       <form onSubmit={authSubmitHandler}>
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
                 className="btn btn-outline-success"
                 >
           Войти
         </button>
       </form>
       <div className="container">
         <span className="buttonToRegistration" onClick={needRegHandler}>
           Или создать аккаунт
         </span>
       </div>
     </div>
   )
 }
}
