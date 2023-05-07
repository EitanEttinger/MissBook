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

    // function handleMinSpeedChange({ target }) {
    //     const value = target.value
    //     setFilterByToEdit((prevFilterBy) => ({ ...prevFilterBy, minSpeed: value }))
    // }

    const { txt, minSpeed } = filterByToEdit
    return (
        <section className="book-filter">
            <h2>Filter Our Books</h2>

            <form onSubmit={onSubmitFilter}>
                <label htmlFor="txt">Vendor:</label>
                <input value={txt} onChange={handleChange} name="txt" id="txt" type="text" placeholder="By Vendor" />

                <label htmlFor="minSpeed">Min Speed:</label>
                <input value={minSpeed} onChange={handleChange} type="number" name="minSpeed" id="minSpeed" placeholder="By Min Speed" />

                <button>Filter Books</button>
            </form>

        </section>
    )
}