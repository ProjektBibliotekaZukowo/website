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
    latestArticles: articleCollection(limit: $articlesLimit, order: publishDate_DESC) {
      items {
        title
        slug
        body
        heroImage {
          description
          title
          url(transform: { width: 576, height: 448 })
        }
        description
        publishDate
      }
    }
    branches: branchCollection(order: name_DESC) {
      items {
        sys {
          id
        }
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
    partners: partnerCollection(order: name_ASC) {
      items {
        name
        logo {
          title
          description
          url
        }
        description
      }
    }
  }
`;
