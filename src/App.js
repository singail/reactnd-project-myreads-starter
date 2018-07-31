import React from 'react';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import './App.css';
import BooksList from './BooksList';
import BooksSearch from './BooksSearch'

/*The app that contains two children*/
class BooksApp extends React.Component {

	state = {
		books: []
	}

/*This function is invoked as soon as the component is mounted*/
	componentDidMount() {
		this.updateBooks();
	}

	updateBooks = () => {
		BooksAPI.getAll().then((books) => 
			this.setState({books})
		)
	}

/*Get the books for the correct shelf*/
	shelfType = (book, shelf) => {
		BooksAPI.update(book, shelf)
			.then(this.updateBooks());
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
