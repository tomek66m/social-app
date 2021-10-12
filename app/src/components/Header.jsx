import React, { useContext } from "react";
import PropTypes from "prop-types";
import { HeaderWrapper } from "../styles/header-styling";
import { SettingsContext } from "../contexts/SettingsContext";
import { StyledInput } from "../styles/reusable-styling";
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Header = ({ props }) => {
  const { language, setLanguage, theme, setTheme } =
    useContext(SettingsContext);
  return (
    <HeaderWrapper
      style={{
        backgroundColor: theme.headerBackgroundColor,
        color: theme.headerTextColor,
      }}
    >
      <div className="header__left">
        <h1>{language.app_name}</h1>
      </div>
      <div className="header__center">
        <SearchIcon id="search_icon"></SearchIcon>
        <StyledInput
          type="search"
          style={{
            backgroundColor: theme.headerInputColor,
            color: theme.headerTextColor,
          }}
          placeholder={language.header_input_search_placeholder}
        ></StyledInput>
      </div>
      <div className="header__right">
        <MessageIcon></MessageIcon>
        <NotificationsIcon></NotificationsIcon>
        <PersonOutlineIcon></PersonOutlineIcon>
        <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
      </div>
    </HeaderWrapper>
  );
};

Header.propTypes = {};

export default Header;
