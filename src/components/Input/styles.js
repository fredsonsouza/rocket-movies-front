import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    background: transparent;
    border: 0;

    width: 100%;
    height: 56px;
    padding: 19px 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    &placeholder {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
    }
  }
  > svg {
    margin-left: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`;
