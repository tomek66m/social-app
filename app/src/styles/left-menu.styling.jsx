import styled from "styled-components";

export const LeftMenuWrapper = styled.div`
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 50vh;
  padding: 10px;
  h1 {
    padding: 20px;
    border-bottom: 1px solid black;
  }

  ul {
    display: flex;
    flex-direction: column;
    li {
      width: 100%;
      display: flex;
      align-items: center;
      font-size: 1.5em;
      p {
        margin-left: 20px;
      }
      background-color: "red";
    }
  }
`;
