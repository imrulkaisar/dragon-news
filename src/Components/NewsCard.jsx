import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import { FiCalendar } from "react-icons/fi";

const NewsCard = ({ data }) => {
  const { _id, title, thumbnail_url, category_id } = data;
  return (
    <div className="space-y-3">
      <Link to={`/post/${_id}`}>
        <img className="rounded-lg w-full" src={thumbnail_url} alt="" />
      </Link>

      <h5>
        <Link to={`/post/${_id}`}>
          <Title>{title}</Title>
        </Link>
      </h5>

      <div className="flex justify-between items-center">
        <Link to={`/category/${category_id}`}>Sport</Link>
        <div className="flex justify-end items-center gap-2 text-grayText text-base">
          <FiCalendar /> <span>Jan 4, 2022</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
