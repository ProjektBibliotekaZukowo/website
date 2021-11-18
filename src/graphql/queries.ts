import { gql } from 'graphql-tag';

export const ASSET_QUERY = gql`
  query FetchAsset($asset_id: String!) {
    asset(id: $asset_id) {
      title
      description
      url
    }
  }
`;
export const HOME_QUERY = gql`
  query FetchHome {
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
