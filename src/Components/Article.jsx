import { Link } from "react-router-dom";
import Title from "./Title";
import { FiBookmark, FiShare2 } from "react-icons/fi";
import { AiFillStar, AiOutlineStar, AiFillEye } from "react-icons/ai";
import Rating from "react-rating";

const Article = ({ data }) => {
  const {
    _id,
    title,
    thumbnail_url,
    author: { name, published_date, img },
    rating: { number },
    total_view,
    details,
  } = data;

  const excerpt = details.split(" ").slice(0, 40).join(" ");

  return (
    <article className="border-2 rounded-lg">
      <div className="bg-grayBg p-4 flex justify-between items-center">
        <div className="author flex gap-4 items-center">
          <img
            className="w-10 h-10 rounded-full"
            src={
              img ||
              "https://github.com/ProgrammingHero1/dragon-news-resources/blob/main/assets/user.png?raw=true"
            }
            alt=""
          />
          <div>
            <p className="text-heading font-semibold">{name || "Admin"}</p>
            <p className="text-sm">{published_date || "Just Now"}</p>
          </div>
        </div>
        <div className="icons text-xl text-text space-x-3">
          <button>
            <FiBookmark />
          </button>
          <button>
            <FiShare2 />
          </button>
        </div>
      </div>
      <div className="p-5 space-y-4">
        <Link to={`/post/${_id}`}>
          <Title>{title}</Title>
        </Link>

        <Link to={`/post/${_id}`}>
          <img className="w-full" src={thumbnail_url} alt="" />
        </Link>

        <p className="">
          {excerpt}...{" "}
          <Link to={`/post/${_id}`}>
            <span className="text-golden font-semibold">Read More</span>
          </Link>
        </p>

        <hr />

        <div className="flex justify-between">
          <div className="rating flex items-center gap-3 text-xl">
            <Rating
              className="text-golden text-2xl"
              initialRating={number}
              fullSymbol={<AiFillStar />}
              emptySymbol={<AiOutlineStar />}
              readonly={true}
            />
            <span>{number}</span>
          </div>
          <div className="views flex items-center gap-2 text-md">
            <AiFillEye className="text-2xl text-text" />
            <span>{total_view || "No views"}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Article;
