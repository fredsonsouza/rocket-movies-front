import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  padding: 32px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
  border-radius: 10px;
  :not(:last-child) {
    margin-bottom: 40px;
  }

  border: none;
  > h1 {
    flex: 1;
    text-align: left;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 4px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  > p {
    position: relative;

    flex: 1;
    text-align: justify;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    overflow: hidden;
    height: 39px;
    margin-right: -1px;
    margin-top: 12px;
    padding-right: 12px;
  }
  > p::before {
    content: "...";
    position: absolute;
    right: 0;
    bottom: 0;
    /* padding: 0 0px 0 20px; */
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
  > footer {
    width: 100%;
    display: flex;
    margin-top: 20px;

    span {
      background: ${({ theme }) => theme.COLORS.GRAY_500};
    }
  }
`;
