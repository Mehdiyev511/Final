import styled from "styled-components";

import CalltoHero from "../img/callto/callto-bg.jpg";

export const ComponentCallto = styled.section`
  background: url(${CalltoHero});
  background-size: 100% 100%;
  margin-top: -2px;

  .callto__hero {
    width: 100%;
    padding: 100px 70px;

    h1,
    p {
      color: #fff;
      text-shadow: 0 1px 3px #000;
    }

    h1 {
      width: 60%;
      font-weight: 700;
      font-family: "Play", sans-serif;
    }

    p {
      font-family: "Josefin Sans", sans-serif;
      margin: 40px 0 30px 0;
    }

    a {
      display: block;
      width: 200px;
      color: #fff;
      background-color: var(--blue);
      padding: 7px;
      border-radius: 7px;
      text-align: center;

      &:hover {
        background-color: #fff;
        color: var(--blue);
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    background-size: 100% 100%;
    background-color: rgba(0, 0, 0, 0.5);

    .callto__hero {
      padding: 100px 70px;

      h1 {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 767px) {
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.5);

    .callto__hero {
      text-align: center;
      padding: 80px 30px;

      h1 {
        font-size: 1.5rem;
        width: 90%;
        margin: 0 auto;
      }

      a {
        margin: 0 auto;
      }
    }
  }
`;
