import styled from "styled-components";

export const TitleSection = styled.hgroup`
  text-align: ${(props) => (props.TextCenter ? "center" : "left")};
  text-transform: uppercase;

  h1,
  h2 {
    color: #fff;
    text-shadow: 0 0 13px #000;
    font-family: "Play", sans-serif;
  }

  h1 {
    font-size: 2rem;

    &::after {
      content: " ";
      display: block;
      padding-top: 20px;
      width: 60px;
      border-bottom: 6px solid var(--blue);
      margin: ${(props) => (props.MarginAuto ? "0 auto" : 0)};
    }
  }

  h2 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 767px) {
    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1rem;
    }
  }
`;
