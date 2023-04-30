import React from 'react';
// import { Route } from 'react-router-dom';
import Top from './components/Body Section/Top';
import useUser from './hooks/useUser';
import Sidebar from './components/Sidebar';


const Layout = ({ children }) => {
    const { user } = useUser();

    return (
        <div className='container'>
            <Sidebar />
            <div className='mainContent'>
                <Top />

                {user && (
                    <div className='bottom flex'>
                        {children}
                    </div>
                )}

            </div>
        </div>
    );
};

export default Layout