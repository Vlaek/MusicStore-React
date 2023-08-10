import React from 'react'
import Index from '../pages/Index';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../router';

const AppRouter = () => {
    return (
        <Routes>
            {routes.map((route, index) => 
                <Route 
                    key={index} 
                    path={route.path} 
                    element={route.element} 
                    exact={route.exact}
                ></Route>
            )}
            <Route path="*" element={<Index/>}></Route>
        </Routes>
    )
}

export default AppRouter