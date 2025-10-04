import React from "react";
import Kereso from "./Kereso.jsx";
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
            <Kereso elemek={konyvek}></Kereso>
        </div>
    )
}
export default KonyvKereso;