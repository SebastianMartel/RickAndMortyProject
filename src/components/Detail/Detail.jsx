import axios from "axios"
import { useParams } from "react-router-dom"
import { useState , useEffect} from "react"

export default function Detail () {

    const [character, setCharacter] = useState({})

    const {id} = useParams()

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]); // [id], prevents from calling useEffect as an infinite loop.
    
    return (
        <div>
            <p>{character?.name}</p>
            <p>{character?.status}</p>
            <p>{character?.species}</p>
            <p>{character?.gender}</p>
            <p>{character?.origin?.name}</p>
            <img src = {character?.image} alt = {`${character?.name}`} />
        </div>
    )
}