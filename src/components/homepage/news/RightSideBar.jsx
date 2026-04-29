'use client'
import Image from 'next/image';
import facebook from '@/assets/fb.png'
import instagram from '@/assets/instagram.png'
import twitter from '@/assets/twitter.png'
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import classImg from '@/assets/class.png'
import swimming from '@/assets/swimming.png'
import playground from '@/assets/playground.png'
import { authClient } from '@/lib/auth-client';

const RightSideBar = () => {
    const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log(data)
    }
    return (
        <div>
            <h2 className="text-lg font-bold mb-3">Login With</h2>
            <div className='flex flex-col gap-3'>
                <button onClick={()=> handleGoogleLogin()}  className='btn'>
                    <FaGoogle/>
                    Login With Google
                    </button>
                <button className='btn'>
                    <FaGithub/>
                    Login With Github
                    </button>
            </div>
            <div className='mt-10'>
                <h2 className='text-[#403F3F] text-lg font-semibold mb-3'>Find Us On</h2>
                <div className='flex flex-col gap-3'>
                    <button className='btn'><Image src={facebook} width={10} height={10} alt='facebook-png'></Image>Facebook</button>
                    <button className='btn'><Image src={twitter} width={20} height={20} alt='facebook-png'></Image>Twitter</button>
                    <button className='btn'><Image src={instagram} width={20} height={20} alt='facebook-png'></Image>Instagram</button>
                </div>
            </div>
            <div className='mt-10 bg-base-300 p-5'>
                <h2 className='text-[#403F3F] text-lg font-semibold mb-3'>Q-Zone</h2>
                <div className='flex flex-col gap-3'>
                    <Image className='mx-auto' src={swimming} width={250} height={250} alt='swimming'></Image>
                    <Image className='mx-auto' src={classImg} width={250} height={250} alt='swimming'></Image>
                    <Image className='mx-auto' src={playground} width={250} height={250} alt='swimming'></Image>
                </div>
            </div>
        </div>
    );
};

export default RightSideBar;