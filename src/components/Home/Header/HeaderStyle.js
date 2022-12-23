import styled from "styled-components";

export const ComponentHeader = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 999;
  padding: 30px 0 15px 0;

  .header__container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;

    .header__logo {
      margin-bottom: 15px;

      img {
        width: 100%;
        display: block;
      }
    }

    .header__nav {
      .header__btn-menu {
        background-color: var(--blue);
        width: 85px;
        border: none;
        border-radius: 5px;
        padding: 7px;
        display: none;

        span {
          font-size: 1rem;
          text-transform: uppercase;
          float: left;
          color: #fff;
          font-weight: 700;
          text-shadow: 0 1px 3px #000;
          margin-right: 5px;
        }

        .header__menu-icon {
          color: #fff;
          font-size: 1rem;
        }
      }

      .header__menu {
        display: flex;
        align-items: center;

        li + li {
          margin-left: 35px;
        }

        a {
          color: #fff;
          text-transform: uppercase;
          font-weight: 500;
          font-family: "Play", sans-serif;
          font-size: 1rem;
          position: relative;
          display: block;

          &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 0;
            left: 0;
            top: 25.2px;
            background-color: var(--blue);
            visibility: hidden;
            transform: scaleX(0);
            transition: all 0.3s ease-in-out 0s;
          }

          &:hover:before {
            visibility: visible;
            transform: scaleX(1);
          }
        }

        .active {
          border-bottom: 2px solid var(--blue);

          &::before {
            height: 1px;
          }
        }
      }
    }

    .header__networks {
      display: flex;
      border-left: 1px solid rgba(255, 255, 255, 0.1);

      li + li {
        margin-left: 35px;
      }

      li {
        a {
          color: #fff;

          &:hover {
            color: var(--blue);
          }
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 15px;

    .header__container {
      .header__logo {
        margin-bottom: 0;
      }

      .header__menu {
        li {
          padding-top: 17px;
        }
      }
      .header__networks {
        display: none;
      }
    }
  }

  @media screen and (max-width: 767px) {
    background-color: var(--bg-box) !important;
    padding: 15px;
    top: 0;

    .header__container {
      justify-content: space-between;

      .header__logo {
        margin-bottom: 0;
      }

      .header__nav {
        .header__btn-menu {
          display: block;
        }

        .header__menu {
          background-color: var(--bg-box);
          display: block;
          position: absolute;
          left: 20px;
          right: 20px;
          top: 67px;
          border-radius: 2px;
          overflow: hidden;
          max-height: 0;
          z-index: 999;

          li + li {
            margin-left: 0;
          }

          li {
            margin: 14px 0 14px -14px;
            padding-top: 0;
            display: block;

            &:first-child {
              margin-left: 0;
            }
          }

          a {
            display: inline-block;
            padding-bottom: 2px;
          }
        }
      }
    }
  }
`;
