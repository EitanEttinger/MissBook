export function BookPreview({ book }) {

    return (
        <article className="book-preview">
            <h2>Book Title: {book.title}</h2>
            <h3>Book Authors: {book.authors[0]}</h3>
            <h4>Book Price: {book.listPrice.amount} {book.listPrice.currencyCode}</h4>
            <img src={book.thumbnail} alt={book.thumbnail} />
        </article>
    )
}

