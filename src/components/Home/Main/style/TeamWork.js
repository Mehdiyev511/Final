import styled from "styled-components";

import TeamBg from "../img/team/team-bg.jpg";
import TeamHover from "../img/team/team-hover.png";

export const ComponentTeamWork = styled.section`
  margin-top: -2px;
  background: url(${TeamBg});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 80px 0 0 0;

  .team-work__contents {
    display: flex;
    flex-wrap: wrap;
    margin: -40px 0 80px 0;

    .team-work__card {
      color: #fff;
      position: relative;
      transition: all 1s ease-in;
      width: 25%;

      .team-work__control {
        margin-bottom: 4px;

        button {
          border-radius: 6px;
          background-color: transparent;
          border: 1px solid var(--blue);
          color: #fff;

          &:hover {
            color: var(--blue);
          }
        }
      }

      img {
        width: 100%;
        display: inline-block;
      }

      &:nth-child(4) {
        figcaption {
          bottom: 180px;
        }
      }

      &:nth-child(3) {
        margin-top: 60px;
        figcaption {
          bottom: 120px;
        }
      }

      &:nth-child(2) {
        margin-top: 120px;
        figcaption {
          bottom: 60px;
        }
      }

      &:nth-child(1) {
        margin-top: 180px;
      }

      figcaption {
        text-align: center;
        padding-top: 15px;
        background: url(${TeamHover});
        position: absolute;
        bottom: 0;
        width: 100%;
        max-height: 0;
        overflow: hidden;
        transition: all 0.5s ease-in;

        h2 {
          text-transform: uppercase;
          font-size: 1.4rem;
          text-shadow: 0 1px 3px #000;
          font-family: "Play", sans-serif;
        }

        p {
          font-family: "Josefin Sans", sans-serif;
          font-size: 1.3rem;
          margin: 15px 0;
        }

        ul {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          padding-right: 30px;

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
    }
  }

  .team-work__link {
    text-align: right;
    position: relative;
    top: -90px;

    a {
      &:hover {
        color: var(--blue);
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 50px 30px 0 30px;

    .team-work__contents {
      margin: -40px 0 0 0;
    }
  }

  @media screen and (max-width: 767px) {
    background-size: auto 100%;

    .team-work__title {
      text-align: center;

      h1 {
        &:after {
          margin: 0 auto;
        }
      }
    }

    .team-work__contents {
      justify-content: center;
      flex-wrap: wrap;
      margin: 80px 0 80px 0;

      .team-work__card {
        width: 80%;

        &:nth-child(n) {
          margin-top: 0;

          figcaption {
            bottom: 0;
          }
        }

        figcaption {
          p {
            font-size: 1.2rem;
            margin: 15px 0;
          }
        }
      }
    }

    .team-work__link {
      text-align: center;
      padding-top: 60px;
    }
  }
`;
