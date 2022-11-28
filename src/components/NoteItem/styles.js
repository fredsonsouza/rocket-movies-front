import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_500};

  color: ${({ theme }) => theme.COLORS.WHITE};
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

  border-radius: 10px;
  padding-right: 16px;

  > button {
    display: flex;
    border: none;
    background: none;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
  > input {
    height: 56px;
    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;
