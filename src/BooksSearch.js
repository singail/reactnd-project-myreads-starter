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
	
	findBooks = (query) => {BooksAPI.search(query).then((books) => 
		this.setState({searchedBooks: books}))
						   }
	render() {

		return (
		<div className="search-books">
            <div className="search-books-bar">
				 <Link to='/' className="close-search">Close</Link>
				  <div className="search-books-input-wrapper">
					{
						/* NOTES: The search from BooksAPI is limited to a particular set of search terms.
					  You can find these search terms here:
					  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

					  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
					  you don't find a specific author or title. Every search is limited by search terms.*/
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
				  	
				  	<Book key={books.id} author={books.authors} title={books.title} thumbnail={books.imageLinks.thumbnail}/>
				  	
				 )}
			</ol>
            </div>
       	</div>
		)
	}
}

export default BooksSearch
