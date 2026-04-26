import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='text-center space-y-2 py-8'>
            <Image className='mx-auto' src={logo} width={300} height={300} alt='logo'></Image>
            <p className='text-[#706F6F] text-lg'>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;