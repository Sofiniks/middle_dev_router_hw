import moment from "moment/moment";
import { Navigate, useLocation } from "react-router-dom"
export function Hero() {
    const {state} = useLocation();
    const {name, image, species, gender, created, status, type} = state || {};
    if(!state) {
        return (
            <Navigate to="/heroes"/>
        )
    }
    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt="hero" />  
            <p>Gender: {gender}</p> 
            <p>Species: {species}</p>
            <p>Status: {status}</p>
            <p>Created: {moment(created).format('YYYY-MM-DD')}</p>
            {type && (<p>Type: {type}</p>)}
        </div>
        
    )
}