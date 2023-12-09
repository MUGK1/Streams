'use client';
import { useState } from "react";

function Genres(props) {
     const handelClick = (e) => {
        props.selectedGenre(e.target.value);
    }
    return (

        <button onClick={handelClick} value={props.data} className="py-2 px-4 bg-[#262626] mx-0.5 text-white font-semibold rounded-lg shadow-md transition-colors hover:bg-[#3d3d3d] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            {props.data}
        </button>

    )
}

export default Genres;