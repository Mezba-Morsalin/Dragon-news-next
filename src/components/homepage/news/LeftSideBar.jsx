import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({category, active}) => {
    return (
        <>
             <button  key={category.category_id}className={`p-3 text-[#403F3F] font-semibold rounded ${active === category.category_id ? "bg-[#D72050] text-white cursor-pointer" : "bg-white hover:bg-gray-200 transition duration-300 cursor-pointer"}`}><Link href={`/category/${category.category_id}`} className='block'>{category.category_name}</Link></button>
        </>
    );
};

export default LeftSideBar;