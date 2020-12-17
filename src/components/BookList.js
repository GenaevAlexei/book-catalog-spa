import React, {Component} from 'react';
import * as firebase from 'firebase';
import {NavLink} from 'react-router-dom';
import {BookItem} from './BookItem';
import {connect} from 'react-redux';

class BookList extends Component  {
  constructor(props){
    super(props);
    this.state = {
      isloaded: false,
      books: []
    }
  }

  componentDidMount(){
    const db = firebase.default.database();
    // console.log(db);
    const booksData = db.ref('books');

    booksData.on('value', (elem) => {
    // console.log(elem.val());
    let booksArr = [];
    for (var item in elem.val()) {
      if (elem.val().hasOwnProperty(item)) {
        let itemBook = {...elem.val()[item], uniqKey: item};

        booksArr.push(itemBook)
      }
    }
    this.setState({books: booksArr})
    // console.log(this.state);
    })
  }

  componentWillUnmount(){
    const db = firebase.default.database();
    const booksData = db.ref('books');
    booksData.off()
  }

  render(){
    console.log('hasAccountGlobal: ', this.props.hasAccountGlobal);

    if(this.state.books.length === 0){
      return(
        <div className="alert alert-warning" role="alert">
          loading...
        </div>
      )
    }
    return(
      <div>
        {this.props.hasAccountGlobal ?
          <div className="container add-book-wrapper">
            <NavLink className="nav-link add-book-link"
                     to="/card">
              Добавить книгу
            </NavLink>
          </div> : null
        }

        <ul className="list-group">
         {this.state.books.map((book, i) => (
           <li className="list-group-item"
               key={book.id = i + 1}>
               <BookItem book={book}/>
           </li>
         ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    hasAccountGlobal: state.hasAccountGlobal,
  }
}

export default connect(mapStateToProps)(BookList)
