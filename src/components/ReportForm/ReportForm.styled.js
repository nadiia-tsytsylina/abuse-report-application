import styled from '@emotion/styled';

export const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
`;

export const ErrorMessage = styled('p')`
  color: var(--error-color);
  font-size: 12px;
  font-weight: 500;
`;
