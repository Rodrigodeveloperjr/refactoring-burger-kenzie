import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 80px;

  margin: 20px 0;

  display: flex;
  flex-direction: row;

  & > img {
    width: 80px;
    height: 80px;

    border-radius: 5px;
    background-color: var(--grey-20);
  }

  & > div {
    width: 100%;
    max-width: 253px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    padding-left: 10px;

    & > div {
      display: flex;
      flex-direction: column;

      & > h3 {
        font-weight: 700;
        font-size: 14px;
        line-height: 24px;

        padding-bottom: 10px;
      }

      & > p {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;

        color: var(--grey-50);
      }
    }

    & > p {
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;

      cursor: pointer;
      color: var(--grey-10);

      &:hover {
        color: var(--grey-50);
        text-decoration: underline;
      }
    }
  }
`;

export { Container };
