import styled from '@emotion/styled/macro';


export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const ImageCover = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--orange-light);
  opacity: 0;
  transition: opacity 0.15s linear;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 32px;
    height: 32px;
    fill: var(--light);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: 16px;
  cursor: pointer;

  :hover ${ImageCover} {
    opacity: 0.85;
  }
`;

export const Title = styled.a`
  font-size: 24px;
  margin-bottom: 8px;
  color: var(--dark);
  
  :hover {
    color: var(--dark);
  }
`;

export const Body = styled.p`
  margin-bottom: 16px;
`;

export const CreatedAt = styled.span`
  display: flex;
  align-items: center;
  margin: 8px;

  svg {
    width: 16px;
    height: 16px;
    fill: var(--gray);
    margin-right: 4px;
  }
`;

export const TagsWrapper = styled.span`
  display: flex;
  align-items: center;
`;

export const Information = styled.div`
  display: flex;
  justify-content: center;
  font-size: 14px;
`;

export const StyledPost = styled.article`
  background-color: var(--white);
  text-align: center;
  margin-bottom: 16px;
  padding-bottom: 24px;
`;