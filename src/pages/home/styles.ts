import styled from '@emotion/styled';
import { Button, Form } from 'react-bootstrap';


export const SearchBar = styled(Form.Control)`
  border: unset;
  width: calc(100% - 42px);
  border-radius: unset;

  :focus {
    box-shadow: none;
  }
`;

export const SearchBarButton = styled(Button)`
  background-color: var(--white);
  border: unset;
  border-radius: 0;
  color: inherit;

  :hover {
    background-color: var(--white);
    color: inherit;
  }

  :focus {
    background-color: var(--white);
    color: inherit;
    box-shadow: none;
  }

  :active {
    background-color: var(--white) !important;
    border-color: unset !important;
    color: inherit !important;
  }
`;

export const SearchBarWrapper = styled.div`
    display: flex;
`;

export const StyledForm = styled(Form)`
  width: 100%;
`;