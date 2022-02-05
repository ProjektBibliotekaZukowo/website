import { BranchDetails } from 'components/branch-details';
import { Link } from 'components/link';
import { PartnerDetails } from 'components/partner-details';
import { FetchHomeQuery } from 'generated/types';
import { getHomePage } from 'lib/api';
import { ASSETS, HOME_PAGE_ARTICLE_LIMIT } from 'lib/constants';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import React from 'react';

export default function Index({ branches, heroImage, latestArticles, partners }: FetchHomeQuery) {
  const latestArticle = latestArticles.items[0];
  return null;
  // return (
  //   <div className="w-full">
  //     <div className="max-w-6xl mx-auto space-y-48">
  //       <div className="flex h-256">
  //         <div className="flex w-1/2 items-center">
  //           <h1>Biblioteka Samorządowa w Żukowie</h1>
  //         </div>

  //         <div className="flex w-1/2 object-cover h-256">
  //           <Image
  //             src={heroImage.url}
  //             height="256"
  //             width="1080"
  //             className="object-cover w-1/2 h-full"
  //           />
  //         </div>
  //       </div>
  //       <div className="space-y-16">
  //         <h2>Filie Biblioteki Samorządowej w Żukowie</h2>

  //         <div className="flex">
  //           {branches.items.map((branchItem, index) => {
  //             return <BranchDetails {...branchItem} key={index} />;
  //           })}
  //         </div>
  //       </div>
  //       <div className="space-y-16">
  //         <h2>Najnowsze wiadomości</h2>
  //         <div className="flex">
  //           <h3>{latestArticle.title}</h3>
  //           <p>{latestArticle.description}</p>
  //         </div>
  //       </div>
  //       <div className="space-y-16">
  //         <h2>Partnerzy</h2>

  //         <div className="flex space-x-48">
  //           {partners.items.map((partnerItem, index) => {
  //             return <PartnerDetails {...partnerItem} key={index} />;
  //           })}
  //         </div>
  //       </div>
  //       <div className="bg-accent1-50">
  //         <ul>
  //           <li>
  //             <Link path="o-nas">O nas</Link>
  //           </li>
  //           <li>
  //             <Link path="kontakt">Kontakt</Link>
  //           </li>

  //           <li>
  //             <Link path="aktualnosci">Aktualności</Link>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   </div>
  // );
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
