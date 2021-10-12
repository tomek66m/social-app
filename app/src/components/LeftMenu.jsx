import React, { useContext } from "react";
import PropTypes from "prop-types";
import { LeftMenuWrapper } from "../styles/left-menu.styling";
import { SettingsContext } from "../contexts/SettingsContext";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

const LeftMenu = (props) => {
  const { language, setLanguage, theme, setTheme } =
    useContext(SettingsContext);

  const highlightOnMouseEnter = (e) => {
    console.log(e);
    e.target.style.backgroundColor = theme.mainOnHoverColor;
  };
  const unHighlightOnMouseLeave = (e) => {
    console.log(e);
    e.target.style.backgroundColor = theme.contentBackgroundColor;
  };

  return (
    <LeftMenuWrapper
      style={{
        backgroundColor: theme.contentComponentsColor,
        color: theme.contentTextColor,
      }}
      className="custom_box_shadow"
    >
      <h1>{language.left_menu_header}</h1>
      <ul>
        <li
          onMouseEnter={highlightOnMouseEnter}
          onMouseLeave={unHighlightOnMouseLeave}
        >
          <HomeIcon
            style={{
              color: theme.headerBackgroundColor,
            }}
          ></HomeIcon>
          <p>{language.left_menu_main_page}</p>
        </li>
        <li
          onMouseEnter={highlightOnMouseEnter}
          onMouseLeave={unHighlightOnMouseLeave}
        >
          <EmailIcon style={{ color: theme.headerBackgroundColor }}></EmailIcon>
          <p>{language.left_menu_messages}</p>
        </li>
        <li
          onMouseEnter={highlightOnMouseEnter}
          onMouseLeave={unHighlightOnMouseLeave}
        >
          <SupervisorAccountIcon
            style={{ color: theme.headerBackgroundColor }}
          ></SupervisorAccountIcon>
          <p>{language.left_menu_friends}</p>
        </li>
      </ul>
    </LeftMenuWrapper>
  );
};

LeftMenu.propTypes = {};

export default LeftMenu;
