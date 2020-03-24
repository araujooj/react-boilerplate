import styled from "styled-components";

export const Content = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  align-self: center;
  background-color: #fff;
  max-width: 1100px;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  margin-top: 5px;
  div {
    text-align: right;
    margin-right: 10px;
  }
  span {
    display: block;
    cursor: pointer;
    color: #419dc1;
    &:hover {
      opacity: 0.7;
    }
    transition: opacity 0.2s;
    margin: 0 25px;
    font-size: 17px;
  }
`;
