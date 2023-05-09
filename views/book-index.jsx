const { useEffect, useState } = React
const { Link } = ReactRouterDOM

import { BookFilter } from "../cmps/book-filter.jsx"
import { BookList } from "../cmps/book-list.jsx"
import { bookService } from "../services/book.service.js"
import { BookDetails } from "./book-details.jsx"

export function BookIndex() {

    const [books, setBooks] = useState([])
    const [selectedBook, setSelectedBook] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy).then(books => setBooks(books))
        // bookService.query().then(setBooks)
    }

    function onRemoveBook(bookId) {
        bookService.remove(bookId).then(() => {
            const updatedBooks = books.filter(book => book.id !== bookId)
            setBooks(updatedBooks)
        })
    }

    function onSetFilter(filterBy) {
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, ...filterBy }))
    }

    function onSelectBook(book) {
        setSelectedBook(book)
    }

    console.log('render');
    return (
        <section className="book-index full main-layout">
            <BookFilter onSetFilter={onSetFilter} filterBy={filterBy} />
            <Link to="/book/edit">Add Book</Link>
            <BookList books={books} onRemoveBook={onRemoveBook} />

            {/* {selectedBook && <BookDetails onBack={() => setSelectedBook(null)} book={selectedBook} />} */}
        </section>
    )
}