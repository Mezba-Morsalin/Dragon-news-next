import Image from 'next/image';
import React from 'react';
import star from '@/assets/star.png'
import { FaEye } from 'react-icons/fa6';
import { CiBookmark } from 'react-icons/ci';
import { IoShareSocialOutline } from 'react-icons/io5';
import Link from 'next/link';
const NewsCard = ({news}) => {
    return (
        
            <div className='shadow p-6 space-y-4 rounded'>
            <div className='flex justify-between items-center bg-base-300 p-5'>
                <div className='flex items-center gap-3'>
                <Image src={news.author?.img} width={40} height={40} alt='author' className='rounded-full'></Image>
               <div >
                 <h3 className='font-semibold text-[#403F3F]'>{news.author.name}</h3>
                <p>{news.author.published_date}</p>
               </div>
            </div>
            <div className='flex items-center gap-3 text-2xl'>
                <CiBookmark></CiBookmark>
                <IoShareSocialOutline />
            </div>
            </div>
            <h2 className='text-xl font-bold text-[#403F3F]'>{news.title}</h2>
            <Image className='' src={news.image_url} alt='thumbnail' height={200} width={800}></Image>
            <p className='line-clamp-3 leading-7 text-[#706F6F]'>{news.details}</p>
            <Link className='btn' href={`/news/${news._id}`}><span>Read More...</span></Link>
            <div className='border-t border-gray-200 flex items-center justify-between pt-2'>
                <div className='flex items-center gap-3'>
                <div className='flex gap-1'>
                    <Image src={star} alt='ratings' width={20} height={20}></Image>
                    <Image src={star} alt='ratings' width={20} height={20}></Image>
                    <Image src={star} alt='ratings' width={20} height={20}></Image>
                    <Image src={star} alt='ratings' width={20} height={20}></Image>
                    <Image src={star} alt='ratings' width={20} height={20}></Image>
                </div>
                <p className='text-[#706F6F]'>{news.rating.number}</p>
            </div>
            <div className='flex items-center gap-3'>
                <FaEye className='text-[#706F6F]'></FaEye>
                <p className='text-[#706F6F]'>{news.total_view}</p>
            </div>
            </div>
        </div>
        
    );
};

export default NewsCard;