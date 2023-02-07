import React from 'react';
import {Link} from 'react-router-dom';

export default function NotFount() {
  return (
    <div className='not-found-container'>
        ¯\_(ツ)_/¯
        <h1>
            bunaqa adress yo'q <span><Link to='/' className='not-found'>Ortga</Link></span>
        </h1>
    </div>
  )
}
