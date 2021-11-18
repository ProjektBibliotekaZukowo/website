import React from 'react';

export default function Index() {
  return (
    <>
      <h1>Index</h1>
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
