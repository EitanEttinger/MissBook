export function BookDetails({ book, onBack }) {


    return (
        <section className="book-details">
            <h2>Book Title: {book.title}</h2>
            <h3>Book Authors: {book.authors[0]}</h3>
            <h4>Book Subtitle: {book.subtitle}</h4>
            <h4>Book Price: {book.listPrice.amount} {book.listPrice.currencyCode}</h4>
            <p>Book Description: {book.description}</p>
            <img src={book.thumbnail} alt={book.thumbnail} />
            <button onClick={onBack}>Back</button>
        </section>
    )

}

