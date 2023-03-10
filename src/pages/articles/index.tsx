import { GetStaticProps } from 'next';
import React from 'react';
import { List, ListItem } from '@chakra-ui/react';

// TODO Fetch first 10 articles
// TODO paginate results
export default function ArticlesList() {
  return (
    <main>
      <List>
        <ListItem>Artcile 1</ListItem>
        <ListItem>Artcile 1</ListItem>
      </List>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // const { data } = await getHomePage({
  //   preview: params ? params.preview != undefined : false,
  // });

  return {
    props: {},
  };
};
