import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 150px;
  border: 0;
  resize: none;
  margin-bottom: 8px;
  border-radius: 10px;
  padding: 16px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

  &placeholder {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_200};
  }
`;
