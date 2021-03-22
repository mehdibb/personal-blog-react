import styled from '@emotion/styled';
import { Col, Container, Row } from 'react-bootstrap';


export const Name = styled(Row)`

  h1 {
    font-size: 72px;
    letter-spacing: 0.2px;

    b {
      font-weight: 700;
    }
  }
`;

export const Title = styled(Row)`
  font-size: 24px;
`;

export const Info = styled(Row)`
  font-size: 18px;

  a {
    color: white;
  }

  b {
    font-weight: 400;
  }
`;

export const TopSection = styled(Col)`
  /* TODO: read from theme */
  background-color: #373d48;
  color: #fff;
`;

export const StyledResume = styled(Container)`
  * {
    font-family: 'Almarai', sans-serif;
    font-weight: 300;
  }
`;