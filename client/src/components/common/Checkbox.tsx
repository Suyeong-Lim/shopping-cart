import React from "react";
import styled from "styled-components";
import theme from "src/styles/theme";

type CheckboxProps = {
  id: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: () => void;
};
const Checkbox = ({
  id,
  label,
  checked,
  disabled,
  onChange,
}: CheckboxProps) => {
  return (
    <CheckContainer>
      <label htmlFor={id}>
        <StyledInput
          id={id}
          type="checkbox"
          onChange={onChange}
          checked={checked}
          disabled={disabled}
        />
      </label>
      <span>{label}</span>
    </CheckContainer>
  );
};

const CheckContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid ${theme.colors.MINT_500};
  border-radius: 0.2rem;
  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${theme.colors.MINT_500};
  }
`;

export default Checkbox;
