import styled from "styled-components";

export const MainWrapper = styled.div`
  /* Global styling */
  font-size: 12px;
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  h1 {
    font-size: 2em;
  }
  /* */

  .custom_box_shadow {
    box-shadow: 0 0 1em gray;
  }

  .main__content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 71px;
  }

  .main__content_left {
    margin: 40px;
    width: 600px;
  }
  .main__content_center {
    margin: 40px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .main__content_right {
    margin: 40px;
    width: 600px;
  }
`;
