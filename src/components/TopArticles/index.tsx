import { Box } from '@chakra-ui/react';
import { Carousel } from 'components/Carousel';
import { TopArticleSummary } from 'components/TopArticleSummary';
import { ArticleCollection } from 'generated/types';

interface ITopArticles {
  latestArticles: ArticleCollection;
}

export const TopArticles = ({ latestArticles }: ITopArticles) => {
  return (
    <Box w="6xl" h="md" margin="auto">
      <Carousel
        elements={latestArticles.items.map((article) => (
          <TopArticleSummary key={article.slug} article={article} />
        ))}
      />
    </Box>
  );
};
