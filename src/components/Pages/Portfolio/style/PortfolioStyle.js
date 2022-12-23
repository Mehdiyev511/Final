import styled from "styled-components";

export const ComponentPortfolio = styled.section`
  background-color: var(--bg-box);

  .portfolio__container {
    padding: 60px 0;
    margin-top: -2px;

    .portfolio__menu {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      margin-bottom: 60px;

      li {
        font-family: "Josefin Sans", sans-serif;
        font-weight: 700;
        color: var(--muted-gray);
        cursor: pointer;

        &:hover {
          color: var(--blue);
        }
      }
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    .portfolio__gallery {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      overflow: hidden;

      .portfolio__gallery-item {
        margin: 0 auto;
        animation-name: fadeIn;
        animation-duration: 2.4s;
        animation-fill-mode: both;

        .portfolio__gallery-hero {
          position: relative;

          img {
            display: block;
            width: 100%;
          }

          .portfolio__gallery-play {
            position: absolute;
            transform: translate(-50% -50%);
            left: 50%;
            top: 50%;
            border: 2px solid #fff;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            color: #fff;
            background-color: transparent;
          }
        }

        figcaption {
          text-align: center;
          margin-top: 20px;

          h2 {
            color: #fff;
            font-size: 1.3rem;
          }
          p {
            font-family: "Josefin Sans", sans-serif;
            font-weight: 700;
            color: var(--muted-gray);
            line-height: 1.8;
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .portfolio__container {
      padding: 60px 0;

      .portfolio__gallery {
        .portfolio__gallery-item {
          margin: 0 auto;
          width: 45%;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .portfolio__container {
      padding: 50px 0;

      .portfolio__menu {
        width: 90%;
        justify-content: space-between;
        margin: 10px auto;

        li {
          margin: 0 25px 25px 0;
        }
      }

      .portfolio__gallery {
        padding: 20px;
        flex-direction: column;

        .portfolio__gallery-item {
          margin-bottom: 30px;
          width: 100%;

          .portfolio__gallery-hero {
            .portfolio__gallery-play {
              left: 40%;
              top: 40%;
            }
          }

          figcaption {
            h2 {
              font-size: 1.3rem;
            }
            p {
              font-size: 1.1rem;
            }
          }
        }
      }
    }
  }
`;
