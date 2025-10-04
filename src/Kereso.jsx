import React, {useState, useEffect } from "react";
function Kereső({elemek}) {
    const [szurő, setSzuro] = useState("");
    const [szuroelemek, setSzuroelemek] = useState([]);

    useEffect(() => {
        const szurt = elemek.filter((elem) =>
            elem.toLowerCase().includes(szurő.toLowerCase())
        );
        setSzuroelemek(szurt);
    }, [szurő, elemek]);
    return(
        <div>
            <input 
            type="text"
            placeholder="Keresés..."
            value={szurő}
            onChange={(e) => setSzuro(e.target.value)}
            style={{marginBottom: "10px", padding: 5, width: "100%"}}
            />

            <ul>
               {szuroelemek.length > 0 ? (
                   szuroelemek.map((item, idx) => <li key={idx}>{item}</li>)
               ) : (
                   <li>Nincs találat</li>
               )}
            </ul>
        </div>
    )
}