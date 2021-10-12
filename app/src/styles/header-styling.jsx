import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 71px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .header__left {
    margin-left: 60px;
    mragin-right: 20px;
  }
  .header__center {
    height: 60px;
    width: 800px;
    display: flex;
    align-items: center;
    input[type="search"] {
      height: 40px;
    }
  }
  .header__right {
    margin-left: 20px;
    margin-right: 60px;
    width: 200px;
    display: flex;
    justify-content: space-between;
  }

  /* Hiding find input field */
`;
