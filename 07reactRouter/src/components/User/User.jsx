import React from 'react';
import { useParams } from 'react-router-dom';

export default function User() {
    const { userid } = useParams();
    return (
        <div className='text-3xl bg-green-700 p-4 text-white font-bold' >
         <span className='text-3xl text-orange-500' >User</span>: {userid} 
         
         </div>
    )
}

