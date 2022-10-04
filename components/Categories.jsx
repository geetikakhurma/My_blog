import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import{getCategories} from '../services'

const Categories = () => {
  const [categories , setCategories]=useState([]);

useEffect(()=>{
    getCategories().then((newCategotries)=> setCategories(newCategotries))
},[])

  return (
    <div className='bg-white shadow-lg p-8 mb-8 pb-6 rounded-lg'>
      <h3 className='text-xl font-semibold border-b pb-4' >  Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span className="block p-3 mt-2 cursor-pointer">{category.name}</span>
        </Link>
      ))}
    </div>
  )
}

export default Categories