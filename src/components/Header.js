import React from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AuthForm} from './AuthForm';
import {RegistrationForm} from '../components/RegistrationForm';

export const Header = () => {
  const hasAccountGlobal = useSelector(state => state.hasAccountGlobal);

  return(
    <div className="navbar-wrapper">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid menu-wrapper">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="navbar-brand nav-link"
                       to="/"
                       exact>
                Book Catalog
              </NavLink>
            </li>
          </ul>
          <AuthForm />
          <RegistrationForm />
        </div>
      </nav>
      {!hasAccountGlobal ? 
        <div className="warning-reg-wrapper">
          <span className="warning-reg">
            Чтобы редактировать список необходимо авторизоваться.
          </span>
        </div> : null}
    </div>
  )
}
