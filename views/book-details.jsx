export function BookDetails({ book, onBack }) {

    const now = new Date()
    const tenYearsAgo = new Date(now.getFullYear() - 10, now.getMonth(), now.getDate()).getFullYear()
    const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate()).getFullYear()

    return (
        <section className="book-details">
            <h2>Book Title: {book.title}</h2>
            <h3>Book Authors: {book.authors[0]}</h3>
            <h4>Book Subtitle: {book.subtitle}</h4>
            <h4>Book Price: {book.listPrice.amount} {book.listPrice.currencyCode}</h4>
            <p>Book Description: {book.description}</p>
            
            {book.pageCount >= 500 && <h4>Serious Reading</h4>}
            {book.pageCount >= 200 && book.pageCount < 500 && <h4>Descent Reading</h4>}
            {book.pageCount < 200 && <h4>Light Reading</h4>}

            {book.publishedDate < tenYearsAgo && <h4 className="txt-vintage">Vintage</h4>}
            {book.publishedDate > oneYearAgo && <h4 className="txt-green">New</h4>}

            {book.listPrice.isOnSale && <h3 className="txt-green">On Sale</h3>}

            {book.listPrice.amount >= 150 && <h4 className="txt-red">{book.listPrice.amount} {book.listPrice.currencyCode}</h4>}
            {book.listPrice.amount > 20 && book.listPrice.amount < 150 && <h4>{book.listPrice.amount} {book.listPrice.currencyCode}</h4>}
            {book.listPrice.amount <= 20 && <h4 className="txt-green">{book.listPrice.amount} {book.listPrice.currencyCode}</h4>}

            
            <img src={book.thumbnail} alt={book.thumbnail} />
            <button onClick={onBack}>Back</button>
        </section>
    )

}

