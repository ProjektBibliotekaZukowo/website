import { ArticlesList, IArticlesList } from 'components/ArticlesList';
import { getArticlesPage, getTotalNumberOfArticles } from 'lib/api';
import { ARTICLE_PAGINATION_PAGE_SIZE } from 'lib/constants';
import { GetStaticProps } from 'next';

export default function ArticlePage({ articles, currentPage }: IArticlesList) {
  return <ArticlesList articles={articles} currentPage={currentPage}></ArticlesList>;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentPage = parseInt(params.pageNumber as string, 10);
  const { data } = await getArticlesPage({
    preview: params ? params.preview != undefined : false,
    page: currentPage,
  });

  return {
    props: { ...data, currentPage },
  };
};

export async function getStaticPaths() {
  const { data } = await getTotalNumberOfArticles();

  const paths: Array<{ params: { pageNumber: string } }> = [];

  if (data.articlesTotal.total) {
    const noOfPages = Math.ceil(data.articlesTotal.total / ARTICLE_PAGINATION_PAGE_SIZE);
    for (let i = 1; i <= noOfPages; i++) {
      paths.push({ params: { pageNumber: `${i}` } });
    }
    return {
      paths,
      fallback: false,
    };
  }

  return {
    paths: [],
    fallback: false,
  };
}
