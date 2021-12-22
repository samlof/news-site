import { gql } from 'apollo-angular';
import { NewsCardFragment } from 'src/app/news-card/news-card-gql';

gql`
  ${NewsCardFragment}

  query HomePageQuery {
    articles {
      ...NewsCardFragment
      __typename
    }
  }
`;
