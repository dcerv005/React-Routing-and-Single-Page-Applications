import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const CharacterDetails = (props) => {
    const [id, setId] = useState(props.params)
    const [character, setCharacter]= useState(null)
    
    
    
    useEffect( () => {
        if (props.params) {
            
            
            const fetchData = async () => {
                try {
                    const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id.id}?&ts=1&apikey=1db16fa474c3fdf9e74d956d788ea55f&hash=e1c499a5ceb1d8ab8e4afbeb45348103`);
                    setCharacter(response.data.data.results[0])
                    
                } catch (error) {
                    console.error('Error fetching products', error)
                }
            }
            fetchData();
        } else {
            setId(null)
        }
    }, []);
    
    if (!character) {
        if (!id) {
            return (
                <div> 
                    <h2>Character Details Page</h2>
                    <p>Pick the character you want to know more information about on our <Link to='/characters'>Marvel Characters</Link> page.</p>
                </div>
            )
        } else {
            return <div> Loading... </div>
        }    
    }

    
   

    return (
        <div>
            <h1>{character.name}</h1>
            <p>{character.description}</p>
            {/* <p>{character.comics.available}</p> */}
            <ul>
                {character.comics.items.map((comic, index)=> (
                    <li key={index}>{comic.name}</li>
                ))}
            </ul>
            <br />
        </div>
    )
}



export default CharacterDetails;