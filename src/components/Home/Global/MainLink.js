import styled from "styled-components";

export const MainLink = styled.a`
  display: inline-block;
  color: #fff;
  font-weight: 500;
  position: relative;
  z-index: 1;
  padding: 14px 32px 12px;
  font-size: 1.2rem;
  text-shadow: 0 1px 3px #000;
  cursor: pointer;
  font-family: "Play", sans-serif;

  &::before {
    position: absolute;
    left: 0;
    top: 0;
    height: 30px;
    width: 30px;
    border-left: 2px solid #00bfe7;
    border-top: 2px solid #00bfe7;
    content: "";
    z-index: -1;
  }

  &::after {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 30px;
    width: 30px;
    border-right: 2px solid #00bfe7;
    border-bottom: 2px solid #00bfe7;
    content: "";
    z-index: -1;
  }

  span {
    &:hover {
      color: var(--blue);
      transition: 0.5s ease-in;
    }
  }
`;
