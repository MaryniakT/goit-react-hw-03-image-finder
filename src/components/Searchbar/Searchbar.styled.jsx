import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import { ImSearch } from 'react-icons/im';

export const SearchForm = styled(Form)`
  position: fixed;
  top: 0;
  z-index: 50;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin-bottom: 24px;
  background-color: ${p => p.theme.colors.searchBackground};
  box-shadow: ${p => p.theme.shadow.searchShadow};
`;

export const Input = styled(Field)`
  padding: 10px 20px 10px 40px;
  width: 320px;
  height: 35px;
  font-family: inherit;

  border: none;
  outline: none;
  border-radius: 30px;
  transform: scale(1);
  box-shadow: ${p => p.theme.shadow.insetShadow};

  transition: box-shadow ${p => p.theme.cubic.cubicBezier},
    transform ${p => p.theme.cubic.cubicBezier};

  &:focus {
    border: none;
    outline: none;

    transform: scale(1.02);
    box-shadow: ${p => p.theme.shadow.insetHoverShadow};
  }
`;

export const SearchFormBtn = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 35px;
  height: 35px;
  font-family: inherit;
  font-weight: 600;
  text-transform: capitalize;
  background-color: transparent;

  border: none;
  outline: none;
  border-radius: 30px;
  cursor: pointer;

  transition: background-color ${p => p.theme.cubic.cubicBezier},
    box-shadow ${p => p.theme.cubic.cubicBezier};
  color: #615e5e;

  &:hover {
    color: ${p => p.theme.colors.lightBlue};
  }
`;

export const SearchIcon = styled(ImSearch)`
  transform: scale(1);
  transition: transform ${p => p.theme.cubic.cubicBezier},
    fill ${p => p.theme.cubic.cubicBezier};

  &:hover {
    transform: scale(1.2);
    fill: currentColor;
  }
`;

export const Wrapper = styled.div`
  position: relative;
`;