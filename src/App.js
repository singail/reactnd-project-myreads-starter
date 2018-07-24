import React from 'react';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './App.css';
import BooksList from './BooksList';
import BooksSearch from './BooksSearch'

class BooksApp extends React.Component {

state = {
	books: []
}

componentDidMount() {
	BooksAPI.getAll().then((books) => 
		this.setState({books})
	)
}

render() {
	
	return (
      <div className="app">
		<Route exact path='/search' render={() => (
			<BooksSearch />
		)}/>
   		<Route exact path='/' render={() => (
		
			<BooksList books={this.state.books}/>		  						  
		)}/>	  
      </div>
    )
  }
}

/*BooksApp.propTypes = {
	//add proptypes
	updateQuery: PropTypes.func.isRequired
}*/

export default BooksApp
