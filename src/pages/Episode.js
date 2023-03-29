import moment from "moment/moment";
import { useLocation, Navigate } from "react-router-dom";

export function Episode() {
    const {state} = useLocation();
    const {name, air_date, episode, created} = state || {};
    if(!state) {
        return (
            <Navigate to="/episodes"/>
        )
    }
    return (
        <div>
            <h1>{name}</h1>
            <p>Air date: {air_date}</p> 
            <p>Episode: {episode}</p>
            <p>Created: {moment(created).format('YYYY-MM-DD')}</p>
        </div>
        
    )
}