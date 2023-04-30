import React from 'react';
import '../../App.css';
import Top from './Top'
import Listing from './Listing'
import useUser from '../../hooks/useUser'

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