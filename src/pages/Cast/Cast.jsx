import { fetchCastById } from "components/helpers/api";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const Cast = () => {

    const [casts,setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(()=> {
fetchCastById(movieId).then(data=>setCast(data.cast))
 // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return ( 
        <>
        <ul>
            { casts.map((cast) => {
                return  <li key={cast.id}>
                <img src={cast.profile_path &&`https://image.tmdb.org/t/p/w500${cast.profile_path}`} alt={cast.original_name} width='200px'/>
                <p>Name:{cast.name}</p>
                <p>Character: {cast.character}</p>
            </li>
                })}
        </ul>
        
        </>
    )
}