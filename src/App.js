import { Routes, Route} from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import { Home } from './pages/Home';
import { Categories } from './pages/Category';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';
import { AuthProvider } from './context/AuthProvider';
import { Login } from './pages/Login';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/:category" element={<PrivateRoute><Categories/></PrivateRoute>}/>
        <Route path="/:category/:id"  element={<PrivateRoute><Details/></PrivateRoute>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </AuthProvider>
  );
}

export default App;
