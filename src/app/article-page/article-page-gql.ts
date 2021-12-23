import { gql } from 'apollo-angular';

gql`
  query ArticlePageQuery($url: String!) {
    article(url: $url) {
      title
      content
      coverImageUrl
      url
      description
    }
  }
`;
