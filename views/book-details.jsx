export function BookDetails({ book, onBack }) {


    return (
        <section className="book-details">
            <h1>Book Vendor: {book.vendor}</h1>
            <h5>Max Speed: {book.maxSpeed}</h5>
            <img src={`../assets/img/${book.vendor}.png`} alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, velit reiciendis sed optio eum saepe! Aliquid necessitatibus atque est quasi unde odit voluptate! Vero, dolor sunt molestiae possimus labore suscipit?</p>
            <button onClick={onBack}>Back</button>
        </section>
    )

}