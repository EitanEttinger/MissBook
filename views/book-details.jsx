export function BookDetails({ book, onBack }) {


    return (
        <section className="book-details">
            <h1>Book Title: {book.title}</h1>
            <h5>Book Price: {book.price}</h5>
            <img src={book.thumbnail} alt={book.thumbnail} />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, velit reiciendis sed optio eum saepe! Aliquid necessitatibus atque est quasi unde odit voluptate! Vero, dolor sunt molestiae possimus labore suscipit?</p>
            <button onClick={onBack}>Back</button>
        </section>
    )

}