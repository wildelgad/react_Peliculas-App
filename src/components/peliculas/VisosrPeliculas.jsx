import React, { useState } from 'react';

export default function VisorPeliculas8(){
        const [peliculas, setPeliculas] = useState( async() => {
        let movies = [];
        const respuesta = await fetch('https://api-movies-users.vercel.app/movies/');
        movies = await respuesta.json();
        return movies;
    })

    return(
        <div>
            <section>
                <table>
                    <thead>
                        <th>ID</th>
                        <th>Titulo</th>
                        <th>Año</th>
                        <th>Cover</th>
                        <th>Descripción</th>
                        <th>Duración</th>
                        <th>Calificación</th>
                        <th>Fuente</th>
                        <th>Tags</th>
                    </thead>
                    <tbody>
                        {peliculas.map( )}
                    </tbody>
                </table>
            </section>
        </div>
    )
}