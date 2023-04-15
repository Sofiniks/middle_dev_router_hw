import { Link, Navigate, useParams } from "react-router-dom";
import { CATEGORIES_NAME } from "../constants";
import { useSearchData } from "../hooks/useSearchData";
import { useCallback, useMemo, useRef, useState } from 'react';
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';



export function Categories() {
    const {category} = useParams();
    const [pageNumber, setPageNumber] = useState(1);
    const {loading, error, data, hasMore} = useSearchData(category, pageNumber);
    
    const observer = useRef();

    useEffect(() => {
        setPageNumber(1);
    },[category])

    const lastNodeRef = useCallback((node) => {
        if(loading) return;
        if(observer.current) {
            observer.current.disconnect();
        }
        observer.current = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting && hasMore) {
                setPageNumber(prevState => prevState + 1)
            }
        });
        if(node) {
            observer.current.observe(node)
        }
    },[loading, hasMore])
   
    const list = useMemo(() => data?.map((item, index) => {
        if(data.length === index + 10) {
            return (<li style={{minHeight: '50px'}} key={uuidv4()} ref={lastNodeRef}><Link to={`/${category}/${item.id}`} state={{item: item, category: category}}>{item.name}</Link></li>)
        } else {
            return (<li style={{minHeight: '50px'}} key={uuidv4()}><Link to={`/${category}/${item.id}`} state={{item: item, category: category}}>{item.name}</Link></li>)
        }
       
    }),[data, category, lastNodeRef])

    if(!data) {
        return (
            <Navigate to="/"/>
        )
    }
    if(loading) {
        return <h1>Loading...</h1>
    }
    if(error) {
        return <h1>Error</h1>
    }
    return (
        <>
        <h1>{CATEGORIES_NAME[category]}</h1>
        <ul>{list}</ul>
        </>
    )

}