const { useState } = React

const Router = ReactRouterDOM.HashRouter
const { Routes, Route } = ReactRouterDOM

import { AppHeader } from "./cmps/app-header.jsx";
import { Team } from "./cmps/team.jsx";
import { UserMsg } from "./cmps/user-msg.jsx";
import { Vision } from "./cmps/vision.jsx";
import { About } from "./views/about.jsx";
import { BookDetails } from "./views/book-details.jsx";
import { BookEdit } from "./views/book-edit.jsx";
import { BookIndex } from "./views/book-index.jsx";
import { HomePage } from "./views/home-page.jsx";

export function App() {

    const [page, setPage] = useState('book')


    function onSetPage(page) {
        setPage(page)
    }


    return (
        <Router>
            <section className="app main-layout">

                <AppHeader onSetPage={onSetPage} />

                <main className="main-layout full">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<About />}>
                            <Route path="team" element={<Team />} />
                            <Route path="vision" element={<Vision />} />
                        </Route>
                        <Route path="/book/:bookId" element={<BookDetails />} />
                        <Route path="/book/edit/:bookId" element={<BookEdit />} />
                        <Route path="/book/edit" element={<BookEdit />} />
                        <Route path="/book" element={<BookIndex />} />
                    </Routes>
                </main>
                <UserMsg />
            </section>
        </Router>
    )
} 