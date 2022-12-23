import styled from "styled-components";

import BreadcrumbBg from "./breadcrumb-bg.jpg";

export const ComponentBreadcrumb = styled.div`
  background: url(${BreadcrumbBg});
  padding: 80px 0 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  hgroup {
    padding-top: 5%;
    text-align: center;

    h1 {
      color: #fff;
      font-family: "Play", sans-serif;
    }

    h2 {
      font-family: "Josefin Sans", sans-serif;
      font-weight: 700;
      color: var(--dark-gray);
      font-size: 1.3rem;
      margin-top: 15px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    padding: 100px 0 50px 0;
  }

  @media screen and (max-width: 767px) {
    padding: 120px 0 50px 0;
    hgroup {
      padding-top: 0;
    }
  }
`;
