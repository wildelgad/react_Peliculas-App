import React, { useState } from 'react';

function MyHookComponent(props) {
    const [nombre, setNombre] = useState("oscar mesa")
    const [edad, setEdad] = useState(29)
    //ahora con un JSon
    const [estudios, setEstudios] = useState({
        estudio1 : "colegio",
        estudio2 : "Técnico",
        estudio3 : "Tecnólogo",
    })
    return (
        <div>
            Mi nombre es : {nombre}
            <br/>
            mi edad es : {edad}
            <br/>
            <b>Estudios</b>
            <ol>
                <li>{estudios.estudio1}</li>
                <li>{estudios.estudio2}</li>
                <li>{estudios.estudio3}</li>
            </ol>
        </div>
    );
}

export default MyHookComponent;