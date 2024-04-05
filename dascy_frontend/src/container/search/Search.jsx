import React from 'react'
import './search.css';

import pic from '../../assets/undraw_searching_re_3ra91.png';

const Search = () => {
  return (
    <div className='dascy__search'>
        <div className='dascy__search-content'>
           <h1 className='dascy__search-content_title'>Search the various courses of DASCY</h1>
           <div className="dascy__search-content_input">
              <input type="search" placeholder='ex : Object oriented programming' />
              <button type="button">Search</button>
           </div>
           </div>
        <div className='dascy__search-image'>
            <img src={pic} alt="search" />
        </div>
    </div>
  )
}

export default Search
