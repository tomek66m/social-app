import React, { useContext } from "react";
import PropTypes from "prop-types";
import { SettingsContext } from "../contexts/SettingsContext";
import { MainWrapper } from "../styles/main-styling";
import Header from "../components/Header";
import LeftMenu from "../components/LeftMenu";
import AddPost from "../components/AddPost";
import PostsList from "../components/PostsList";
import ContactsList from "../components/ContactsList";

const Main = (props) => {
  const { language, setLanguage, theme, setTheme } =
    useContext(SettingsContext);
  return (
    <MainWrapper>
      <Header></Header>
      <div
        className="main__content"
        style={{ backgroundColor: theme.contentBackgroundColor }}
      >
        <div className="main__content_left">
          <LeftMenu></LeftMenu>
        </div>
        <div className="main__content_center">
          <AddPost></AddPost>
          <PostsList></PostsList>
        </div>
        <div className="main__content_right">
          <ContactsList></ContactsList>
        </div>
      </div>
    </MainWrapper>
  );
};

Main.propTypes = {};

export default Main;
