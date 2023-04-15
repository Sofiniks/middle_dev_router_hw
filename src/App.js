import { lazy } from 'react';
import { Routes, Route} from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import { AuthProvider } from './context/AuthProvider';
import { PrivateRoute } from './components/PrivateRoute';
import ErrorBoundary from './components/ErrorBoundary';

const Home = lazy(() => import('./pages/Home').then(module => ({
  default: module.Home
})));
const Categories = lazy(() => import('./pages/Category').then(module => ({
  default: module.Categories
})))
const Details = lazy(() => import('./pages/Details').then(module => ({
  default: module.Details
})))
const Login = lazy(() => import('./pages/Login').then(module => ({
  default: module.Login
})))
const NotFound = lazy(() => import('./pages/NotFound').then(module => ({
  default: module.NotFound
})))

function App() {
  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
}

export default App;
