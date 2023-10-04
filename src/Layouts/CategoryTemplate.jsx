import { useContext } from "react";
import LeftSidebar from "../Layouts/LeftSidebar";
import RightSidebar from "../Layouts/RightSidebar";
import Heading2 from "../Components/Heading2";
import Article from "../Components/Article";
import { MainContext } from "../Context/MainContext";
import { useParams } from "react-router-dom";

const CategoryTemplate = () => {
  const { blogs, categories } = useContext(MainContext);
  const { catId } = useParams();
  let catPosts = blogs?.filter((blog) => blog.category_id === catId) || [];
  const category = categories?.find((cat) => cat.id === catId) || {};

  if (catId == 0) {
    catPosts = blogs;
  }

  return (
    <div className="grid md:grid-cols-4 gap-8">
      <LeftSidebar />
      <div className="col-span-2">
        <div className="flex justify-between items-center">
          <Heading2>{category.name} category</Heading2>
          {catPosts ? <p>{catPosts.length} Posts</p> : ""}
        </div>
        <div className="articles py-5 space-y-8">
          {catPosts ? (
            catPosts.map((blog) => <Article key={blog.id} data={blog} />)
          ) : (
            <p>News are loading ...</p>
          )}
        </div>
        {catPosts.length < 1 && <p>Sorry! no post found 😥.</p>}
      </div>
      <RightSidebar />
    </div>
  );
};

export default CategoryTemplate;
