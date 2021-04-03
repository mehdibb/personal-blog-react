import React, { useMemo } from 'react';
import { Col, Row} from 'react-bootstrap';
import {TopSection, Name, StyledResume, Title, Info, Content, StyledSkill, Percentage, Description, StyledExperience} from './styles';


interface Skill {
  proficiency: number;
  title: string;
}

interface Experience {
  startDate: string;
  endDate?: string;
  title: string;
  location: string[];
}

interface WorkHistory extends Experience {
  descriptionItems: string[];
}

function isWorkHistory(object: object): object is WorkHistory {
  return 'startDate' in object &&
    'title' in object &&
    'location' in object &&
    'descriptionItems' in object;
}

const EDUCATION_HISTORY: Experience[] = [
  {
    location: ['University of Tehran', 'Tehran', 'Iran'],
    startDate: '2014-09',
    endDate: '2019-09',
    title: 'Bachelor of Science: Physics',
  },
  {
    location: ['Azad University of Tehran', 'Central Branch', 'Tehran', 'Iran'],
    startDate: '2020-09',
    title: 'MBA: IT Business Administration And Management',
  }
]

const WORK_HISTORY: WorkHistory[] = [
  {
    descriptionItems: [
      'Designed and updated layouts to meet usability and performance requirements',
      'Conducted a variety of maintainable tests (unit tests, integration tests, A/B tests, End to End tests) to deliver optimal browser functionality.',
      'Collected, defined and translated user requirements into project designs and implementation plans',
      'Reviewed code to validate structures, assess security and verify browser, device and operating system compatibility',
      'Trained and supervised a number of team members for ongoing enterprise projects.'
    ],
    location: ['Zardalu', 'Tehran', 'Iran'],
    startDate: '2020-02',
    title: 'Front End Developer',
  },
  {
    descriptionItems: [
      'Practice the fundamentals of web development during the onboarding process.',
      'Do minor coding tasks on the existing React Native app.',
      'Experience the ups and downs of working in a small company targeting the health and fitness market.',
    ],
    location: ['Selfit Group', 'Tehran', 'Iran'],
    startDate: '2018-06',
    endDate: '2019-04',
    title: 'React Native Intern',
  },
  {
    descriptionItems: [
      'Reading and understanding Python code related to Django and Odoo frameworks.',
      'Understanding the basics of a CRM application and how to bootstrap one using Odoo framework',
    ],
    location: ['Pergas Startup', 'Tehran', 'Iran'],
    startDate: '2018-01',
    endDate: '2018-5',
    title: 'Python Developer Intern',
  }
]

const SKILLS: Skill[] = [
  {
    proficiency: 80,
    title: "HTML",
  },
  {
    proficiency: 80,
    title: "CSS, Styled Components, Emotion",
  },
  {
    proficiency: 80,
    title: "Javascript, Functional Programming",
  },
  {
    proficiency: 80,
    title: "React, Function Components",
  },
  {
    proficiency: 90,
    title: "Jest, React Testing Library, Hook Testing Library",
  },
  {
    proficiency: 80,
    title: "Mobx",
  },
  {
    proficiency: 80,
    title: "Typescript, Maintainable Types",
  },
  {
    proficiency: 80,
    title: "i18n, MomentJS",
  },
]

interface SkillProps {
  title: string;
  proficiency: number;
}

function SkillComponent({title, proficiency} : SkillProps): React.ReactElement {
  const proficiencyDescription = useMemo((): string => {
    if (proficiency < 0 || proficiency > 100) {
      throw new Error("proficiency should be a number between 0 and 100");
    }
    if (proficiency < 21) {
      return "Basic";
    }
    else if (proficiency < 41) {
      return "Average";
    }
    else if (proficiency < 61) {
      return "Good";
    }
    else if (proficiency < 81) {
      return "Very Good";
    }
    else {
      return "Excellent";
    }
  }, [proficiency])
  
  return (
    <StyledSkill className="d-flex ml-5 mb-2">
      <Col >{title}</Col>
      <Col className="col-3">
        <Row className="mr-0"><Percentage value={proficiency} /></Row>
        <Row><Description>{proficiencyDescription}</Description></Row>
      </Col>
    </StyledSkill>
  )
}

function ExperienceComponent({item}: {item: Experience | WorkHistory}): React.ReactElement {

  return (
    <StyledExperience>
      <Col className="col-3" >{item.startDate} - {item.endDate || 'Current'}</Col>
      <Col >
        <Row><h4>{item.title}</h4></Row>
        <Row className="font-italic mb-1">{item.location.map((locationItem, index) => `${locationItem}${index !== item.location.length - 1 ? ', ' : ''}`)}</Row>
        {isWorkHistory(item)
          ? <Row>
          <ul>
            {item.descriptionItems.map((descriptionItem) => (
              <li>{descriptionItem}</li>
            ))}
          </ul>
        </Row>
          : null}
      </Col>
    </StyledExperience>
  )
}

interface Props {
  className?: string;
}

function Resume({className}: Props): React.ReactElement {

  return (
    <div className={className}>
      <TopSection className="mb-3">
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
          <Col className="d-flex flex-column">
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
      <Content>
        <Row className="mt-2 mb-2">
          <Col>
            Knowledgeable Front End developer with a noticeable amount of experience building scalable enterprise web 
            application with a deep understanding on performance of React websites. Test driven development is one of 
            my favorite experiences.
          </Col>
        </Row>
        <h3 className="border-bottom border-dark mt-3">Skills</h3>
        {SKILLS.map(({proficiency, title}, index) => <SkillComponent
          proficiency={proficiency}
          title={title}
          key={index}
          />)}
        <h3 className="border-bottom border-dark mt-3">Work History</h3>
        {WORK_HISTORY.map((historyItem, index) => <ExperienceComponent
          item={historyItem}
          key={index}
          />)}
        <h3 className="border-bottom border-dark mt-3">Education</h3>
        {EDUCATION_HISTORY.map((historyItem, index) => <ExperienceComponent
          item={historyItem}
          key={index}
        />
        )}
      </Content>
    </div>
  )
}

export default StyledResume.withComponent(Resume);