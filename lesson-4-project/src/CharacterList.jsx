import CharacterDetails from './CharacterDetails';
import axios from "axios";
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


const CharacterList = () => {
    const [characters, setCharacters] = useState([])
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        //const ts= new Date().getTime()
        
        const fetchCharacters = async () => {
            try {
                const response = await axios.get('https://gateway.marvel.com/v1/public/characters?&ts=1&apikey=1db16fa474c3fdf9e74d956d788ea55f&hash=e1c499a5ceb1d8ab8e4afbeb45348103');
                setCharacters(response.data.data.results)
                
            } catch (error) {
                console.error('Error fetching products', error)
            }
        }
        
        fetchCharacters();
    }, []);
    
    const selectCharacter = (id) => {
        setSelectedId(id);
        
    }

    return (
        
        <div>
            <h3>Marvel Characters</h3>
            <ul>
                {characters.map( character => (
                    <li key={character.id}>
                        {character.name}
                        <br />
                        <Link to={`/characterdetail/${character.id}`}><img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} width="200"/></Link>
                        {/* {selectedId && character.id === selectedId && <CharacterDetails characterId={selectedId} />} */}
                    </li>
                ))}
            </ul>

        </div>
    )

}

export default CharacterList;