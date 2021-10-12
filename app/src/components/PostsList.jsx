import React from "react";
import PropTypes from "prop-types";
import { PostsListWrapper } from "../styles/posts-list-styling";
import Post from "./Post";

const PostsList = (props) => {
  return (
    <PostsListWrapper>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </PostsListWrapper>
  );
};

PostsList.propTypes = {};

export default PostsList;
