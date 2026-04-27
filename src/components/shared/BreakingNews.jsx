import React from 'react';
import Marquee from 'react-fast-marquee';

const breakingNews = [
  {
    id: 1,
    title: "AI is transforming the future of web development",
    description: "New AI tools are helping developers build faster and smarter applications.",
    category: "Technology",
    image: "https://example.com/images/ai-news.jpg",
    author: "John Doe",
    date: "27 April 2026, 02:45:30 PM",
    isBreaking: true
  },
  {
    id: 2,
    title: "Global markets see unexpected growth",
    description: "Stock markets around the world are rising despite economic concerns.",
    category: "Business",
    image: "https://example.com/images/market.jpg",
    author: "Jane Smith",
    date: "27 April 2026, 01:30:10 PM",
    isBreaking: true
  },
  {
    id: 3,
    title: "New smartphone release shocks the industry",
    description: "A leading company has launched a revolutionary smartphone.",
    category: "Gadgets",
    image: "https://example.com/images/phone.jpg",
    author: "Alex Johnson",
    date: "27 April 2026, 12:10:05 PM",
    isBreaking: true
  },
  {
    id: 4,
    title: "Major football tournament kicks off today",
    description: "Fans are excited as the biggest tournament begins.",
    category: "Sports",
    image: "https://example.com/images/football.jpg",
    author: "David Lee",
    date: "27 April 2026, 11:00:00 AM",
    isBreaking: true
  },
  {
    id: 5,
    title: "Scientists discover new energy source",
    description: "A breakthrough that could change the future of renewable energy.",
    category: "Science",
    image: "https://example.com/images/energy.jpg",
    author: "Emily Clark",
    date: "27 April 2026, 10:20:45 AM",
    isBreaking: true
  }
];

const BreakingNews = () => {
    return (
        <div className='md:w-11/12 lg:w-10/12 mx-auto'>
            <div className='flex justify-between items-center gap-3 bg-base-300 p-4'>
            <button className='text-white bg-[#D72050] py-2 px-4 rounded shadow hover:bg-[#9f1036] transition'>Breaking</button>
            <Marquee pauseOnHover speed={100}>
                    {
                        breakingNews.map(news => (
                            <span className='mx-6 font-medium text-gray-700 hover:text-black transition' key={news.id}>{news.title}</span>
                        ))
                    }
            </Marquee>
        </div>
        </div>
    );
};

export default BreakingNews;