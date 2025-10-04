import React from "react";
import Kereső from "./Kereso.jsx";
const filmek =[
    "Star Wars",
    "Mátrix",
    "Star Trek",
    "Dűne"
];
function FilmKeres() {
    return(
        <div>
           <h2>Film kereső</h2>
           <Kereso items={filmek}></Kereso>
        </div>
    )
}
export default FilmKeres;