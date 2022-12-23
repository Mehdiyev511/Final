import styled from "styled-components";

export const ComponentContact = styled.div`
  background-color: var(--bg-box);
  padding: 80px 10px 60px 10px;
  margin-top: -2px;

  .contact__container {
    display: flex;
    justify-content: space-between;

    .contact__item {
      display: flex;

      .contact__item-icon {
        margin-right: 20px;
        height: 70px;
        width: 70px;
        border: 1px solid rgba(225, 225, 225, 0.5);
        line-height: 80px;
        text-align: center;
        border-radius: 50%;

        .contact__font {
          font-size: 1.8rem;
          color: rgba(225, 225, 225, 0.5);
        }
      }

      .contact__item-description {
        margin-top: 4px;

        h2 {
          color: #fff;
          font-family: "Play", sans-serif;
          font-size: 1.4rem;
        }

        p {
          font-family: "Josefin Sans", sans-serif;
          font-weight: 700;
          color: var(--muted-gray);
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    padding: 80px 0 0 0;

    .contact__container {
      .contact__item {
        align-items: top;
        height: 100px;

        .contact__item-icon {
          height: 50px;
          width: 50px;
          line-height: 53px;

          .contact__font {
            font-size: 1.4rem;
          }
        }

        .contact__item-description {
          margin-top: 0;

          h2 {
            font-size: 1.1rem;
          }

          p {
            font-size: 0.9rem;
            width: 100%;
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding: 60px 0 30px 0;
    .contact__container {
      flex-direction: column;
      width: 100%;

      .contact__item {
        width: 100%;
        align-items: top;
        margin-bottom: 20px;

        .contact__item-icon {
          height: 50px;
          width: 50px;
          line-height: 50px;

          .contact__font {
            font-size: 1rem;
          }
        }

        .contact__item-description {
          margin-top: 0;

          h2 {
            font-size: 1.4rem;
          }

          p {
            font-size: 1rem;
          }
        }
      }
    }
  }
`;

export const ComponentGoogleMaps = styled.div`
  background-color: var(--bg-box);

  .contact-location__container {
    padding: 30px 30px 80px 30px;
    display: flex;

    .contact-location__form {
      width: 60%;
      margin-top: -10px;
      padding-left: 40px;

      h2 {
        color: #fff;
        font-family: "Play", sans-serif;
        font-size: 2.4rem;
      }

      input {
        height: 50px;
        width: 100%;
        border: 1px solid rgba(225, 225, 225, 0.5);
        background: transparent;
        font-size: 16px;
        color: #adadad;
        padding-left: 20px;
        font-weight: 300;
        margin-right: 20px;
        margin-bottom: 20px;
      }

      textarea {
        height: 110px;
        width: 100%;
        border: 1px solid rgba(225, 225, 225, 0.5);
        background: transparent;
        font-size: 16px;
        color: #adadad;
        padding-top: 12px;
        padding-left: 20px;
        font-weight: 300;
        margin-bottom: 14px;
        resize: none;
      }

      button {
        font-size: 15px;
        color: #fff;
        background: var(--blue);
        font-family: "Play", sans-serif;
        font-weight: 700;
        border: none;
        display: inline-block;
        text-transform: uppercase;
        letter-spacing: 2px;
        padding: 14px 34px 12px;
        width: 100%;
        border-radius: 5px;

        &:hover {
          background-color: #fff;
          color: var(--blue);
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 0 0 20px 0;
    .contact-location__container {
      flex-direction: column;

      .contact-location__form {
        margin: 70px auto 0 auto;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .contact-location__container {
      flex-direction: column;
      padding: 30px 0 80px 0;

      .contact-location__form {
        margin: 50px auto 0 auto;
        width: 85%;
        padding-left: 0;
        text-align: center;
      }
    }
  }
`;
