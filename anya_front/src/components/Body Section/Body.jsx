import React from 'react';
import './body.css';
import Top from './Top Section/Top'
import Listing from './Listing Section/Listing'
import useUser from '../../hooks/useUser'
import Typography from '@mui/material/Typography';

const Body = () => {

  const { user } = useUser();

  return (
    <div className='mainContent'>
      <Top />

      {user
        &&
        <div className='bottom flex'>
          <Listing />

        </div>
      }

    </div>
  )

}
export default Body;