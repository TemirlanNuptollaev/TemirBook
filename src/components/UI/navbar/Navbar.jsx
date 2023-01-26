import React , {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context';
import Mybutton from '../button/Mybutton';
import img from "../../../images/Logo.png"

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className='App'>
            <div className="navbar" >
                <Link   to="/posts">
                <img className='logo' style={{width:"150px"}} src={img}></img>
                </Link>
                
                <div>
                    <Link className="link" to="/about">about</Link>
                    <Link className="link" to="/posts">posts</Link>
                    <button className="link" onClick={logout}>Exit</button>
                </div>
                    
                    
                    

            </div>
        </div>
        
    );
}

export default Navbar;
