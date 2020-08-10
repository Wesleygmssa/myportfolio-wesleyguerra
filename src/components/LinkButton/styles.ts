import styled from "styled-components";

export const Container = styled.a`
  /* styles button link */
  flex: 1;
  margin-left: 5px;
  margin-right: 5px;
  text-align: center;
  color: var(--white);
  border: 1px solid #bfbfbf;
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 16px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.3s;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

// const ButtonLink = styled.a`
//   color: var(--white);
//   border: 1px solid #fff;
//   box-sizing: border-box;
//   cursor: pointer;
//   padding: 16px 16px;
//   font-style: normal;
//   font-weight: bold;
//   font-size: 16px;
//   outline: none;
//   border-radius: 5px;
//   text-decoration: none;
//   display: inline-block;
//   transition: opacity 0.3s;
//   &:hover,
//   &:focus {
//     opacity: 0.5;
//   }
// `;

// export default ButtonLink;
