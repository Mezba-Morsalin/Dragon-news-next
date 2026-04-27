import user from '@/assets/user.png'
import NavLink from './NavLink';
import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {
    const links = (
        <>
        <li><NavLink href="/">Home</NavLink></li>
        <li><NavLink href="/about">About</NavLink></li>
        <li><NavLink href="/career">Career</NavLink></li>
        </>
    )
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto mt-8'>
            <div className='flex justify-between items-center gap-8'>
            <div className='hidden md:block'></div>
            <ul className='flex gap-2'>
                {
                    links
                }
            </ul>
            <div className='flex gap-3 items-center'>
                <Image width={50} height={50} src={user} alt='user-png'></Image>
                <Link href="/login" className='text-white bg-[#D72050] py-2 px-4 rounded shadow font-bold hover:bg-gray-200 hover:text-black hover:font-bold transition'>Login</Link>
            </div>
        </div>
        </div>
    );
};

export default Navbar;