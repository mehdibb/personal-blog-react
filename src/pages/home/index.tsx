import React from 'react';
import {
  Col, Form, Row,
} from 'react-bootstrap';
import {
  iconsMap, SocialLink,
} from '../../lib/utilities';
import {
  Categories, IconButton, TagsGroup, Post
} from '../../lib/components';
import { SearchBar, SearchBarButton, SearchBarWrapper, StyledForm } from './styles';
import { gql, useQuery } from '@apollo/client';
import { Post as PostType, Query } from '../../schema';
import { Loading } from '../../lib/assets/images';


const QUERY = gql`
  {
  authorProfile (id: "4H2AcYu3t9QLf6R28hS833") {
    fullName
    shortDescription
    picture {
      title
      description
      contentType
      fileName
      size
      url
      width
      height
    }
    socialLinks
  }
  postCollection (limit: 10) {
    items {
      createdAt
      image {
        title
        url
      }
      body
      tags
      title
      sys {
        id
      }
    }
  }
}
`;

// TODO: read from the api
const latestPosts = [
  { id: 'id1', text: 'This is the text for first post' },
  { id: 'id2', text: 'And this one is for the second post' },
];

export default function Home(): React.ReactElement {
  const {data, loading} = useQuery<Query>(QUERY);
  
  console.log(data?.postCollection?.items)
  
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
        <Col sm="9">
          {data?.postCollection?.items && !loading
            ? (data?.postCollection.items as PostType[]).map(({
              sys: {id},
              title,
              image,
              body,
              tags,
              createdAt,
            }) => (
              <Post
                key={id}
                title={title as string}
                image={image as {title: string; url: string}}
                body={body as string}
                tags={tags as string}
                createdAt={createdAt as string}
                />
              ))
            : <Loading />}
        </Col>
        <Col sm="3" className="px-4">
          <Row>
            {data?.authorProfile?.picture?.title && data.authorProfile.picture.url && !loading
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            ? <img
              alt={data.authorProfile.picture?.title}
              src={data.authorProfile.picture?.url}
              className="mb-3"
              style={{ width: '100%', height: 'auto' }}
            />
          : <Loading />}
          </Row>
          <Row><h4>About Me</h4></Row>
          <Row className="mb-3">
            {loading ? <Loading /> : data?.authorProfile?.shortDescription}
          </Row>
          <Row className="mb-2"><h4>Follow Me</h4></Row>
          {(data?.authorProfile?.socialLinks as SocialLink[] | undefined) &&
          (data?.authorProfile?.socialLinks as SocialLink[]).length  > 0 &&
          !loading
            ? <Row className="mb-5">
              {(data?.authorProfile?.socialLinks as SocialLink[])?.map(({ link, title, type }) => (
                // eslint-disable-next-line jsx-a11y/control-has-associated-label
                <a href={link} target="_blank" rel="noreferrer" key={title}><IconButton Icon={iconsMap(type)} title={title} /></a>
              ))}
            </Row>
            : null}
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
