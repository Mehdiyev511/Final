import styled from "styled-components";

import ServicesHero from "../img/calltos-bg.jpg";

export const ComponentServices = styled.div`
  background-color: var(--bg-box);
  padding: 80px 30px;
  margin-top: -2px;

  .our-services__container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;

    .our-services__item {
      width: 30%;

      &:hover {
        img {
          transform: rotate3d(0, 0, 1, 45deg);
        }
      }

      img {
        width: 55px;
        display: block;
        border: 2px solid var(--blue);
        padding: 10px;
        transition: all ease-in 0.5s;
      }
      figcaption {
        h2 {
          color: #fff;
          font-family: "Play", sans-serif;
          font-size: 1.2rem;
          margin: 15px 0;
        }
        p {
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          font-weight: 700;
          color: var(--muted-gray);
          line-height: 1.8;
          font-size: 0.8rem;
        }
      }
    }
  }

  .our-services__hero {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${ServicesHero});
    background-position: center;
    background-size: 100% 100%;
    margin-top: 30px;

    .our-services__hero-description {
      padding: 50px 0 50px 0;
      display: flex;
      flex-direction: column;

      hgroup {
        text-align: center;

        h1 {
          text-shadow: 0 0 13px #000;
          font-family: "Play", sans-serif;
          color: #fff;
          width: 60%;
          margin: 0 auto;
        }

        h2 {
          font-family: "Josefin Sans", sans-serif;
          font-weight: 700;
          color: var(--muted-gray);
          line-height: 1.5;
          margin: 40px 0;
          font-size: 1.3rem;
        }
      }

      .our-services__start {
        background-color: var(--blue);
        padding: 10px;
        border: none;
        color: #fff;
        border-radius: 3px;
        width: auto;
        margin: 0 auto;

        &:hover {
          background-color: #fff;
          color: var(--blue);
        }
      }
    }
  }

  .our-services__carousel-container {
    margin: 80px auto 0 auto;

    .react-multiple-carousel__arrow--right {
      display: none;
    }

    .react-multiple-carousel__arrow--left {
      display: none;
    }

    .our-services__carousel {
      text-align: center;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .our-services__container {
      .our-services__item {
        width: 47%;
      }
    }

    .our-services__hero {
      .our-services__hero-description {
        padding: 50px 0 50px 0;
        display: flex;
        flex-direction: column;

        hgroup {
          h1 {
            font-size: 2rem;
            width: 80%;
            margin: 0 auto;
          }

          h2 {
            font-size: 1.5rem;
            margin: 30px auto;
          }
        }

        .our-services__start {
          text-align: center;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding: 80px 0;

    .our-services__container {
      flex-direction: column;
      margin-left: 5px;

      .our-services__item {
        width: 100%;
        margin-bottom: 30px;

        figcaption {
          p {
            font-size: 0.9rem;
            width: 90%;
          }
        }
      }
    }

    .our-services__hero {
      .our-services__hero-description {
        padding: 50px 0 50px 0;

        hgroup {
          text-align: left;

          h1 {
            font-size: 1.3rem;
            width: 100%;
          }

          h2 {
            font-size: 1rem;
            margin: 30px 0;
          }
        }
      }
    }
  }
`;
