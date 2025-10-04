import React from "react";
import Kereső from "./Kereso.jsx";
const konyvek = [
    "Az aranyember",
    "Egri csillagok",
    "Pál utcai fiúk",
    "A kőszívű ember fiai",
    "Tüskevár"
]


function KonyvKereso() {
    return(
        <div>
            <h2>Könyv kereső</h2>
            <Kereső items={konyvek}></Kereső>
        </div>
    )
}