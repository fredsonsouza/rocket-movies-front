import styled from "styled-components";

export const Container = styled.span`
  color: ${({ theme }) => theme.COLORS.PINK};
  display: flex;
  align-items: center;
  gap: 10px;
  > svg {
    font-size: ${({ isLargeStar }) => (isLargeStar ? "27px" : "19px")};
  }
`;
