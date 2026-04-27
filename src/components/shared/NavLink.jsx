"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const pathName = usePathname();
    const isActive = href === pathName
    return (
        <Link className={`${isActive ? "text-white bg-[#D72050] py-2 px-4 rounded  transition" : "py-2 px-4 hover:bg-[#D72050] hover:text-white hover:rounded transition duration-300"}`} href={href}>{children}</Link>
    );
};

export default NavLink;