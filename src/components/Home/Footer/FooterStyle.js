import styled from "styled-components";

export const ComponentFooter = styled.footer`
  background-color: #0a0119;
  padding: 40px 10px;
  margin-top: -2px;

  .footer__container-networks {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .footer__logo {
      img {
        width: 100%;
        display: block;
      }
    }

    .footer__networks {
      display: flex;

      li {
        a {
          display: block;
          font-size: 1rem;
          color: #ffffff;
          height: 40px;
          width: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          line-height: 40px;
          text-align: center;
          margin-right: 6px;
        }
      }
    }
  }

  .footer__container {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .footer__contents + .footer__contents {
      margin-left: 4%;
    }

    .footer__contents {
      margin: 50px 0 30px 0;
      width: 30%;
      min-height: 190px;
      height: auto;

      &:nth-child(2) {
        width: 20%;
      }

      &:nth-child(3) {
        width: 18%;
      }

      h2,
      a {
        color: #fff;
      }

      h2 {
        font-size: 1.3rem;
        font-family: "Play", sans-serif;
        margin-bottom: 20px;
      }

      p {
        font-family: "Josefin Sans", sans-serif;
        font-weight: 700;
        color: var(--muted-gray);
        margin-bottom: 20px;
        font-size: 0.9rem;
      }

      a {
        font-family: "Josefin Sans", sans-serif;

        &:hover {
          color: var(--blue);
        }
      }

      ul {
        padding-left: 0;
      }

      form {
        display: flex;

        input {
          border: 1px solid #544e5e;
          background-color: transparent;
          border-right: transparent;
          outline: none;
          color: #fff;
          padding-left: 20px;
          position: relative;
          &::placeholder {
            color: var(--muted-gray);
          }
        }

        button {
          background-color: var(--blue);
          color: #fff;
          border: none;
          font-size: 1.3rem;
          padding: 5px;
          width: 50px;
        }
      }
    }
  }

  .footer__copyright {
    p {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-weight: 700;
      color: var(--muted-gray);
      margin-top: 40px;
      text-align: center;

      span {
        color: var(--blue);
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    .footer__container {
      flex-wrap: wrap;
      justify-content: center;
      margin: 30px auto;
      width: 90%;

      .footer__contents + .footer__contents {
        margin-left: 0;
      }

      .footer__contents {
        width: 50%;
        text-align: center;
        height: auto;
        margin-bottom: -12px;

        p {
          width: 90%;
          margin: 15px auto;
          font-size: 0.9rem;
        }

        &:nth-child(1) {
          order: 1;
        }

        &:nth-child(2) {
          order: 4;
          width: 50%;
        }

        &:nth-child(3) {
          order: 3;
          width: 50%;
        }

        &:nth-child(4) {
          order: 2;
        }

        h2 {
          font-size: 1.2rem;
        }

        form {
          justify-content: center;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .footer__container-networks {
      flex-direction: column;
      align-items: flex-start;

      .footer__networks {
        margin: 30px 0 40px 0;
        padding-left: 0;
        width: 100%;
      }

      .footer__logo {
        img {
          width: 100%;
        }
      }
    }
    .footer__container {
      flex-direction: column;
      padding: 30px 10px;

      .footer__contents + .footer__contents {
        margin-left: 0;
      }

      .footer__contents {
        min-height: auto;
        margin: 0 0 20px 0;

        &:nth-child(n) {
          width: 100%;
        }

        p {
          font-size: 0.9rem;
        }

        form {
          input {
            width: 80%;
          }
        }
      }
    }
  }
`;
