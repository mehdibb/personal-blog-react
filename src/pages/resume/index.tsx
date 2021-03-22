import React from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import {TopSection, Name, StyledResume, Title, Info} from './styles';


interface Props {
  className?: string;
}

function Resume({className}: Props): React.ReactElement {

  return (
    <div className={className}>
      <TopSection>
        <Name>
          <Col><h1 className="mb-1">Mehdi <b>Babapour</b></h1></Col>
        </Name>
        <Title className="mb-4"><Col>Front End Developer</Col></Title>
        <Info>
          <Col>
            <Row className="mb-2">
              <Col>
                <b className="mr-2">Address</b>
                Tehran, Iran
              </Col>
            </Row>
            <Row className="mb-2">
              <Col>
                <b className="mr-2">Phone</b>
                <a href="tel:(+98) 936-867-6627">(+98) 936-867-6627</a>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col>
                <b className="mr-2">Email</b>
                <a href="mailto:mehdibabapour96@gmail.com">mehdibabapour96@gmail.com</a>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row className="mb-2">
              <Col>
                <b className="mr-2">LinkedIn</b>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mehdi-babapour-7b90781a3/">
                  https://www.linkedin.com/in/mehdi-babapour-7b90781a3/
                </a>
              </Col>
            </Row>
            <Row className="mb-2 mt-auto">
              <Col>
                <b className="mr-2">website</b>
                <a href="https://www.mehdibb.ir" target="_blank" rel="noreferrer">mehdibb.ir</a>
              </Col>
            </Row>
          </Col>
        </Info>
      </TopSection>
    </div>
  )
}

export default StyledResume.withComponent(Resume);