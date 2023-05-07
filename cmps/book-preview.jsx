export function BookPreview({ book }) {

    return (
        <article className="book-preview">
            <h2>Book Title: {book.title}</h2>
            <h4>Max Speed: {book.price}</h4>
            <img src={book.thumbnail} alt={book.thumbnail} />
        </article>
    )
}