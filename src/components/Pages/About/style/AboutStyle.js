import styled from "styled-components";

import TestimonialBg from "../img/testimonial-bg.jpg";

export const ComponentAbout = styled.div`
  background-color: var(--bg-box);
  margin-top: -2px;

  //global paragraph
  p {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 700;
    color: var(--muted-gray);
    line-height: 1.8;
  }

  .about__container {
    padding: 60px 25px 40px 25px;
    display: flex;
    justify-content: space-between;

    .about__pic {
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: 100%;

      img {
        width: 100%;
        object-fit: cover;
      }

      figure:nth-child(1) {
        grid-row: 1/3;

        img {
          height: 100%;
        }
      }

      figure:nth-child(2) {
        img {
          height: 250px;
        }
      }
    }

    .about__description {
      width: 90%;
      margin-left: 30px;

      .about__services {
        display: flex;
        margin-top: 8%;

        .about__services-item {
          &:hover {
            img {
              transform: rotate3d(0, 0, 1, 45deg);
            }
          }

          img {
            border: 2px solid var(--blue);
            padding: 10px;
            transition: all ease-in 0.5s;
          }

          figcaption {
            h3 {
              color: #fff;
              font-size: 1.1rem;
              margin: 40px 0 20px 0;
            }

            p {
              width: 95%;
              font-size: 0.8rem;
            }
          }
        }
      }

      .about__description-text {
        font-size: 1rem;
        width: 100%;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    .about__container {
      flex-direction: column;
      padding: 60px 0 30px 0;

      .about__pic {
        height: 35vh;
        width: 90%;
        margin: 0 auto;
        order: 2;

        figure:nth-child(1) {
          img {
            height: 50%;
          }
        }

        figure:nth-child(2) {
          img {
            height: 25%;
          }
        }
      }

      .about__description {
        order: 1;
        margin-bottom: 30px;

        .about__services {
          .about__services-item {
            figcaption {
              p {
                width: 90% !important;
              }
            }
          }
        }

        .about__description-text {
          font-size: 1rem;
          width: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .about__container {
      flex-direction: column;
      padding: 0 0 20px 0;

      .about__pic {
        order: 1;
        width: 80%;
        padding: 20px;
        margin: 0 auto;

        figure:nth-child(1) {
          img {
            height: 100%;
          }
        }

        figure:nth-child(2) {
          img {
            height: 50%;
          }
        }
      }

      .about__description {
        order: 2;
        width: auto;
        margin: 15px 0 10px 25px;

        .about__services {
          flex-direction: column;

          .about__services-item {
            figcaption {
              p {
                width: 95%;
                font-size: 1rem;
              }
            }
          }
        }

        .about__description-text {
          width: 95%;
          font-size: 0.9rem;
        }
      }
    }
  }
`;

export const AboutTestimonialStyle = styled.div`
  background: url(${TestimonialBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  margin-top: -2px;
  padding: 80px 0;

  .react-multiple-carousel__arrow--right {
    display: none;
  }

  .react-multiple-carousel__arrow--left {
    display: none;
  }

  .testimonial__carousel-item {
    display: flex;
    flex-direction: column;

    .testomial__comments {
      padding: 30px 40px 25px 30px;
      border: 1px solid #3d3a64;
      margin: 80px 25px 20px 0;
      border-radius: 5px;

      p {
        color: #fff;
        font-family: "Josefin Sans", sans-serif;
        font-style: italic;
        line-height: 30px;
        font-size: 1.1rem;
        text-shadow: 0 1px 3px #000;
      }
    }

    .testimonial__author {
      display: flex;
      margin-bottom: 80px;

      img {
        border-radius: 50%;
        margin-left: 30px;
      }

      figcaption {
        margin-left: 20px;

        hgroup {
          color: #fff;

          h5 {
            font-family: "Josefin Sans", sans-serif;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 50px 0;
    .testimonial__carousel-item {
      .testomial__comments {
        margin: 80px 25px 20px 25px;
        p {
          font-size: 0.9rem;
        }
      }
    }
  }
`;
