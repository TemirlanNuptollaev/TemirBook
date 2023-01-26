import React,{useContext
} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import About from '../pages/About';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';
import Posts from '../pages/Posts';
import { privateRoutes, publicPoutes } from '../router';
import { AuthContext } from './context';
import Loader from './UI/Loader/Loader';



const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    console.log(isAuth)   
    
    if (isLoading){
        return <Loader></Loader>
    }
    
    return (
        isAuth
            ? 
            <Switch>
                {privateRoutes.map(route => 
                    <Route exact={route.exact} component={route.component} path={route.path}></Route>
                )}
                <Redirect to="/posts"/>
             </Switch>
        
            :
            <Switch>
                {publicPoutes.map(route => 
                    <Route exact={route.exact} component={route.component} path={route.path}></Route>   
                )}
            
                <Redirect to="/login"/>
             </Switch>
   
    );
}

export default AppRouter;
