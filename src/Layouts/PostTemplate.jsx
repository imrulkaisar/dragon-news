import { useContext } from "react";
import Heading2 from "../Components/Heading2";
import { Link, useParams } from "react-router-dom";
import { MainContext } from "../Context/MainContext";
import RightSidebar from "./RightSidebar";
import Title from "../Components/Title";
import NewsCard from "../Components/NewsCard";

const PostTemplate = () => {
  const { blogs } = useContext(MainContext);
  const { id } = useParams();
  const post = blogs?.find((blog) => blog._id === id);
  const editorInsight = blogs.filter((blog) => blog.others_info.is_todays_pick);

  const { title, image_url, details, category_id } = post || {};

  return (
    <div>
      <div className="grid md:grid-cols-4 gap-8">
        <article className="col-span-3 space-y-5">
          <Heading2>Dragon News</Heading2>
          {blogs ? (
            <div className="post p-5 border-2 rounded-lg space-y-5">
              <img src={image_url} alt="" />
              <h1>
                <Title>{title}</Title>
              </h1>
              <p>{details}</p>
              <Link to={`/category/${category_id}`} className="block">
                <button className="bg-highlighter text-white flex  py-2 px-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M19.5 12H4.5M4.5 12L11.25 18.75M4.5 12L11.25 5.25"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>All news in this category</span>
                </button>
              </Link>
            </div>
          ) : (
            <p>Loading post details ....</p>
          )}
          <Heading2>Editor Insight</Heading2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {editorInsight ? (
              editorInsight.map((blog) => (
                <NewsCard key={blog.id} data={blog} />
              ))
            ) : (
              <p>Loading ...</p>
            )}
          </div>
        </article>
        <RightSidebar />
      </div>
    </div>
  );
};

export default PostTemplate;
