import { gql } from 'apollo-angular';

export const NewsCardFragment = gql`
  fragment NewsCardFragment on ArticleType {
    title
    url
    content
    coverImageUrl
  }
`;
