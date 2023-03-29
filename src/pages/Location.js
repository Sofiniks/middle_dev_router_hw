import moment from "moment/moment";
import { useLocation, Navigate } from "react-router-dom";

export function Location() {
    const {state} = useLocation();
    const {name, type, dimension, created} = state || {};
    if(!state) {
        return (
            <Navigate to="/locations"/>
        )
    }
    return (
        <div>
            <h1>{name}</h1>
            <p>Type: {type}</p> 
            <p>Dimension: {dimension}</p>
            <p>Created: {moment(created).format('YYYY-MM-DD')}</p>
        </div>
        
    )
}