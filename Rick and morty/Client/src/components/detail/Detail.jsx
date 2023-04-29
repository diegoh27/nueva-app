import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react'


// let api_key = 'bf3d7a6f6a9d.11842c0a6d417507ab9a';
// let url_base = 'https://be-a-rym.up.railway.app/api/character';

const Detail = () => {
    
   const [character, setCharacter] = useState({})
   const {id} = useParams()
   
    
    useEffect(() => {
      
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(response => response.data)
        .then ((data) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div>
         <h1>{character?.name}</h1>
         <p>{character?.status}</p>
         <p>{character?.species}</p>
         <p>{character?.gender}</p>
         <p>{character?.origin?.name}</p>
         <img src = {character?.image} alt = {character?.image} /> 
        </div>
    )
}

export default Detail;