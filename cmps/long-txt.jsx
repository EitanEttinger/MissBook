const { useState, useEffect } = React

export function LongTxt({ txt, length }) {

    const [isMore, setIsMore] = useState(false)
    const [isShort, setIsShort] = useState(null)

    useEffect(() => {
        setIsShort(txt.length < 100)
    }, [])

    function btnToggle() {
        setIsMore((prevIsMore) => !prevIsMore)
    }

    return (
        <section className="description-container">

            {!isMore && <p>{txt.substring(0, length)}</p>}
            {isMore && <p>{txt}</p>}
            {!isShort && <article>
                {!isMore && <button onClick={btnToggle}>Read More</button>}
                {isMore && <button onClick={btnToggle}>Read Less</button>}
            </article>}

        </section>
    )
}