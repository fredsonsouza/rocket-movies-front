import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;

  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.PINK};
  font-family: "Roboto Slab", serif;

  > svg {
    margin-right: 8px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;
