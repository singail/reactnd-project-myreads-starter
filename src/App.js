import React from 'react';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import './App.css';
import BooksList from './BooksList';
import BooksSearch from './BooksSearch'

class BooksApp extends React.Component {

state = {
	books: []
}

componentDidMount() {
	this.updateBooks();
}

updateBooks = () => {
	BooksAPI.getAll().then((books) => 
		this.setState({books})
	)}

shelfType = (book, shelf) => {
	BooksAPI.update(book, shelf).then(this.updateBooks());
}

render() {
	
	return (
      <div className="app">
		<Route exact path='/search' render={() => (
			<BooksSearch books={this.state.books} shelfType={this.shelfType}/>
		)}/>
   		<Route exact path='/' render={() => (
		
			<BooksList books={this.state.books} shelfType={this.shelfType}/>		  						  
		)}/>	  
      </div>
    )
  }
}

export default BooksApp
