import { gql } from 'graphql-tag';

export const ASSET_QUERY = gql`
  query FetchAsset($assetId: String!) {
    asset(id: $assetId) {
      title
      description
      url
    }
  }
`;
export const HOME_QUERY = gql`
  query FetchHome($heroImageId: String!, $articlesLimit: Int!) {
    heroImage: asset(id: $heroImageId) {
      title
      description
      url
    }
    latestArticles: blogPostCollection(limit: $articlesLimit, order: publishDate_DESC) {
      items {
        title
        slug
        body
        heroImage {
          description
          title
          url
        }
        description
        publishDate
      }
    }
    branches: branchCollection(order: name_DESC) {
      items {
        name
        shortDescription
        mainImage {
          url
        }
        openingTimes {
          mondayTo
          mondayFrom
          tuesdayTo
          tuesdayFrom
          wednesdayTo
          wednesdayFrom
          thursdayTo
          thursdayFrom
          fridayTo
          fridayFrom
          saturdayFrom
          saturdayTo
          sundayTo
          sundayFrom
        }
        address {
          miejscowosc
          kodPocztowy
          ulica
          numer
          lokalizacja {
            lat
            lon
          }
          numerTelefonu
          email
        }
      }
    }
  }
`;
