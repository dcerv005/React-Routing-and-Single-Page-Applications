import {useParams, useNavigate} from 'react-router-dom';
import CharacterDetails from './CharacterDetails';

function CharacterDetailsWrapper() {
    let params = useParams()
    let navigate = useNavigate()
    //<Link> is good for static destinations/pages. ==> Navbar or a footer
    // useNavigate is good for dynamic destinations. Where the info might change based on a parameter, or a conditional logic. ==> Authentication. Navigate her eif authenticated or here if not.

    return <CharacterDetails params={params} navigate={navigate} />
}

export default CharacterDetailsWrapper;