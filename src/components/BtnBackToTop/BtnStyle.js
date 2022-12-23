import styled from "styled-components";

export const BtnStyle = styled.button`
  border: none;
  background-color: transparent;
  border-radius: 50%;
  position: fixed;
  bottom: 10px;
  right: 10px;
  text-align: center;
  z-index: 2000;
  outline: none;
  display: none;

  .BtnBackToTop__icon {
    font-size: 2.1rem;
    color: var(--blue);
    transition: 0.4s ease;
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid #fff;

    &:hover {
      color: var(--bg-box);
    }
  }

  @media screen and (max-width: 767px) {
    bottom: 0;
    right: 0;

    .BtnBackToTop__icon {
      font-size: 2rem;
    }
  }
`;
