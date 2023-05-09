const { useEffect, useState } = React
const { useParams, useNavigate } = ReactRouterDOM

import { bookService } from "../services/book.service.js"
import { showErrorMsg } from "../services/event-bus.service.js"


export function BookEdit() {

    const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())
    const navigate = useNavigate()
    const params = useParams()
    console.log('params:', params)

    useEffect(() => {
        if (params.bookId) loadBook()
    }, [])

    function loadBook() {
        bookService.get(params.bookId)
            .then(setBookToEdit)
            .catch(err => {
                console.log('Had issued in book edit:', err);
                navigate('/book')
                showErrorMsg('Book not found!')
            })
    }


    function handleChange({ target }) {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setBookToEdit(prevBook => ({ ...prevBook, [field]: value }))
    }

    function onSaveBook(ev) {
        ev.preventDefault()
        bookService.save(bookToEdit)
            .then(() => {
                navigate('/book')
            })
    }

    const { title, bookPrice } = bookToEdit
    return (
        <section className="book-edit">
            <h2>{bookToEdit.id ? 'Edit' : 'Add'} Book</h2>

            <form onSubmit={onSaveBook} >
                <label htmlFor="title">Title:</label>
                <input onChange={handleChange} value={title} type="text" name="title" id="title" />

                <label htmlFor="bookPrice">Book Price:</label>
                <input onChange={handleChange} value={bookPrice} type="number" name="bookPrice" id="bookPrice" />

                <button>{bookToEdit.id ? 'Save' : 'Add'}</button>
            </form>

        </section>
    )

}