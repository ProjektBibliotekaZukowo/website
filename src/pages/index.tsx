import { BranchDetails } from 'components/branch-details';
import { FetchHomeQuery } from 'generated/types';
import { getHomePage } from 'lib/api';
import { ASSETS, HOME_PAGE_ARTICLE_LIMIT } from 'lib/constants';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import React from 'react';

export default function Index({ branches, heroImage, latestArticles }: FetchHomeQuery) {
  const latestArticle = latestArticles.items[0];
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto">
        <div className="flex border border-red-500">
          <div className="flex w-1/2 items-center">
            <h1>Biblioteka Samorządowa w Żukowie</h1>
          </div>

          <div className="h-64 w-1/2 relative">
            <Image src={heroImage.url} layout="fill" className="object-cover w-1/2 h-48" />
          </div>
        </div>
        <div>
          <h2>Filie Biblioteki Samorządowej w Żukowie</h2>

          <div className="flex border border-red-500">
            {branches.items.map((branchItem, index) => {
              return <BranchDetails {...branchItem} key={index} />;
            })}
          </div>
        </div>
        <div>
          <h2>Najnowsze wiadomości</h2>
          <div className="flex border border-red-500">
            <h3>{latestArticle.title}</h3>
            <p>{latestArticle.description}</p>
          </div>
        </div>
        <div>
          <h2>Partnerzy</h2>

          <div className="flex border border-red-500">
            <h3>TBA</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await getHomePage({
    preview: params ? params.preview != undefined : false,
    heroImageId: ASSETS.heroImageId,
    articlesLimit: HOME_PAGE_ARTICLE_LIMIT,
  });

  return {
    props: { ...data },
  };
};
