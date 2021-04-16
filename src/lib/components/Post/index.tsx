import React from 'react';
import { Calendar, View } from '../../assets/images';
import { formatDate } from '../../utilities';

import {
  StyledPost,
  Image,
  Title,
  Body,
  Information,
  CreatedAt,
  TagsWrapper,
  ImageWrapper,
  ImageCover,
} from './styles';


interface Props {
  title: string;
  image: {
    title: string;
    url: string;
  };
  className?: string;
  body: string;
  tags: string;
  createdAt: string;
}

function PostComponent({
  className,
  title,
  image,
  body,
  tags,
  createdAt,
}: Props): React.ReactElement {

  return (
    <div className={className}>
      <ImageWrapper>
        <Image src={image.url} alt={image.title}/>
        <ImageCover>
          <View />
        </ImageCover>
      </ImageWrapper>
      <Title href="#">{title}</Title>
      <Body>{body}</Body>
      <Information>
        <CreatedAt>
          <Calendar />
          {`${formatDate(createdAt).monthLetter} ${formatDate(createdAt).day}, ${formatDate(createdAt).year}`}
        </CreatedAt>
        <TagsWrapper>
          {tags}
        </TagsWrapper>
      </Information>
    </div>
  )
}

export default StyledPost.withComponent(PostComponent);