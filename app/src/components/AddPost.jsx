import React from "react";
import PropTypes from "prop-types";
import { AddPostWrapper } from "../styles/add-post-styling";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const AddPost = (props) => {
  return (
    <AddPostWrapper className="custom_box_shadow">
      <AccountCircleIcon></AccountCircleIcon>
      <input type="text"></input>
    </AddPostWrapper>
  );
};

AddPost.propTypes = {};

export default AddPost;
