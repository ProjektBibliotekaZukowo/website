import { Box } from '@chakra-ui/react';
import { Carousel } from 'components/Carousel';
import { TopArticleSummary } from 'components/TopArticleSummary';
import { FetchHomeQuery } from 'generated/types';

interface ITopArticles {
  latestArticles: FetchHomeQuery['latestArticles'];
}

export const TopArticles = ({ latestArticles }: ITopArticles) => {
  return (
    <Box  margin="auto">
      <Carousel
        elements={latestArticles.items.map((article) => (
          <TopArticleSummary key={article.slug} article={article} />
        ))}
      />
    </Box>
  );
};
