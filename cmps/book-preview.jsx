import { LongTxt } from "./long-txt.jsx";

export function BookPreview({ book }) {

    return (
        <article className="book-preview">
            <h2>Book Title: {book.title}</h2>
            <h3>Book Authors: {book.authors[0]}</h3>
            <h4>Book Price: {book.listPrice.amount} {book.listPrice.currencyCode}</h4>
            
            {book.listPrice.isOnSale && <h2 className="txt-green">On Sale</h2>}
            {book.listPrice.amount >= 150 && <h4 className="txt-red">{book.listPrice.amount} {book.listPrice.currencyCode}</h4>}
            {book.listPrice.amount > 20 && book.listPrice.amount < 150 && <h4>{book.listPrice.amount} {book.listPrice.currencyCode}</h4>}
            {book.listPrice.amount <= 20 && <h4 className="txt-green">{book.listPrice.amount} {book.listPrice.currencyCode}</h4>}
            
            <LongTxt txt={book.description} length={100} />

            <img src={book.thumbnail} alt={book.thumbnail} />
        </article>
    )
}

