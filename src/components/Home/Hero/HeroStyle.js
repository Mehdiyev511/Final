import styled from "styled-components";

export const ComponentHero = styled.section`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 100vh;

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    display: none;
  }

  .carousel {
    position: relative;

    .carousel-indicators {
      position: absolute;
      top: 73%;
      left: -600px;

      button {
        border-radius: 50%;
        width: 20px;
        height: 20px;
      }
    }

    .carousel__item {
      img {
        display: block;
        width: 100vw;
        height: 100vh;
      }

      .carousel__description {
        position: absolute;
        top: 60%;
        transform: translateY(-60%);
        left: 100px;

        text-align: center;
        height: 230px;

        h2 {
          font-size: 2rem;
          font-family: "Play", sans-serif;
        }
        h3 {
          font-size: 3rem;
          font-family: "Play", sans-serif;
        }

        h2,
        h3,
        a {
          color: #fff;
          text-shadow: 0 1px 3px #000;
        }

        a {
          margin-top: 20px;
          font-size: 1rem;

          &:hover {
            color: var(--blue);
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    background-size: 100% 100%;
    height: 100%;

    .carousel {
      .carousel-indicators {
        top: 80%;
        left: 15%;
        transform: translateX(-61%);
      }

      .carousel__item {
        img {
          height: 400px;
        }

        .carousel__description {
          position: absolute;
          top: 80%;
          transform: translateY(-70%);
          left: 50px;

          h2 {
            font-size: 1rem;
            margin: 5px 0;
          }
          h3 {
            font-size: 1.5rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    background-size: 100% 100%;
    height: 300px;

    .carousel {
      .carousel-indicators {
        top: 80%;
        left: 20px;
      }

      .carousel__item {
        img {
          height: 350px;
        }

        .carousel__description {
          position: absolute;
          top: 90%;
          left: 0;
          transform: translateY(-90%);
          width: 100%;

          h2,
          h3 {
            font-size: 1rem !important;
          }

          a {
            font-size: 0.8rem;
          }
        }
      }
    }
  }
`;
