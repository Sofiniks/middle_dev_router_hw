import { NavLink } from 'react-router-dom';
export function Header() {
    return (
        <>
        <nav>
         <li key="heroes">
        <NavLink
        to="/heroes"
         >Heroes</NavLink>
      </li>
      <li key="locations">
        <NavLink 
        to="/locations">
          Locations</NavLink>
      </li>
      <li key="episodes">
        <NavLink to="/episodes">Episodes</NavLink>
      </li>   
        </nav>
        <ul>
      
    </ul>
        </>
    )
}