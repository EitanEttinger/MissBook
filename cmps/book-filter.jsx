import { bookService } from "../services/book.service.js"

const { useState, useEffect } = React

export function BookFilter({ filterBy, onSetFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)


    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setFilterByToEdit(prevFilterBy => ({ ...prevFilterBy, [field]: value }))
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }

    // ! DRY!. WE WILL NEVER REPEAT OUR SELVES
    // function handleTxtChange({ target }) {
    //     const value = target.value
    //     setFilterByToEdit((prevFilterBy) => ({ ...prevFilterBy, txt: value }))
    // }

    // function handleMinPriceChange({ target }) {
    //     const value = target.value
    //     setFilterByToEdit((prevFilterBy) => ({ ...prevFilterBy, minPrice: value }))
    // }

    const { txt, minPrice } = filterByToEdit
    return (
        <section className="book-filter">
            <h2>Filter Our Books</h2>

            <form onSubmit={onSubmitFilter}>
                <label htmlFor="txt">Title:</label>
                <input value={txt} onChange={handleChange} name="txt" id="txt" type="text" placeholder="By Title" />

                <label htmlFor="minPrice">Min Price:</label>
                <input value={minPrice} onChange={handleChange} type="number" name="minPrice" id="minPrice" placeholder="By Min Price" />

                <button>Filter Books</button>
            </form>

        </section>
    )
}