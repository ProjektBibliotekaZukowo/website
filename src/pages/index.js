import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { Helmet } from 'react-helmet';
import Hero from '../components/hero';
import Layout from '../components/layout';
import Branch from '../components/branch';

import styles from '../components/index.module.css';

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const [libraryImage] = get(this, 'props.data.libraryImage.nodes');
    const [logoImage] = get(this, 'props.data.logoImage.nodes');
    const branches = get(this, 'props.data.branches.nodes');

    return (
      <Layout location={this.props.location} data={logoImage}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <Hero data={libraryImage} />
          <div className={styles.branches}>
            {branches.map((branch, index) => (
              <Branch data={branch} isOdd={false} />
            ))}

            <Branch data={{ name: 'Chwaszczyno' }} isOdd={true} />
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
        fluid(maxWidth: 1180) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
    branches: allContentfulFilia {
      nodes {
        name
        shortDescription {
          shortDescription
        }
        address {
          email
          numerTelefonu
          ulica
          numer
          miejscowosc
          kodPocztowy
          lokalizacja {
            lat
            lon
          }
        }
      }
    }
  }
`;
