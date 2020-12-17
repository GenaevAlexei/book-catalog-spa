import React, {Fragment} from 'react';
import {Header} from '../components/Header';
import BookList from '../components/BookList';

export const Home = () => {

  return(
    <Fragment>
      <div className="App">
        <Header />
        <BookList />
      </div>
    </Fragment>
  )
}
