import moment from "moment/moment";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export function Details () {
    const navigate = useNavigate();
    const {state} = useLocation();
    const { item, category } = state;
    const {name, image, species, gender, created, status, type, dimension, air_date, episode} = item || {};
    if(!state) {
        return (
            <Navigate to={`/${category}`}/>
        )
    }
    return (
        <div>
            <button onClick={() => navigate(-1)}>
                {'<'} Go back
            </button>
            <h1>{name}</h1>
            {image && <img src={image} alt="hero" /> }
            {gender && <p>Gender: {gender}</p>}
            {species && <p>Species: {species}</p>}
            {status && <p>Status: {status}</p>}
            {dimension && <p>Dimension: {dimension}</p>}
            {episode && category === 'episodes' && <p>Episode: {episode}</p>}
            {air_date && <p>Air date: {air_date}</p>}
            <p>Created: {moment(created).format('YYYY-MM-DD')}</p>
            {type && (<p>Type: {type}</p>)}
        </div>
        
    )
}