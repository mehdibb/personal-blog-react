import styled from '@emotion/styled';
import { Col, Container, Row } from 'react-bootstrap';


export const Description = styled(Col)`

`;

export const Percentage = styled(Col)<{value: number}>`
  background-color: var(--white);
  height: 10px;
  position: relative;

  ::after {
    position: absolute;
    left: 0;
    top: 0;
    content: " ";
    width: ${({value}): string => `${value}%`};
    height: 100%;
    background-color: var(--gray-dark);
  }
`;

export const StyledSkill = styled(Row)`
  font-size: 18px;
`;

export const StyledExperience = styled(Row)`
  
`;

export const Name = styled(Row)`

  h1 {
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
    color: var(--white);
    word-break: break-all;
  }

  b {
    font-weight: 400;
  }
`;

export const TopSection = styled(Col)`
  background-color: var(--gray-dark);
  color: var(--white);
`;

export const Content = styled(Col)`
  h3 {
    font-weight: 600;
    color: var(--gray-dark)
  }
`;

export const StyledResume = styled(Container)`
  background-color: var(--gray-light);

  * {
    font-family: 'Almarai', sans-serif;
    font-weight: 300;
  }
`;