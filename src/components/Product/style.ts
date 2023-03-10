import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 346px;

  border-radius: 5px;
  background-color: var(--white);
  border: 2px solid var(--grey-20);

  margin: 6px 20px 6px 0;

  & > figure {
    width: 100%;
    height: 150px;

    border-radius: 5px 5px 0 0;
    background-color: var(--grey-0);

    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  & > div {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    padding: 16px 19px 23px 20px;

    h3,
    span {
      line-height: 24px;
    }

    & > h3 {
      font-weight: 700;
      font-size: 18px;
    }

    & > p {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;

      color: var(--grey-50);

      padding-top: 14px;
    }

    & > span {
      font-weight: 600;
      font-size: 14px;

      color: var(--color-primary);

      padding: 14px 0;
    }
  }

  @media (max-width: 1300px) {
    min-width: 300px;
  }

  @media (min-width: 1300px) {
    &:hover {
      border-color: var(--gray-100);
      transform: scale(1.1);
      transition: 0.5s;
    }
  }
`;

export { Container };
