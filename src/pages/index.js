import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import Hero from "../components/hero";
import Layout from "../components/layout";

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const [libraryImage] = get(this, "props.data.libraryImage.nodes");
    const [logoImage] = get(this, "props.data.logoImage.nodes");

    return (
      <Layout location={this.props.location} data={logoImage}>
        <div style={{ background: "#fff" }}>
          <Helmet title={siteTitle} />
          <Hero data={libraryImage} />
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
        fluid(maxWidth: 1180) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`;
