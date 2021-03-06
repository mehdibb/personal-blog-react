import React, { useCallback, useEffect, useState } from 'react';
import {
  Col, Form, Row,
} from 'react-bootstrap';
import {
  getAuthor, Author, iconsMap, updateAuthorField,
} from '../../lib/utilities';
import {
  Categories, EditableText, IconButton, TagsGroup,
} from '../../lib/components';
import { SearchBar, SearchBarButton, SearchBarWrapper, StyledForm } from './styles';


const latestPosts = [
  { id: 'id1', text: 'This is the text for first post' },
  { id: 'id2', text: 'And this one is for the second post' },
];

export default function Home(): React.ReactElement {
  const [author, setAuthor] = useState<Author | undefined>();

  useEffect(() => {
    async function fetchAuthor(): Promise<void> {
      setAuthor(await getAuthor());
    }
    fetchAuthor();
  }, []);
  
  const [
    authorShortDescription,
    setAuthorShortDescription,
  ] = useState<string | undefined>(undefined);

  const handleSubmitDescription = useCallback(async (value: string): Promise<void> => {
    const response = await updateAuthorField('shortDescription', value);

    if (!response) {
      return;
    }
    
    setAuthorShortDescription(response.fields.shortDescription['en-US']);
  }, []);

  return (
    <>
      <Row>
        <Col sm="9">
          <h2>Blog</h2>
          <p className="mb-5">
            Our everyday thoughts are presented here Music, video presentations, photo-shootings and
            more.
            Our everyday thoughts are presented here Music, video presentations, photo-shootings and
            more.
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm="9">Posts</Col>
        <Col sm="3" className="px-4">
          <Row>
            {author 
            ? <img
              alt={author.picture.description}
              src={author.picture.url}
              className="mb-3"
              style={{ width: '100%', height: 'auto' }}
            />
          : null}
          </Row>
          <Row><h4>About Me</h4></Row>
          <Row className="mb-3">
            {author
              ? <EditableText onSubmit={handleSubmitDescription}>
                {authorShortDescription == null ? author.shortDescription : authorShortDescription}
              </EditableText>
              : null}
          </Row>
          <Row className="mb-2"><h4>Follow Me</h4></Row>
          <Row className="mb-5">
            {author?.socialLinks.map(({ link, title, type }) => (
              // eslint-disable-next-line jsx-a11y/control-has-associated-label
              <a href={link} target="_blank" rel="noreferrer" key={title}><IconButton Icon={iconsMap(type)} title={title} /></a>
            ))}
          </Row>
          <Row><h4>Twitter</h4></Row>
          <Row><p>coming soon...</p></Row>
          <Row className="mb-4">
            <StyledForm>
              <Form.Group controlId="aboutMe.search">
                <Form.Label />
                <SearchBarWrapper>
                  <SearchBar placeholder="Search site..."/>
                  <SearchBarButton>GO</SearchBarButton>
                </SearchBarWrapper>
              </Form.Group>
            </StyledForm>
          </Row>
          <Row className="mb-2"><h4>Tags</h4></Row>
          <Row className="mb-4">
            {/* TODO: implement tags */}
            <TagsGroup
              items={[
                { id: '1', text: 'text1' },
                { id: '2', text: 'text1232' },
                { id: '3', text: 'text233' },
                { id: '4', text: 'text123123123124' },
                { id: '5', text: 'text5123' },
                { id: '6', text: 'text6123232' },
                { id: '7', text: 'text7' },
                { id: '8', text: 'text8' },
              ]}
              onClick={() => {}}
            />
          </Row>
          <Row className="mb-2"><h4>Categories</h4></Row>
          <Row>
            {/* TODO: implement categories */}
            <Categories
              items={[
                { count: 5, id: '1', text: 'General' },
                { count: 2, id: '2', text: 'Lifestyle' },
                { count: 1, id: '3', text: 'Magazine' },
                { count: 3, id: '4', text: 'Travel' },
              ]}
              onClick={() => {}}
            />
          </Row>
          <Row className="mb-2"><h4>Latest Posts</h4></Row>
          <Row className="mb-4">
            <ul>
              {latestPosts.map(({ id, text }) => (
                <li key={id} className="mb-2">
                  <button type="button">{text}</button>
                </li>
              ))}
            </ul>
          </Row>
        </Col>
      </Row>
    </>
  );
}
