import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    padding: 40px 0;
  }
`;

export const Content = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 3px;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 3px;
  }
  > div {
    display: flex;
    flex-direction: row;
    margin-top: 24px;
    gap: 5px;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      margin-left: 10px;
      margin-right: 3px;
    }
  }
  > p {
    margin-top: 40px;
    text-align: justify;
    line-height: 24px;
  }
`;
export const Title = styled.div`
  display: flex;
  align-items: center;

  > h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 47px;
  }
`;
export const Info = styled.div`
  display: flex;
  > img {
    width: 20px;
    height: 20px;
    border-radius: 50px;
  }
  > span {
    font-family: "Roboto";
    display: flex;
    align-items: center;
  }
`;
