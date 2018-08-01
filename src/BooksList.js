import React, { Component } from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'

/*The main page that shows the list of books */
class BooksList extends Component {

	render() {
		
		return ( 
			<div className = "list-books">
				<div className = "list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className = "list-books-content">
					<div>
						<div className = "bookshelf">
							<h2 className = "bookshelf-title">  Currently Reading </h2> 
							<div className = "bookshelf-books">
								<ol className = "books-grid">
									{this.props.books.filter((book) => book.shelf === 'currentlyReading')
										.map((book) =>
											  book.imageLinks ? 
											 <Book key={book.id}
											 author={book.authors}
											 title={book.title}
											 thumbnail={book.imageLinks.thumbnail}
											 shelfType={this.props.shelfType}
											 book={book}
											 shelf={book.shelf}/> :
											<Book key={book.id}
											 author={book.authors}
											 title={book.title}
											 thumbnail={''}
											 shelfType={this.props.shelfType}
											 book={book}
											 shelf={book.shelf}/>
											)
									}
								</ol>
							</div>
						</div>
						<div className = "bookshelf">
							<h2 className = "bookshelf-title"> Want to Read </h2>
							<div className = "bookshelf-books">
								<ol className = "books-grid">
										 {this.props.books.filter((book) => book.shelf === 'wantToRead')
											.map((book) => 
												book.imageLinks ? 
											 <Book key={book.id}
											 author={book.authors}
											 title={book.title}
											 thumbnail={book.imageLinks.thumbnail}
											 shelfType={this.props.shelfType}
											 book={book}
											 shelf={book.shelf}/> :
											<Book key={book.id}
											 author={book.authors}
											 title={book.title}
											 thumbnail={''}
											 shelfType={this.props.shelfType}
											 book={book}
											 shelf={book.shelf}/>)}
								</ol>
							</div> 
						</div>
						<div className = "bookshelf">
							<h2 className = "bookshelf-title"> Read </h2>
							<div className = "bookshelf-books">
								<ol className = "books-grid"> 
										{this.props.books.filter((book) => book.shelf === 'read')
											.map((book) =>
  											book.imageLinks ? 
											 <Book key={book.id}
											 author={book.authors}
											 title={book.title}
											 thumbnail={book.imageLinks.thumbnail}
											 shelfType={this.props.shelfType}
											 book={book}
											 shelf={book.shelf}/> :
											<Book key={book.id}
											 author={book.authors}
											 title={book.title}
											 thumbnail={''}
											 shelfType={this.props.shelfType}
											 book={book}
											 shelf={book.shelf}/>)}
								</ol> 
							</div>
						</div>
					</div>
				</div>
				<div className = "open-search">
					<Link to = '/search'> Add a book </Link>
				</div>
			</div>
		)
	}
}

export default BooksList
