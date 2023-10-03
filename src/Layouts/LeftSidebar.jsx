import { useContext } from "react";
import Heading2 from "../Components/Heading2";
import { MainContext } from "../Context/MainContext";
import { Link } from "react-router-dom";
import NewsCard from "../Components/NewsCard";

const LeftSidebar = () => {
  const { blogs, categories } = useContext(MainContext);
  let filteredBlogs = [];

  if (blogs) {
    filteredBlogs = blogs.filter((blog) => blog.category_id == "4");
  }

  return (
    <div className="space-y-6">
      <div className="space-y-5">
        <Heading2>All Categories</Heading2>
        <ul className="categories ">
          {categories ? (
            categories.map((category) => {
              return (
                <li
                  className="py-3 px-5 text-text hover:text-heading hover:underline first:bg-grayBg first:text-heading"
                  key={category.id}
                >
                  <Link to={`/category/${category.id}`}>{category.name}</Link>
                </li>
              );
            })
          ) : (
            <p>Loading categories...</p>
          )}
        </ul>
      </div>
      <div className="space-y-5">
        {filteredBlogs ? (
          filteredBlogs.map((blog) => <NewsCard key={blog.id} data={blog} />)
        ) : (
          <p>Loading ...</p>
        )}
      </div>
    </div>
  );
};

export default LeftSidebar;
