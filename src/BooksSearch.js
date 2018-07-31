import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import escapeRegExp from 'escape-string-regexp';
import Book from './Book'

class BooksSearch extends Component {
	  state = {
		query: '',
    	searchedBooks: []
  	}

	updateQuery = (query) => {
		this.setState({query: query});
		if (query) {
			this.findBooks(query);
		} else {
			this.setState({searchedBooks: []})
		}
		
	}
	
	findBooks = (query) => {
		BooksAPI.search(query).then((books) => {
		if (books.error) {
		this.setState({searchedBooks: []});
	} else {
		this.setState({searchedBooks: books});
	}
		})}
														
	render() {
		
		return (
		<div className="search-books">
            <div className="search-books-bar">
				 <Link to='/' className="close-search">Close</Link>
				  <div className="search-books-input-wrapper">
					{

					}
					<input type="text" 
						placeholder="Search by title or author"
						value={this.state.query}
						onChange={(event) => this.updateQuery(event.target.value)}
					/>
				  </div>
        	</div>
            <div className="search-books-results">
              <ol className="books-grid">
				  
				 {this.state.searchedBooks.map((books) => 
				 books.imageLinks ? 
				  <Book key={books.id} author={books.authors} title={books.title} thumbnail={books.imageLinks.thumbnail} shelfType={this.props.shelfType} book={books} shelf={'none'}/> :
				  <Book key={books.id} author={books.authors} title={books.title} thumbnail={''} shelfType={this.props.shelfType} books={books} shelf={'none'}/>

				 )}
			</ol>
            </div>
       	</div>
		)
	}
}

export default BooksSearch
