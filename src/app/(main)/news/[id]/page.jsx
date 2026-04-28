import RightSideBar from '@/components/homepage/news/RightSideBar';
import { getNewsCategories } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa6';

const NewsDetailsPage = async ({params}) => {
    const {id} = await params;
    const news =  await getNewsCategories(id)
    console.log(news)
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto mt-14'>
            <h2 className='text-[#403F3F] text-lg font-semibold mb-3'>Dragon News Home</h2>
            <div className='grid lg:grid-cols-12 gap-10'>
                    {
                        news.map(n => {
                        return (
                           <div className='col-span-9 space-y-4 border border-gray-200 p-8 rounded-xl' key={n._id}>
                             <Image  src={n.image_url} width={1100} height={100} alt='thumbnail-image'></Image>
                        <h2 className='text-2xl font-bold'>{n.title}</h2>
                        <p className='leading-7 text-[#706F6F]'>{n.details}</p>
                        <Link href={`/category/${n.category_id}`}><button className='cursor-pointer text-white bg-[#D72050] py-2 px-4 rounded flex items-center gap-2.5 hover:bg-gray-200 hover:text-black transition duration-300'><FaArrowLeft></FaArrowLeft>All news in this category</button></Link>
                           </div>
                    )
                    })
                }
                <div className='col-span-3'>
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsPage;