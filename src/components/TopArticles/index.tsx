import { Box } from '@chakra-ui/react';
import { TopArticleSummary } from 'components/TopArticleSummary';
import { FetchHomeQuery } from 'generated/types';

interface ITopArticles {
  latestArticles: FetchHomeQuery['latestArticles'];
}

export const TopArticles = ({ latestArticles }: ITopArticles) => {
  return (
    <Box w="6xl" h="md" margin="auto">
      {latestArticles.items.map((article) => (
        <TopArticleSummary key={article.slug} article={article} />
      ))}
    </Box>
  );
};
