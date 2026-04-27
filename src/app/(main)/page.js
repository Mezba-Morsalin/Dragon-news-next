import RightSideBar from "@/components/homepage/news/RightSideBar";
import Category from "./Category";


const getCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await res.json();
  return data.data;
};

export default async function Home() {
  const categories = await getCategories();

  return (
    <div className="w-11/12 lg:w-10/12 mx-auto mt-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        <div className="col-span-3">
          <h2 className="text-lg font-bold mb-5">All Category</h2>
          <Category categories={categories.news_category} active = {null}></Category>
        </div>

        <div className="bg-indigo-200 col-span-6 p-4 rounded-xl">
          <h2>Dragon News Home</h2>
        </div>

        <div className=" col-span-3">
          <RightSideBar></RightSideBar>
        </div>

      </div>
    </div>
  );
}
