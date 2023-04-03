import { useLocation, Link, Navigate } from "react-router-dom";
import Episodes from '../data/episode.json';
import Locations from '../data/location.json';
import Heroes from '../data/characters.json';

export function Categories() {
    const {pathname} = useLocation();
    // let data = pathname === '/episodes' ? Episodes : pathname === '/heroes' ? Heroes : pathname === '/locations' ? Locations : null;
    let data;
    switch(pathname) {
        case '/episodes':
            data = Episodes;
            break;
        case '/heroes':
            data = Heroes;
            break;
        case '/locations':
            data = Locations;
            break;
        default:
            data = null;
    }
   
    const list = data?.map(item => {
       return  (<li key={item.id}><Link to={`${pathname}/${item.id}`} state={item}>{item.name}</Link></li>)
    })
    if(!data) {
        return (
            <Navigate to="/"/>
        )
    }
    return (
        <>
        <h1>Category {pathname.slice(1)}</h1>
        <ul>{list}</ul>
        </>
    )

}