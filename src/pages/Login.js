import { useAuth } from "../context/AuthProvider";
import { useNavigate, useLocation } from 'react-router-dom';

export function Login() {

    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const username = formData.get('username');
        auth.signin(username, () => {
            navigate(from, {
                replace: true
            })
        })
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>
                Username: <input type="text" name="username"/>
            </label>
            <button type="submit">
                Login
            </button>
        </form>
        </>
    )
}