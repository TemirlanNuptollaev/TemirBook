import React, {useContext} from 'react';
import { AuthContext } from '../components/context';
import Mybutton from '../components/UI/button/Mybutton';
import Myinput from '../components/UI/input/Myinput';

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    
    const login = event =>{
        event.preventDefault();
        setIsAuth(true); 
        localStorage.setItem('auth', 'true')
    }
    return (
        <div>
            <h1>Page for Login</h1>
            <form onSubmit={login}>
                <Myinput type="text" placeholder="Enter Login"/>
                <Myinput type="text" placeholder="Enter password" />
                <Mybutton>Login</Mybutton>
            </form>
        </div>
    );
}

export default Login;
