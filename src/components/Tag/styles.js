import styled from "styled-components";

export const Container = styled.span`
  padding: 10px 18px;
  font-size: 12px;
  font-family: "Roboto";
  border-radius: 8px;
  margin-right: 8px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
