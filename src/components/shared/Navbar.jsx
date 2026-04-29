"use client"
import userPng from '@/assets/user.png'
import NavLink from './NavLink';
import Image from 'next/image';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user
    const links = (
        <>
        <li><NavLink href="/">Home</NavLink></li>
        <li><NavLink href="/about">About</NavLink></li>
        <li><NavLink href="/career">Career</NavLink></li>
        </>
    )
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto py-4'>
            <div className='flex justify-between items-center md:gap-8 relative '>
            <div className='hidden md:block'>
            </div>
            {
                open ? <RiCloseLine className='cursor-pointer md:hidden' onClick={() => setOpen(!open)}></RiCloseLine> : <GiHamburgerMenu onClick={() => setOpen(!open)} className='cursor-pointer lg:hidden'></GiHamburgerMenu>
            }
            <ul className={`md:hidden absolute top-10 shadow-[0_2px_7px_rgba(0,0,0,0.1)] bg-white p-5 rounded-2xl space-y-4 ${open ? "block" :"hidden"}`}>
                {
                    links
                }
            </ul>
            <ul className='hidden md:flex gap-2'>
                {
                    links
                }
            </ul>
            { isPending ? <span className="loading loading-ring loading-xl"></span> :
                user ? <div className='flex gap-3 items-center'>
                <Image width={50} height={50} src={user?.image ? user?.image : userPng} alt='user-png'></Image>
                <h2>{user.name}</h2>
                <button className='text-white bg-[#D72050] py-2 px-3 rounded shadow font-bold hover:bg-gray-200 hover:text-black hover:font-bold transition cursor-pointer' onClick={async () => await authClient.signOut() }>Log Out</button>
            </div>: <Link href="/login" className='text-white bg-[#D72050] py-2 px-3 rounded shadow font-bold hover:bg-gray-200 hover:text-black hover:font-bold transition'>Login</Link>
            }
        </div>
        </div>
    );
};

export default Navbar;