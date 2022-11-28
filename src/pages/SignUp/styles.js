import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 63px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    margin: 48px 0 24px 0;
  }

  > p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
  > a {
    text-decoration: none;
    margin-top: 42px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`;
