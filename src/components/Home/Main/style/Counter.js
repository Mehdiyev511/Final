import styled from "styled-components";

export const ComponentCounter = styled.section`
  background-color: var(--bg-box);
  padding: 10% 0 16% 0;
  margin-top: -2px;

  .counter__container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    .counter__box {
      background-color: #1a083d;
      padding: 15px;
      text-align: center;
      height: 215px;
      width: 215px;
      border: 1px solid var(--blue);
      box-shadow: 0 0 10px var(--blue);
      transform: rotate(45deg);

      &:nth-child(1) {
        position: relative;
        top: 100px;
        left: -10px;
      }

      &:nth-child(2) {
        position: relative;
        top: -20px;
        left: 10px;
      }

      &:nth-child(3) {
        position: relative;
        top: 120px;
        left: 10px;
      }

      &:nth-child(4) {
        position: relative;
        top: -20px;
        right: -10px;
      }

      figcaption {
        transform: rotate(-45deg);
        margin: 0 auto;
        width: 70%;
        position: relative;
        left: -5px;
        top: 10px;

        img {
          display: block;
          width: 40px;
          margin: 0 auto;
        }

        h2,
        p {
          color: #fff;
        }

        h2 {
          margin: 20px 0;
          font-size: 2rem;
          font-family: "Play", sans-serif;
        }

        p {
          font-family: "Josefin Sans", sans-serif;
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 80px 0 180px 0;

    .counter__container {
      flex-wrap: wrap;
      justify-content: center;

      .counter__box {
        height: auto;
        width: 20%;
        margin: 0 auto;
        transform: rotate(45deg);
        height: 150px;
        width: 150px;

        &:nth-child(1) {
          top: 110px;
          left: 145px;
        }

        &:nth-child(2) {
          top: -20px;
          left: 60px;
        }

        &:nth-child(3) {
          top: 110px;
          left: -25px;
        }

        &:nth-child(4) {
          top: -20px;
          left: -110px;
        }

        figcaption {
          transform: rotate(-45deg);
          width: 100%;
          left: -5px;
          top: 0px;

          img {
            display: block;
            width: 20px;
            margin: 0 auto;
          }

          h2 {
            font-size: 1.3rem;
          }
          p {
            font-size: 0.8rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding: 40px 0 40px 0;

    .counter__container {
      margin-left: 10px;

      .counter__box {
        width: 60%;
        height: auto;
        transform: rotate(0);
        text-align: center;
        margin: 10px auto;

        &:nth-child(n) {
          position: static;
        }

        figcaption {
          transform: rotate(0);
          width: 80%;
          margin-left: 27px;
          p {
            font-size: 1.1rem;
          }
        }
      }
    }
  }
`;
