import React from 'react';
// import { Route } from 'react-router-dom';
import Top from './components/Body Section/Top';
import useUser from './hooks/useStudent';
import Sidebar from './components/Sidebar';


const Layout = ({ children }) => {
    const { student } = useUser();

    return (
        <div className='container'>
            <Sidebar />
            <div className='mainContent'>
                <Top />

                {student && (
                    <div className='bottom flex'>
                        {children}
                    </div>
                )}

            </div>
        </div>
    );
};

export default Layout