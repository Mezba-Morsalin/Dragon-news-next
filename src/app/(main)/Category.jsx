import LeftSideBar from "@/components/homepage/news/LeftSideBar";

const Category = ({ categories, active }) => {
  return (
    <div className="flex flex-col gap-3">
     {
        categories.map(category => {
            return(
               <LeftSideBar active = {active} key={category.category_id} category={category}></LeftSideBar>
            )
        })
     }
    </div>
  );
};

export default Category;