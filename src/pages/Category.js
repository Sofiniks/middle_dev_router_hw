import { Link, Navigate, useParams } from "react-router-dom";
import { CATEGORIES, CATEGORIES_NAME } from "../constants";
import { useMemo } from "react";


export function Categories() {
    const {category} = useParams();
    let data = useMemo(() => {
        return CATEGORIES[category]
    },[category])
   
    const list = data?.map(item => {
       return  (<li key={item.id}><Link to={`/${category}/${item.id}`} state={{item: item, category: category}}>{item.name}</Link></li>)
    })
    if(!data) {
        return (
            <Navigate to="/"/>
        )
    }
    return (
        <>
        <h1>{CATEGORIES_NAME[category]}</h1>
        <ul>{list}</ul>
        </>
    )

}