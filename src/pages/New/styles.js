import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;

  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
  }
`;
export const Content = styled.div`
  overflow-y: scroll;
  max-height: 750px;
  max-width: 1120px;
  margin: 40px auto;

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
`;

export const Form = styled.form`
  > header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 40px;
    h1 {
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 47px;
      margin-top: 24px;
    }
  }
  > div {
    display: flex;
    gap: 40px;
    margin-bottom: 32px;
  }
`;
export const Section = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  > div {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    padding: 16px;
    border-radius: 10px;
  }

  > h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    margin-bottom: 22px;
  }
`;
export const Footer = styled.footer`
  max-width: 1120px;
  margin: 30px auto 0;
  gap: 40px;
  display: flex;

  > button:nth-child(1) {
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }
`;
