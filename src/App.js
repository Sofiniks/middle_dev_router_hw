import { NavLink, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Categories } from './pages/Category';
import { Episode } from './pages/Episode';
import { Hero } from './pages/Hero';
import { Location } from './pages/Location';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <>
    <ul>
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
    </ul>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/episodes" element={<Categories/>}/>
      <Route path="/locations" element={<Categories/>}/>
      <Route path="/heroes" element={<Categories/>}/>
      <Route path="/episodes/:id"  element={<Episode/>}/>
      <Route path="/locations/:id"  element={<Location/>}/>
      <Route path="/heroes/:id" element={<Hero/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  );
}

export default App;
