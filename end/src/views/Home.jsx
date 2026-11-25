import { useState } from "react";
import Navbar from "../components/Navbar";
import moviesJson from '../assets/movies.json'
import Card from "../components/Card";

export default function Home({ setPage }) {
    const [movies, setMovies] = useState(moviesJson)

    return (
        <>
            <Navbar setPage={setPage} />
            {/* home */}
            <div id="PAGE-HOME" className="min-h-screen flex items-center justify-center">
                <main className="my-5 bg-white grid grid-cols-6 gap-5">
                    {movies.map((movie, idx) => {
                        return <Card movie={movie} key={movie.id} idx={idx} />
                    })}
                </main>
            </div>
        </>
    )
}