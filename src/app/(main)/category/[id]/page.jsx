import RightSideBar from '@/components/homepage/news/RightSideBar';
import Category from '../../Category';
import { getCategories, getSingleCategories } from '@/lib/data';
import NewsCard from '@/components/homepage/news/NewsCard';

const SingleNews =async ({params}) => {
    const {id} = await params;
    const categories = await getCategories();
    const singleCategory = await getSingleCategories(id);

    return (
        <div className="w-11/12 lg:w-10/12 mx-auto mt-20">
      <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-6">
        
        <div className="col-span-12 md:col-span-2 lg:col-span-3">
          <div className='sticky top-10'>
            <h2 className="text-lg font-bold mb-5">All Category</h2>
          <Category categories={categories.news_category} active = {id}></Category>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4 lg:col-span-6">
          <h2 className='text-[#403F3F] text-lg font-semibold mb-3'>Dragon News Home</h2>
            <div className='flex flex-col gap-12'>
              {singleCategory.length > 0 ?
            singleCategory.map(news => {
              return (<NewsCard className="border mb-4 p-4" key={news._id} news = {news}></NewsCard>)
            }): <h2>No News Found</h2>
          }
            </div>
        </div>

        <div className="col-span-12 md:col-span-2 lg:col-span-3">
            <RightSideBar></RightSideBar>
          </div>

      </div>
    </div>
    );
};

export default SingleNews;