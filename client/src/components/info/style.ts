import styled from "styled-components";

export const Container = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  border: 1px solid ${({ theme }) => theme.colors.GRAY_10};
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const ResultTitle = styled.div`
  text-align: center;
  padding: 20px;
  font-size: ${({ theme }) => theme.fontSize.title};
  border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY_10};
  word-break: keep-all;
`;

export const ResultContainer = styled.div`
  padding: 30px 20px;
`;

export const ResultInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.smtitle};
  font-weight: 700;
  margin-bottom: 40px;

  & span {
    box-shadow: inset 0 -10px ${({ theme }) => theme.colors.CYAN};
  }
`;
