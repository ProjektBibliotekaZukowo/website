import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import Hero from "../components/hero";
import Layout from "../components/layout";
import ArticlePreview from "../components/article-preview";

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allContentfulBlogPost.edges");
    const [libraryImage] = get(this, "props.data.libraryImage.nodes");
    const [logoImage] = get(this, "props.data.logoImage.nodes");

    return (
      <Layout location={this.props.location} data={logoImage}>
        <div style={{ background: "#fff" }}>
          <Helmet title={siteTitle} />
          <Hero data={libraryImage} />
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    logoImage: allContentfulAsset(
      filter: { contentful_id: { eq: "56AAvOmbPfhTt9GcpdCxXH" } }
    ) {
      nodes {
        title
        description
        fluid(maxWidth: 208, maxHeight: 150, resizingBehavior: SCALE) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
    libraryImage: allContentfulAsset(
      filter: { contentful_id: { eq: "1kpr1kWAfJwZIp3nTm9jlc" } }
    ) {
      nodes {
        title
        description
        fluid(
          maxWidth: 1180
          maxHeight: 480
          resizingBehavior: PAD
          background: "rgb:8CA5C4"
        ) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
