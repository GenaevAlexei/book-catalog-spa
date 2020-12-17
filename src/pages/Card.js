import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import {BookForm} from '../components/BookForm';
import {ChangeBookForm} from '../components/ChangeBookForm';
import {AlertSuccess} from '../components/AlertSuccess';

export const Card = () => {

  return(
    <Fragment>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link back-to-main"
                       to="/"
                       exact>
                &#8656; Назад на главную
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <AlertSuccess />
      <BookForm />
      <ChangeBookForm />
    </Fragment>
  )
}
