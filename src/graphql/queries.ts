import { gql } from 'graphql-tag';

export const ARTICLE_CORE = gql`
  fragment CoreFields on Article {
    sys {
      id
    }
    title
    slug
    heroImage {
      description
      title
      url(transform: { width: 576, height: 448 })
    }
    description {
      json
      links {
        entries {
          block {
            sys {
              id
            }
          }
        }
        assets {
          block {
            sys {
              id
            }
            url
            title
            width
            height
            description
            contentType
          }
        }
      }
    }

    publishDate
  }
`;

export const ARTICLE_BODY_CORE = gql`
  fragment CoreBodyFields on Article {
    body {
      json
      links {
        entries {
          block {
            sys {
              id
            }
          }
        }
        assets {
          block {
            sys {
              id
            }
            url
            title
            width
            height
            description
            contentType
          }
        }
      }
    }
  }
`;

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
  ${ARTICLE_CORE}
  query FetchHome(
    $heroImageId: String!
    $articlesLimit: Int!
    $newsLimit: Int!
    $latestArticlesTagName: String!
    $mainBranchTagName: String!
  ) {
    heroImage: asset(id: $heroImageId) {
      title
      description
      url
    }
    latestArticles: articleCollection(
      limit: $articlesLimit
      order: publishDate_DESC
      where: { contentfulMetadata: { tags: { id_contains_some: [$latestArticlesTagName] } } }
    ) {
      items {
        ...CoreFields
      }
    }
    newsArticles: articleCollection(
      limit: $newsLimit
      order: publishDate_DESC
      where: { contentfulMetadata: { tags: { id_contains_none: [$latestArticlesTagName] } } }
    ) {
      total
      items {
        ...CoreFields
      }
    }
    mainBranch: branchCollection(
      order: name_DESC
      where: { contentfulMetadata: { tags: { id_contains_some: [$mainBranchTagName] } } }
    ) {
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
    branches: branchCollection(
      order: name_DESC
      where: { contentfulMetadata: { tags: { id_contains_none: [$mainBranchTagName] } } }
    ) {
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
        logo {
          url(transform: { width: 263, height: 140, resizeStrategy: PAD })
          title
          description
          width
          height
        }
        description
        name
      }
    }
  }
`;

export const ARTICLES_HOME_QUERY = gql`
  ${ARTICLE_CORE}
  ${ARTICLE_BODY_CORE}
  query FetchArticles($articlesLimit: Int!, $skip: Int!) {
    articles: articleCollection(limit: $articlesLimit, skip: $skip, order: publishDate_DESC) {
      total
      items {
        ...CoreFields
        ...CoreBodyFields
      }
    }
  }
`;

export const ARTICLE_QUERY = gql`
  ${ARTICLE_CORE}
  ${ARTICLE_BODY_CORE}
  query FetchArticle($slug: String!) {
    article: articleCollection(where: { slug: $slug }, limit: 1, order: publishDate_DESC) {
      items {
        ...CoreFields
        ...CoreBodyFields
      }
    }
  }
`;

export const ARTICLES_SLUGS_QUERY = gql`
  query FetchArticlesSlugs($skip: Int!) {
    slugs: articleCollection(skip: $skip, order: publishDate_DESC) {
      total
      skip
      limit
      items {
        slug
      }
    }
  }
`;

export const TOTAL_NUMBER_OF_ARTICLES = gql`
  query FetchArticlesTotal {
    articlesTotal: articleCollection {
      total
    }
  }
`;
