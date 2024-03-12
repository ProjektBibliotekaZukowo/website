export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Circle: any;
  DateTime: any;
  Dimension: any;
  HexColor: any;
  JSON: any;
  Quality: any;
  Rectangle: any;
};

/** Dane adresowe [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/address) */
export type Address = Entry & {
  __typename?: 'Address';
  contentfulMetadata: ContentfulMetadata;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  kodPocztowy?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<AddressLinkingCollections>;
  lokalizacja?: Maybe<Location>;
  miejscowosc?: Maybe<Scalars['String']>;
  numer?: Maybe<Scalars['String']>;
  numerTelefonu?: Maybe<Array<Maybe<Scalars['String']>>>;
  sys: Sys;
  ulica?: Maybe<Scalars['String']>;
};


/** Dane adresowe [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/address) */
export type AddressEmailArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Dane adresowe [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/address) */
export type AddressKodPocztowyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Dane adresowe [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/address) */
export type AddressLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Dane adresowe [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/address) */
export type AddressLokalizacjaArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Dane adresowe [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/address) */
export type AddressMiejscowoscArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Dane adresowe [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/address) */
export type AddressNumerArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Dane adresowe [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/address) */
export type AddressNumerTelefonuArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Dane adresowe [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/address) */
export type AddressUlicaArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AddressCollection = {
  __typename?: 'AddressCollection';
  items: Array<Maybe<Address>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AddressFilter = {
  AND?: InputMaybe<Array<InputMaybe<AddressFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AddressFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  email_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_exists?: InputMaybe<Scalars['Boolean']>;
  kodPocztowy?: InputMaybe<Scalars['String']>;
  kodPocztowy_contains?: InputMaybe<Scalars['String']>;
  kodPocztowy_exists?: InputMaybe<Scalars['Boolean']>;
  kodPocztowy_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  kodPocztowy_not?: InputMaybe<Scalars['String']>;
  kodPocztowy_not_contains?: InputMaybe<Scalars['String']>;
  kodPocztowy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lokalizacja_exists?: InputMaybe<Scalars['Boolean']>;
  lokalizacja_within_circle?: InputMaybe<Scalars['Circle']>;
  lokalizacja_within_rectangle?: InputMaybe<Scalars['Rectangle']>;
  miejscowosc?: InputMaybe<Scalars['String']>;
  miejscowosc_contains?: InputMaybe<Scalars['String']>;
  miejscowosc_exists?: InputMaybe<Scalars['Boolean']>;
  miejscowosc_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  miejscowosc_not?: InputMaybe<Scalars['String']>;
  miejscowosc_not_contains?: InputMaybe<Scalars['String']>;
  miejscowosc_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  numer?: InputMaybe<Scalars['String']>;
  numerTelefonu_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  numerTelefonu_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  numerTelefonu_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  numerTelefonu_exists?: InputMaybe<Scalars['Boolean']>;
  numer_contains?: InputMaybe<Scalars['String']>;
  numer_exists?: InputMaybe<Scalars['Boolean']>;
  numer_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  numer_not?: InputMaybe<Scalars['String']>;
  numer_not_contains?: InputMaybe<Scalars['String']>;
  numer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  ulica?: InputMaybe<Scalars['String']>;
  ulica_contains?: InputMaybe<Scalars['String']>;
  ulica_exists?: InputMaybe<Scalars['Boolean']>;
  ulica_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ulica_not?: InputMaybe<Scalars['String']>;
  ulica_not_contains?: InputMaybe<Scalars['String']>;
  ulica_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AddressLinkingCollections = {
  __typename?: 'AddressLinkingCollections';
  branchCollection?: Maybe<BranchCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type AddressLinkingCollectionsBranchCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AddressLinkingCollectionsBranchCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AddressLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AddressLinkingCollectionsBranchCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AddressOrder {
  KodPocztowyAsc = 'kodPocztowy_ASC',
  KodPocztowyDesc = 'kodPocztowy_DESC',
  MiejscowoscAsc = 'miejscowosc_ASC',
  MiejscowoscDesc = 'miejscowosc_DESC',
  NumerAsc = 'numer_ASC',
  NumerDesc = 'numer_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UlicaAsc = 'ulica_ASC',
  UlicaDesc = 'ulica_DESC'
}

/** Aktualności [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/article) */
export type Article = Entry & {
  __typename?: 'Article';
  author?: Maybe<Person>;
  body?: Maybe<ArticleBody>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<ArticleDescription>;
  heroImage?: Maybe<Asset>;
  linkedFrom?: Maybe<ArticleLinkingCollections>;
  publishDate?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
};


/** Aktualności [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/article) */
export type ArticleAuthorArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PersonFilter>;
};


/** Aktualności [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/article) */
export type ArticleBodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Aktualności [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/article) */
export type ArticleDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Aktualności [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/article) */
export type ArticleHeroImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Aktualności [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/article) */
export type ArticleLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Aktualności [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/article) */
export type ArticlePublishDateArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Aktualności [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/article) */
export type ArticleSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Aktualności [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/article) */
export type ArticleTagsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Aktualności [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/article) */
export type ArticleTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ArticleBody = {
  __typename?: 'ArticleBody';
  json: Scalars['JSON'];
  links: ArticleBodyLinks;
};

export type ArticleBodyAssets = {
  __typename?: 'ArticleBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ArticleBodyEntries = {
  __typename?: 'ArticleBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ArticleBodyLinks = {
  __typename?: 'ArticleBodyLinks';
  assets: ArticleBodyAssets;
  entries: ArticleBodyEntries;
  resources: ArticleBodyResources;
};

export type ArticleBodyResources = {
  __typename?: 'ArticleBodyResources';
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export type ArticleCollection = {
  __typename?: 'ArticleCollection';
  items: Array<Maybe<Article>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ArticleDescription = {
  __typename?: 'ArticleDescription';
  json: Scalars['JSON'];
  links: ArticleDescriptionLinks;
};

export type ArticleDescriptionAssets = {
  __typename?: 'ArticleDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ArticleDescriptionEntries = {
  __typename?: 'ArticleDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ArticleDescriptionLinks = {
  __typename?: 'ArticleDescriptionLinks';
  assets: ArticleDescriptionAssets;
  entries: ArticleDescriptionEntries;
  resources: ArticleDescriptionResources;
};

export type ArticleDescriptionResources = {
  __typename?: 'ArticleDescriptionResources';
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export type ArticleFilter = {
  AND?: InputMaybe<Array<InputMaybe<ArticleFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ArticleFilter>>>;
  author?: InputMaybe<CfPersonNestedFilter>;
  author_exists?: InputMaybe<Scalars['Boolean']>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  heroImage_exists?: InputMaybe<Scalars['Boolean']>;
  publishDate?: InputMaybe<Scalars['DateTime']>;
  publishDate_exists?: InputMaybe<Scalars['Boolean']>;
  publishDate_gt?: InputMaybe<Scalars['DateTime']>;
  publishDate_gte?: InputMaybe<Scalars['DateTime']>;
  publishDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishDate_lt?: InputMaybe<Scalars['DateTime']>;
  publishDate_lte?: InputMaybe<Scalars['DateTime']>;
  publishDate_not?: InputMaybe<Scalars['DateTime']>;
  publishDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  tags_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ArticleLinkingCollections = {
  __typename?: 'ArticleLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ArticleLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ArticleOrder {
  PublishDateAsc = 'publishDate_ASC',
  PublishDateDesc = 'publishDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  articleCollection?: Maybe<ArticleCollection>;
  blogPostCollection?: Maybe<BlogPostCollection>;
  branchCollection?: Maybe<BranchCollection>;
  entryCollection?: Maybe<EntryCollection>;
  partnerCollection?: Maybe<PartnerCollection>;
  personCollection?: Maybe<PersonCollection>;
};


export type AssetLinkingCollectionsArticleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsBranchCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsPartnerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsPersonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/blogPost) */
export type BlogPost = Entry & {
  __typename?: 'BlogPost';
  author?: Maybe<Person>;
  body?: Maybe<BlogPostBody>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<BlogPostDescription>;
  heroImage?: Maybe<Asset>;
  linkedFrom?: Maybe<BlogPostLinkingCollections>;
  publishDate?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/blogPost) */
export type BlogPostAuthorArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PersonFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/blogPost) */
export type BlogPostBodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/blogPost) */
export type BlogPostDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/blogPost) */
export type BlogPostHeroImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/blogPost) */
export type BlogPostLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/blogPost) */
export type BlogPostPublishDateArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/blogPost) */
export type BlogPostSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/blogPost) */
export type BlogPostTagsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/blogPost) */
export type BlogPostTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type BlogPostBody = {
  __typename?: 'BlogPostBody';
  json: Scalars['JSON'];
  links: BlogPostBodyLinks;
};

export type BlogPostBodyAssets = {
  __typename?: 'BlogPostBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type BlogPostBodyEntries = {
  __typename?: 'BlogPostBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type BlogPostBodyLinks = {
  __typename?: 'BlogPostBodyLinks';
  assets: BlogPostBodyAssets;
  entries: BlogPostBodyEntries;
  resources: BlogPostBodyResources;
};

export type BlogPostBodyResources = {
  __typename?: 'BlogPostBodyResources';
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export type BlogPostCollection = {
  __typename?: 'BlogPostCollection';
  items: Array<Maybe<BlogPost>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type BlogPostDescription = {
  __typename?: 'BlogPostDescription';
  json: Scalars['JSON'];
  links: BlogPostDescriptionLinks;
};

export type BlogPostDescriptionAssets = {
  __typename?: 'BlogPostDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type BlogPostDescriptionEntries = {
  __typename?: 'BlogPostDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type BlogPostDescriptionLinks = {
  __typename?: 'BlogPostDescriptionLinks';
  assets: BlogPostDescriptionAssets;
  entries: BlogPostDescriptionEntries;
  resources: BlogPostDescriptionResources;
};

export type BlogPostDescriptionResources = {
  __typename?: 'BlogPostDescriptionResources';
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export type BlogPostFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlogPostFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlogPostFilter>>>;
  author?: InputMaybe<CfPersonNestedFilter>;
  author_exists?: InputMaybe<Scalars['Boolean']>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  heroImage_exists?: InputMaybe<Scalars['Boolean']>;
  publishDate?: InputMaybe<Scalars['DateTime']>;
  publishDate_exists?: InputMaybe<Scalars['Boolean']>;
  publishDate_gt?: InputMaybe<Scalars['DateTime']>;
  publishDate_gte?: InputMaybe<Scalars['DateTime']>;
  publishDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishDate_lt?: InputMaybe<Scalars['DateTime']>;
  publishDate_lte?: InputMaybe<Scalars['DateTime']>;
  publishDate_not?: InputMaybe<Scalars['DateTime']>;
  publishDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  tags_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlogPostLinkingCollections = {
  __typename?: 'BlogPostLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type BlogPostLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum BlogPostOrder {
  PublishDateAsc = 'publishDate_ASC',
  PublishDateDesc = 'publishDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Branch details [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/branch) */
export type Branch = Entry & {
  __typename?: 'Branch';
  address?: Maybe<Address>;
  contentfulMetadata: ContentfulMetadata;
  galleryCollection?: Maybe<AssetCollection>;
  linkedFrom?: Maybe<BranchLinkingCollections>;
  longDescription?: Maybe<BranchLongDescription>;
  mainImage?: Maybe<Asset>;
  name?: Maybe<Scalars['String']>;
  openingTimes?: Maybe<OpeningTimes>;
  shortDescription?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Branch details [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/branch) */
export type BranchAddressArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AddressFilter>;
};


/** Branch details [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/branch) */
export type BranchGalleryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Branch details [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/branch) */
export type BranchLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Branch details [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/branch) */
export type BranchLongDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Branch details [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/branch) */
export type BranchMainImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Branch details [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/branch) */
export type BranchNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Branch details [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/branch) */
export type BranchOpeningTimesArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<OpeningTimesFilter>;
};


/** Branch details [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/branch) */
export type BranchShortDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type BranchCollection = {
  __typename?: 'BranchCollection';
  items: Array<Maybe<Branch>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type BranchFilter = {
  AND?: InputMaybe<Array<InputMaybe<BranchFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BranchFilter>>>;
  address?: InputMaybe<CfAddressNestedFilter>;
  address_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  galleryCollection_exists?: InputMaybe<Scalars['Boolean']>;
  longDescription_contains?: InputMaybe<Scalars['String']>;
  longDescription_exists?: InputMaybe<Scalars['Boolean']>;
  longDescription_not_contains?: InputMaybe<Scalars['String']>;
  mainImage_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  openingTimes?: InputMaybe<CfOpeningTimesNestedFilter>;
  openingTimes_exists?: InputMaybe<Scalars['Boolean']>;
  shortDescription?: InputMaybe<Scalars['String']>;
  shortDescription_contains?: InputMaybe<Scalars['String']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']>;
  shortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortDescription_not?: InputMaybe<Scalars['String']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']>;
  shortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type BranchLinkingCollections = {
  __typename?: 'BranchLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type BranchLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type BranchLongDescription = {
  __typename?: 'BranchLongDescription';
  json: Scalars['JSON'];
  links: BranchLongDescriptionLinks;
};

export type BranchLongDescriptionAssets = {
  __typename?: 'BranchLongDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type BranchLongDescriptionEntries = {
  __typename?: 'BranchLongDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type BranchLongDescriptionLinks = {
  __typename?: 'BranchLongDescriptionLinks';
  assets: BranchLongDescriptionAssets;
  entries: BranchLongDescriptionEntries;
  resources: BranchLongDescriptionResources;
};

export type BranchLongDescriptionResources = {
  __typename?: 'BranchLongDescriptionResources';
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export enum BranchOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

export type Location = {
  __typename?: 'Location';
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
};

/** Godziny otwarcia biblioteki [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/openingTimes) */
export type OpeningTimes = Entry & {
  __typename?: 'OpeningTimes';
  contentfulMetadata: ContentfulMetadata;
  fridayFrom?: Maybe<Scalars['DateTime']>;
  fridayTo?: Maybe<Scalars['DateTime']>;
  linkedFrom?: Maybe<OpeningTimesLinkingCollections>;
  mondayFrom?: Maybe<Scalars['DateTime']>;
  mondayTo?: Maybe<Scalars['DateTime']>;
  saturdayFrom?: Maybe<Scalars['DateTime']>;
  saturdayTo?: Maybe<Scalars['DateTime']>;
  sundayFrom?: Maybe<Scalars['DateTime']>;
  sundayTo?: Maybe<Scalars['DateTime']>;
  sys: Sys;
  thursdayFrom?: Maybe<Scalars['DateTime']>;
  thursdayTo?: Maybe<Scalars['DateTime']>;
  tuesdayFrom?: Maybe<Scalars['DateTime']>;
  tuesdayTo?: Maybe<Scalars['DateTime']>;
  tytul?: Maybe<Scalars['String']>;
  wednesdayFrom?: Maybe<Scalars['DateTime']>;
  wednesdayTo?: Maybe<Scalars['DateTime']>;
};


/** Godziny otwarcia biblioteki [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/openingTimes) */
export type OpeningTimesFridayFromArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Godziny otwarcia biblioteki [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/openingTimes) */
export type OpeningTimesFridayToArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Godziny otwarcia biblioteki [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/openingTimes) */
export type OpeningTimesLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Godziny otwarcia biblioteki [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/openingTimes) */
export type OpeningTimesMondayFromArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Godziny otwarcia biblioteki [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/openingTimes) */
export type OpeningTimesMondayToArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Godziny otwarcia biblioteki [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/openingTimes) */
export type OpeningTimesSaturdayFromArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Godziny otwarcia biblioteki [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/openingTimes) */
export type OpeningTimesSaturdayToArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Godziny otwarcia biblioteki [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/openingTimes) */
export type OpeningTimesSundayFromArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Godziny otwarcia biblioteki [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/openingTimes) */
export type OpeningTimesSundayToArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Godziny otwarcia biblioteki [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/openingTimes) */
export type OpeningTimesThursdayFromArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Godziny otwarcia biblioteki [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/openingTimes) */
export type OpeningTimesThursdayToArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Godziny otwarcia biblioteki [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/openingTimes) */
export type OpeningTimesTuesdayFromArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Godziny otwarcia biblioteki [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/openingTimes) */
export type OpeningTimesTuesdayToArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Godziny otwarcia biblioteki [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/openingTimes) */
export type OpeningTimesTytulArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Godziny otwarcia biblioteki [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/openingTimes) */
export type OpeningTimesWednesdayFromArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Godziny otwarcia biblioteki [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/openingTimes) */
export type OpeningTimesWednesdayToArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type OpeningTimesCollection = {
  __typename?: 'OpeningTimesCollection';
  items: Array<Maybe<OpeningTimes>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type OpeningTimesFilter = {
  AND?: InputMaybe<Array<InputMaybe<OpeningTimesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<OpeningTimesFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  fridayFrom?: InputMaybe<Scalars['DateTime']>;
  fridayFrom_exists?: InputMaybe<Scalars['Boolean']>;
  fridayFrom_gt?: InputMaybe<Scalars['DateTime']>;
  fridayFrom_gte?: InputMaybe<Scalars['DateTime']>;
  fridayFrom_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  fridayFrom_lt?: InputMaybe<Scalars['DateTime']>;
  fridayFrom_lte?: InputMaybe<Scalars['DateTime']>;
  fridayFrom_not?: InputMaybe<Scalars['DateTime']>;
  fridayFrom_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  fridayTo?: InputMaybe<Scalars['DateTime']>;
  fridayTo_exists?: InputMaybe<Scalars['Boolean']>;
  fridayTo_gt?: InputMaybe<Scalars['DateTime']>;
  fridayTo_gte?: InputMaybe<Scalars['DateTime']>;
  fridayTo_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  fridayTo_lt?: InputMaybe<Scalars['DateTime']>;
  fridayTo_lte?: InputMaybe<Scalars['DateTime']>;
  fridayTo_not?: InputMaybe<Scalars['DateTime']>;
  fridayTo_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  mondayFrom?: InputMaybe<Scalars['DateTime']>;
  mondayFrom_exists?: InputMaybe<Scalars['Boolean']>;
  mondayFrom_gt?: InputMaybe<Scalars['DateTime']>;
  mondayFrom_gte?: InputMaybe<Scalars['DateTime']>;
  mondayFrom_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  mondayFrom_lt?: InputMaybe<Scalars['DateTime']>;
  mondayFrom_lte?: InputMaybe<Scalars['DateTime']>;
  mondayFrom_not?: InputMaybe<Scalars['DateTime']>;
  mondayFrom_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  mondayTo?: InputMaybe<Scalars['DateTime']>;
  mondayTo_exists?: InputMaybe<Scalars['Boolean']>;
  mondayTo_gt?: InputMaybe<Scalars['DateTime']>;
  mondayTo_gte?: InputMaybe<Scalars['DateTime']>;
  mondayTo_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  mondayTo_lt?: InputMaybe<Scalars['DateTime']>;
  mondayTo_lte?: InputMaybe<Scalars['DateTime']>;
  mondayTo_not?: InputMaybe<Scalars['DateTime']>;
  mondayTo_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  saturdayFrom?: InputMaybe<Scalars['DateTime']>;
  saturdayFrom_exists?: InputMaybe<Scalars['Boolean']>;
  saturdayFrom_gt?: InputMaybe<Scalars['DateTime']>;
  saturdayFrom_gte?: InputMaybe<Scalars['DateTime']>;
  saturdayFrom_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  saturdayFrom_lt?: InputMaybe<Scalars['DateTime']>;
  saturdayFrom_lte?: InputMaybe<Scalars['DateTime']>;
  saturdayFrom_not?: InputMaybe<Scalars['DateTime']>;
  saturdayFrom_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  saturdayTo?: InputMaybe<Scalars['DateTime']>;
  saturdayTo_exists?: InputMaybe<Scalars['Boolean']>;
  saturdayTo_gt?: InputMaybe<Scalars['DateTime']>;
  saturdayTo_gte?: InputMaybe<Scalars['DateTime']>;
  saturdayTo_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  saturdayTo_lt?: InputMaybe<Scalars['DateTime']>;
  saturdayTo_lte?: InputMaybe<Scalars['DateTime']>;
  saturdayTo_not?: InputMaybe<Scalars['DateTime']>;
  saturdayTo_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  sundayFrom?: InputMaybe<Scalars['DateTime']>;
  sundayFrom_exists?: InputMaybe<Scalars['Boolean']>;
  sundayFrom_gt?: InputMaybe<Scalars['DateTime']>;
  sundayFrom_gte?: InputMaybe<Scalars['DateTime']>;
  sundayFrom_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  sundayFrom_lt?: InputMaybe<Scalars['DateTime']>;
  sundayFrom_lte?: InputMaybe<Scalars['DateTime']>;
  sundayFrom_not?: InputMaybe<Scalars['DateTime']>;
  sundayFrom_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  sundayTo?: InputMaybe<Scalars['DateTime']>;
  sundayTo_exists?: InputMaybe<Scalars['Boolean']>;
  sundayTo_gt?: InputMaybe<Scalars['DateTime']>;
  sundayTo_gte?: InputMaybe<Scalars['DateTime']>;
  sundayTo_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  sundayTo_lt?: InputMaybe<Scalars['DateTime']>;
  sundayTo_lte?: InputMaybe<Scalars['DateTime']>;
  sundayTo_not?: InputMaybe<Scalars['DateTime']>;
  sundayTo_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  sys?: InputMaybe<SysFilter>;
  thursdayFrom?: InputMaybe<Scalars['DateTime']>;
  thursdayFrom_exists?: InputMaybe<Scalars['Boolean']>;
  thursdayFrom_gt?: InputMaybe<Scalars['DateTime']>;
  thursdayFrom_gte?: InputMaybe<Scalars['DateTime']>;
  thursdayFrom_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  thursdayFrom_lt?: InputMaybe<Scalars['DateTime']>;
  thursdayFrom_lte?: InputMaybe<Scalars['DateTime']>;
  thursdayFrom_not?: InputMaybe<Scalars['DateTime']>;
  thursdayFrom_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  thursdayTo?: InputMaybe<Scalars['DateTime']>;
  thursdayTo_exists?: InputMaybe<Scalars['Boolean']>;
  thursdayTo_gt?: InputMaybe<Scalars['DateTime']>;
  thursdayTo_gte?: InputMaybe<Scalars['DateTime']>;
  thursdayTo_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  thursdayTo_lt?: InputMaybe<Scalars['DateTime']>;
  thursdayTo_lte?: InputMaybe<Scalars['DateTime']>;
  thursdayTo_not?: InputMaybe<Scalars['DateTime']>;
  thursdayTo_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  tuesdayFrom?: InputMaybe<Scalars['DateTime']>;
  tuesdayFrom_exists?: InputMaybe<Scalars['Boolean']>;
  tuesdayFrom_gt?: InputMaybe<Scalars['DateTime']>;
  tuesdayFrom_gte?: InputMaybe<Scalars['DateTime']>;
  tuesdayFrom_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  tuesdayFrom_lt?: InputMaybe<Scalars['DateTime']>;
  tuesdayFrom_lte?: InputMaybe<Scalars['DateTime']>;
  tuesdayFrom_not?: InputMaybe<Scalars['DateTime']>;
  tuesdayFrom_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  tuesdayTo?: InputMaybe<Scalars['DateTime']>;
  tuesdayTo_exists?: InputMaybe<Scalars['Boolean']>;
  tuesdayTo_gt?: InputMaybe<Scalars['DateTime']>;
  tuesdayTo_gte?: InputMaybe<Scalars['DateTime']>;
  tuesdayTo_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  tuesdayTo_lt?: InputMaybe<Scalars['DateTime']>;
  tuesdayTo_lte?: InputMaybe<Scalars['DateTime']>;
  tuesdayTo_not?: InputMaybe<Scalars['DateTime']>;
  tuesdayTo_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  tytul?: InputMaybe<Scalars['String']>;
  tytul_contains?: InputMaybe<Scalars['String']>;
  tytul_exists?: InputMaybe<Scalars['Boolean']>;
  tytul_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tytul_not?: InputMaybe<Scalars['String']>;
  tytul_not_contains?: InputMaybe<Scalars['String']>;
  tytul_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  wednesdayFrom?: InputMaybe<Scalars['DateTime']>;
  wednesdayFrom_exists?: InputMaybe<Scalars['Boolean']>;
  wednesdayFrom_gt?: InputMaybe<Scalars['DateTime']>;
  wednesdayFrom_gte?: InputMaybe<Scalars['DateTime']>;
  wednesdayFrom_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  wednesdayFrom_lt?: InputMaybe<Scalars['DateTime']>;
  wednesdayFrom_lte?: InputMaybe<Scalars['DateTime']>;
  wednesdayFrom_not?: InputMaybe<Scalars['DateTime']>;
  wednesdayFrom_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  wednesdayTo?: InputMaybe<Scalars['DateTime']>;
  wednesdayTo_exists?: InputMaybe<Scalars['Boolean']>;
  wednesdayTo_gt?: InputMaybe<Scalars['DateTime']>;
  wednesdayTo_gte?: InputMaybe<Scalars['DateTime']>;
  wednesdayTo_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  wednesdayTo_lt?: InputMaybe<Scalars['DateTime']>;
  wednesdayTo_lte?: InputMaybe<Scalars['DateTime']>;
  wednesdayTo_not?: InputMaybe<Scalars['DateTime']>;
  wednesdayTo_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type OpeningTimesLinkingCollections = {
  __typename?: 'OpeningTimesLinkingCollections';
  branchCollection?: Maybe<BranchCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type OpeningTimesLinkingCollectionsBranchCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<OpeningTimesLinkingCollectionsBranchCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type OpeningTimesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum OpeningTimesLinkingCollectionsBranchCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum OpeningTimesOrder {
  FridayFromAsc = 'fridayFrom_ASC',
  FridayFromDesc = 'fridayFrom_DESC',
  FridayToAsc = 'fridayTo_ASC',
  FridayToDesc = 'fridayTo_DESC',
  MondayFromAsc = 'mondayFrom_ASC',
  MondayFromDesc = 'mondayFrom_DESC',
  MondayToAsc = 'mondayTo_ASC',
  MondayToDesc = 'mondayTo_DESC',
  SaturdayFromAsc = 'saturdayFrom_ASC',
  SaturdayFromDesc = 'saturdayFrom_DESC',
  SaturdayToAsc = 'saturdayTo_ASC',
  SaturdayToDesc = 'saturdayTo_DESC',
  SundayFromAsc = 'sundayFrom_ASC',
  SundayFromDesc = 'sundayFrom_DESC',
  SundayToAsc = 'sundayTo_ASC',
  SundayToDesc = 'sundayTo_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  ThursdayFromAsc = 'thursdayFrom_ASC',
  ThursdayFromDesc = 'thursdayFrom_DESC',
  ThursdayToAsc = 'thursdayTo_ASC',
  ThursdayToDesc = 'thursdayTo_DESC',
  TuesdayFromAsc = 'tuesdayFrom_ASC',
  TuesdayFromDesc = 'tuesdayFrom_DESC',
  TuesdayToAsc = 'tuesdayTo_ASC',
  TuesdayToDesc = 'tuesdayTo_DESC',
  TytulAsc = 'tytul_ASC',
  TytulDesc = 'tytul_DESC',
  WednesdayFromAsc = 'wednesdayFrom_ASC',
  WednesdayFromDesc = 'wednesdayFrom_DESC',
  WednesdayToAsc = 'wednesdayTo_ASC',
  WednesdayToDesc = 'wednesdayTo_DESC'
}

/** Lista partnerów biblioteki [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/partner) */
export type Partner = Entry & {
  __typename?: 'Partner';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PartnerLinkingCollections>;
  logo?: Maybe<Asset>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Lista partnerów biblioteki [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/partner) */
export type PartnerDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Lista partnerów biblioteki [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/partner) */
export type PartnerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Lista partnerów biblioteki [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/partner) */
export type PartnerLogoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Lista partnerów biblioteki [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/partner) */
export type PartnerNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PartnerCollection = {
  __typename?: 'PartnerCollection';
  items: Array<Maybe<Partner>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PartnerFilter = {
  AND?: InputMaybe<Array<InputMaybe<PartnerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PartnerFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  logo_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PartnerLinkingCollections = {
  __typename?: 'PartnerLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PartnerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PartnerOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/person) */
export type Person = Entry & {
  __typename?: 'Person';
  company?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  email?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<PersonLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  shortBio?: Maybe<PersonShortBio>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/person) */
export type PersonCompanyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/person) */
export type PersonEmailArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/person) */
export type PersonFacebookArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/person) */
export type PersonGithubArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/person) */
export type PersonImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/person) */
export type PersonLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/person) */
export type PersonNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/person) */
export type PersonPhoneArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/person) */
export type PersonShortBioArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/person) */
export type PersonTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/person) */
export type PersonTwitterArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PersonCollection = {
  __typename?: 'PersonCollection';
  items: Array<Maybe<Person>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PersonFilter = {
  AND?: InputMaybe<Array<InputMaybe<PersonFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PersonFilter>>>;
  company?: InputMaybe<Scalars['String']>;
  company_contains?: InputMaybe<Scalars['String']>;
  company_exists?: InputMaybe<Scalars['Boolean']>;
  company_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  company_not?: InputMaybe<Scalars['String']>;
  company_not_contains?: InputMaybe<Scalars['String']>;
  company_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  email?: InputMaybe<Scalars['String']>;
  email_contains?: InputMaybe<Scalars['String']>;
  email_exists?: InputMaybe<Scalars['Boolean']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_not?: InputMaybe<Scalars['String']>;
  email_not_contains?: InputMaybe<Scalars['String']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  facebook?: InputMaybe<Scalars['String']>;
  facebook_contains?: InputMaybe<Scalars['String']>;
  facebook_exists?: InputMaybe<Scalars['Boolean']>;
  facebook_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  facebook_not?: InputMaybe<Scalars['String']>;
  facebook_not_contains?: InputMaybe<Scalars['String']>;
  facebook_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  github?: InputMaybe<Scalars['String']>;
  github_contains?: InputMaybe<Scalars['String']>;
  github_exists?: InputMaybe<Scalars['Boolean']>;
  github_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  github_not?: InputMaybe<Scalars['String']>;
  github_not_contains?: InputMaybe<Scalars['String']>;
  github_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone?: InputMaybe<Scalars['String']>;
  phone_contains?: InputMaybe<Scalars['String']>;
  phone_exists?: InputMaybe<Scalars['Boolean']>;
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone_not?: InputMaybe<Scalars['String']>;
  phone_not_contains?: InputMaybe<Scalars['String']>;
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortBio_contains?: InputMaybe<Scalars['String']>;
  shortBio_exists?: InputMaybe<Scalars['Boolean']>;
  shortBio_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitter?: InputMaybe<Scalars['String']>;
  twitter_contains?: InputMaybe<Scalars['String']>;
  twitter_exists?: InputMaybe<Scalars['Boolean']>;
  twitter_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitter_not?: InputMaybe<Scalars['String']>;
  twitter_not_contains?: InputMaybe<Scalars['String']>;
  twitter_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PersonLinkingCollections = {
  __typename?: 'PersonLinkingCollections';
  articleCollection?: Maybe<ArticleCollection>;
  blogPostCollection?: Maybe<BlogPostCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type PersonLinkingCollectionsArticleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PersonLinkingCollectionsArticleCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PersonLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PersonLinkingCollectionsBlogPostCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PersonLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PersonLinkingCollectionsArticleCollectionOrder {
  PublishDateAsc = 'publishDate_ASC',
  PublishDateDesc = 'publishDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PersonLinkingCollectionsBlogPostCollectionOrder {
  PublishDateAsc = 'publishDate_ASC',
  PublishDateDesc = 'publishDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PersonOrder {
  CompanyAsc = 'company_ASC',
  CompanyDesc = 'company_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FacebookAsc = 'facebook_ASC',
  FacebookDesc = 'facebook_DESC',
  GithubAsc = 'github_ASC',
  GithubDesc = 'github_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TwitterAsc = 'twitter_ASC',
  TwitterDesc = 'twitter_DESC'
}

export type PersonShortBio = {
  __typename?: 'PersonShortBio';
  json: Scalars['JSON'];
  links: PersonShortBioLinks;
};

export type PersonShortBioAssets = {
  __typename?: 'PersonShortBioAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PersonShortBioEntries = {
  __typename?: 'PersonShortBioEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PersonShortBioLinks = {
  __typename?: 'PersonShortBioLinks';
  assets: PersonShortBioAssets;
  entries: PersonShortBioEntries;
  resources: PersonShortBioResources;
};

export type PersonShortBioResources = {
  __typename?: 'PersonShortBioResources';
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  address?: Maybe<Address>;
  addressCollection?: Maybe<AddressCollection>;
  article?: Maybe<Article>;
  articleCollection?: Maybe<ArticleCollection>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  blogPost?: Maybe<BlogPost>;
  blogPostCollection?: Maybe<BlogPostCollection>;
  branch?: Maybe<Branch>;
  branchCollection?: Maybe<BranchCollection>;
  entryCollection?: Maybe<EntryCollection>;
  openingTimes?: Maybe<OpeningTimes>;
  openingTimesCollection?: Maybe<OpeningTimesCollection>;
  partner?: Maybe<Partner>;
  partnerCollection?: Maybe<PartnerCollection>;
  person?: Maybe<Person>;
  personCollection?: Maybe<PersonCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAddressArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAddressCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AddressOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AddressFilter>;
};


export type QueryArticleArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryArticleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ArticleOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ArticleFilter>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryBlogPostArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<BlogPostOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlogPostFilter>;
};


export type QueryBranchArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryBranchCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<BranchOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BranchFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryOpeningTimesArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryOpeningTimesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<OpeningTimesOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OpeningTimesFilter>;
};


export type QueryPartnerArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPartnerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PartnerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PartnerFilter>;
};


export type QueryPersonArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPersonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PersonOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonFilter>;
};

export type ResourceLink = {
  __typename?: 'ResourceLink';
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String'];
  type: Scalars['String'];
  urn: Scalars['String'];
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type _Node = {
  _id: Scalars['ID'];
};

export type CfAddressNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfAddressNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfAddressNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  email_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_exists?: InputMaybe<Scalars['Boolean']>;
  kodPocztowy?: InputMaybe<Scalars['String']>;
  kodPocztowy_contains?: InputMaybe<Scalars['String']>;
  kodPocztowy_exists?: InputMaybe<Scalars['Boolean']>;
  kodPocztowy_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  kodPocztowy_not?: InputMaybe<Scalars['String']>;
  kodPocztowy_not_contains?: InputMaybe<Scalars['String']>;
  kodPocztowy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lokalizacja_exists?: InputMaybe<Scalars['Boolean']>;
  lokalizacja_within_circle?: InputMaybe<Scalars['Circle']>;
  lokalizacja_within_rectangle?: InputMaybe<Scalars['Rectangle']>;
  miejscowosc?: InputMaybe<Scalars['String']>;
  miejscowosc_contains?: InputMaybe<Scalars['String']>;
  miejscowosc_exists?: InputMaybe<Scalars['Boolean']>;
  miejscowosc_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  miejscowosc_not?: InputMaybe<Scalars['String']>;
  miejscowosc_not_contains?: InputMaybe<Scalars['String']>;
  miejscowosc_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  numer?: InputMaybe<Scalars['String']>;
  numerTelefonu_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  numerTelefonu_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  numerTelefonu_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  numerTelefonu_exists?: InputMaybe<Scalars['Boolean']>;
  numer_contains?: InputMaybe<Scalars['String']>;
  numer_exists?: InputMaybe<Scalars['Boolean']>;
  numer_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  numer_not?: InputMaybe<Scalars['String']>;
  numer_not_contains?: InputMaybe<Scalars['String']>;
  numer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  ulica?: InputMaybe<Scalars['String']>;
  ulica_contains?: InputMaybe<Scalars['String']>;
  ulica_exists?: InputMaybe<Scalars['Boolean']>;
  ulica_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ulica_not?: InputMaybe<Scalars['String']>;
  ulica_not_contains?: InputMaybe<Scalars['String']>;
  ulica_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfOpeningTimesNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfOpeningTimesNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfOpeningTimesNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  fridayFrom?: InputMaybe<Scalars['DateTime']>;
  fridayFrom_exists?: InputMaybe<Scalars['Boolean']>;
  fridayFrom_gt?: InputMaybe<Scalars['DateTime']>;
  fridayFrom_gte?: InputMaybe<Scalars['DateTime']>;
  fridayFrom_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  fridayFrom_lt?: InputMaybe<Scalars['DateTime']>;
  fridayFrom_lte?: InputMaybe<Scalars['DateTime']>;
  fridayFrom_not?: InputMaybe<Scalars['DateTime']>;
  fridayFrom_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  fridayTo?: InputMaybe<Scalars['DateTime']>;
  fridayTo_exists?: InputMaybe<Scalars['Boolean']>;
  fridayTo_gt?: InputMaybe<Scalars['DateTime']>;
  fridayTo_gte?: InputMaybe<Scalars['DateTime']>;
  fridayTo_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  fridayTo_lt?: InputMaybe<Scalars['DateTime']>;
  fridayTo_lte?: InputMaybe<Scalars['DateTime']>;
  fridayTo_not?: InputMaybe<Scalars['DateTime']>;
  fridayTo_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  mondayFrom?: InputMaybe<Scalars['DateTime']>;
  mondayFrom_exists?: InputMaybe<Scalars['Boolean']>;
  mondayFrom_gt?: InputMaybe<Scalars['DateTime']>;
  mondayFrom_gte?: InputMaybe<Scalars['DateTime']>;
  mondayFrom_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  mondayFrom_lt?: InputMaybe<Scalars['DateTime']>;
  mondayFrom_lte?: InputMaybe<Scalars['DateTime']>;
  mondayFrom_not?: InputMaybe<Scalars['DateTime']>;
  mondayFrom_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  mondayTo?: InputMaybe<Scalars['DateTime']>;
  mondayTo_exists?: InputMaybe<Scalars['Boolean']>;
  mondayTo_gt?: InputMaybe<Scalars['DateTime']>;
  mondayTo_gte?: InputMaybe<Scalars['DateTime']>;
  mondayTo_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  mondayTo_lt?: InputMaybe<Scalars['DateTime']>;
  mondayTo_lte?: InputMaybe<Scalars['DateTime']>;
  mondayTo_not?: InputMaybe<Scalars['DateTime']>;
  mondayTo_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  saturdayFrom?: InputMaybe<Scalars['DateTime']>;
  saturdayFrom_exists?: InputMaybe<Scalars['Boolean']>;
  saturdayFrom_gt?: InputMaybe<Scalars['DateTime']>;
  saturdayFrom_gte?: InputMaybe<Scalars['DateTime']>;
  saturdayFrom_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  saturdayFrom_lt?: InputMaybe<Scalars['DateTime']>;
  saturdayFrom_lte?: InputMaybe<Scalars['DateTime']>;
  saturdayFrom_not?: InputMaybe<Scalars['DateTime']>;
  saturdayFrom_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  saturdayTo?: InputMaybe<Scalars['DateTime']>;
  saturdayTo_exists?: InputMaybe<Scalars['Boolean']>;
  saturdayTo_gt?: InputMaybe<Scalars['DateTime']>;
  saturdayTo_gte?: InputMaybe<Scalars['DateTime']>;
  saturdayTo_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  saturdayTo_lt?: InputMaybe<Scalars['DateTime']>;
  saturdayTo_lte?: InputMaybe<Scalars['DateTime']>;
  saturdayTo_not?: InputMaybe<Scalars['DateTime']>;
  saturdayTo_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  sundayFrom?: InputMaybe<Scalars['DateTime']>;
  sundayFrom_exists?: InputMaybe<Scalars['Boolean']>;
  sundayFrom_gt?: InputMaybe<Scalars['DateTime']>;
  sundayFrom_gte?: InputMaybe<Scalars['DateTime']>;
  sundayFrom_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  sundayFrom_lt?: InputMaybe<Scalars['DateTime']>;
  sundayFrom_lte?: InputMaybe<Scalars['DateTime']>;
  sundayFrom_not?: InputMaybe<Scalars['DateTime']>;
  sundayFrom_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  sundayTo?: InputMaybe<Scalars['DateTime']>;
  sundayTo_exists?: InputMaybe<Scalars['Boolean']>;
  sundayTo_gt?: InputMaybe<Scalars['DateTime']>;
  sundayTo_gte?: InputMaybe<Scalars['DateTime']>;
  sundayTo_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  sundayTo_lt?: InputMaybe<Scalars['DateTime']>;
  sundayTo_lte?: InputMaybe<Scalars['DateTime']>;
  sundayTo_not?: InputMaybe<Scalars['DateTime']>;
  sundayTo_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  sys?: InputMaybe<SysFilter>;
  thursdayFrom?: InputMaybe<Scalars['DateTime']>;
  thursdayFrom_exists?: InputMaybe<Scalars['Boolean']>;
  thursdayFrom_gt?: InputMaybe<Scalars['DateTime']>;
  thursdayFrom_gte?: InputMaybe<Scalars['DateTime']>;
  thursdayFrom_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  thursdayFrom_lt?: InputMaybe<Scalars['DateTime']>;
  thursdayFrom_lte?: InputMaybe<Scalars['DateTime']>;
  thursdayFrom_not?: InputMaybe<Scalars['DateTime']>;
  thursdayFrom_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  thursdayTo?: InputMaybe<Scalars['DateTime']>;
  thursdayTo_exists?: InputMaybe<Scalars['Boolean']>;
  thursdayTo_gt?: InputMaybe<Scalars['DateTime']>;
  thursdayTo_gte?: InputMaybe<Scalars['DateTime']>;
  thursdayTo_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  thursdayTo_lt?: InputMaybe<Scalars['DateTime']>;
  thursdayTo_lte?: InputMaybe<Scalars['DateTime']>;
  thursdayTo_not?: InputMaybe<Scalars['DateTime']>;
  thursdayTo_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  tuesdayFrom?: InputMaybe<Scalars['DateTime']>;
  tuesdayFrom_exists?: InputMaybe<Scalars['Boolean']>;
  tuesdayFrom_gt?: InputMaybe<Scalars['DateTime']>;
  tuesdayFrom_gte?: InputMaybe<Scalars['DateTime']>;
  tuesdayFrom_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  tuesdayFrom_lt?: InputMaybe<Scalars['DateTime']>;
  tuesdayFrom_lte?: InputMaybe<Scalars['DateTime']>;
  tuesdayFrom_not?: InputMaybe<Scalars['DateTime']>;
  tuesdayFrom_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  tuesdayTo?: InputMaybe<Scalars['DateTime']>;
  tuesdayTo_exists?: InputMaybe<Scalars['Boolean']>;
  tuesdayTo_gt?: InputMaybe<Scalars['DateTime']>;
  tuesdayTo_gte?: InputMaybe<Scalars['DateTime']>;
  tuesdayTo_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  tuesdayTo_lt?: InputMaybe<Scalars['DateTime']>;
  tuesdayTo_lte?: InputMaybe<Scalars['DateTime']>;
  tuesdayTo_not?: InputMaybe<Scalars['DateTime']>;
  tuesdayTo_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  tytul?: InputMaybe<Scalars['String']>;
  tytul_contains?: InputMaybe<Scalars['String']>;
  tytul_exists?: InputMaybe<Scalars['Boolean']>;
  tytul_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tytul_not?: InputMaybe<Scalars['String']>;
  tytul_not_contains?: InputMaybe<Scalars['String']>;
  tytul_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  wednesdayFrom?: InputMaybe<Scalars['DateTime']>;
  wednesdayFrom_exists?: InputMaybe<Scalars['Boolean']>;
  wednesdayFrom_gt?: InputMaybe<Scalars['DateTime']>;
  wednesdayFrom_gte?: InputMaybe<Scalars['DateTime']>;
  wednesdayFrom_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  wednesdayFrom_lt?: InputMaybe<Scalars['DateTime']>;
  wednesdayFrom_lte?: InputMaybe<Scalars['DateTime']>;
  wednesdayFrom_not?: InputMaybe<Scalars['DateTime']>;
  wednesdayFrom_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  wednesdayTo?: InputMaybe<Scalars['DateTime']>;
  wednesdayTo_exists?: InputMaybe<Scalars['Boolean']>;
  wednesdayTo_gt?: InputMaybe<Scalars['DateTime']>;
  wednesdayTo_gte?: InputMaybe<Scalars['DateTime']>;
  wednesdayTo_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  wednesdayTo_lt?: InputMaybe<Scalars['DateTime']>;
  wednesdayTo_lte?: InputMaybe<Scalars['DateTime']>;
  wednesdayTo_not?: InputMaybe<Scalars['DateTime']>;
  wednesdayTo_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type CfPersonNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPersonNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPersonNestedFilter>>>;
  company?: InputMaybe<Scalars['String']>;
  company_contains?: InputMaybe<Scalars['String']>;
  company_exists?: InputMaybe<Scalars['Boolean']>;
  company_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  company_not?: InputMaybe<Scalars['String']>;
  company_not_contains?: InputMaybe<Scalars['String']>;
  company_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  email?: InputMaybe<Scalars['String']>;
  email_contains?: InputMaybe<Scalars['String']>;
  email_exists?: InputMaybe<Scalars['Boolean']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_not?: InputMaybe<Scalars['String']>;
  email_not_contains?: InputMaybe<Scalars['String']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  facebook?: InputMaybe<Scalars['String']>;
  facebook_contains?: InputMaybe<Scalars['String']>;
  facebook_exists?: InputMaybe<Scalars['Boolean']>;
  facebook_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  facebook_not?: InputMaybe<Scalars['String']>;
  facebook_not_contains?: InputMaybe<Scalars['String']>;
  facebook_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  github?: InputMaybe<Scalars['String']>;
  github_contains?: InputMaybe<Scalars['String']>;
  github_exists?: InputMaybe<Scalars['Boolean']>;
  github_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  github_not?: InputMaybe<Scalars['String']>;
  github_not_contains?: InputMaybe<Scalars['String']>;
  github_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone?: InputMaybe<Scalars['String']>;
  phone_contains?: InputMaybe<Scalars['String']>;
  phone_exists?: InputMaybe<Scalars['Boolean']>;
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone_not?: InputMaybe<Scalars['String']>;
  phone_not_contains?: InputMaybe<Scalars['String']>;
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortBio_contains?: InputMaybe<Scalars['String']>;
  shortBio_exists?: InputMaybe<Scalars['Boolean']>;
  shortBio_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitter?: InputMaybe<Scalars['String']>;
  twitter_contains?: InputMaybe<Scalars['String']>;
  twitter_exists?: InputMaybe<Scalars['Boolean']>;
  twitter_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitter_not?: InputMaybe<Scalars['String']>;
  twitter_not_contains?: InputMaybe<Scalars['String']>;
  twitter_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CoreFieldsFragment = { __typename?: 'Article', title?: string | null, slug?: string | null, publishDate?: any | null, sys: { __typename?: 'Sys', id: string }, heroImage?: { __typename?: 'Asset', description?: string | null, title?: string | null, url?: string | null } | null, description?: { __typename?: 'ArticleDescription', json: any, links: { __typename?: 'ArticleDescriptionLinks', entries: { __typename?: 'ArticleDescriptionEntries', block: Array<{ __typename?: 'Address', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Article', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'BlogPost', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Branch', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'OpeningTimes', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Partner', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Person', sys: { __typename?: 'Sys', id: string } } | null> }, assets: { __typename?: 'ArticleDescriptionAssets', block: Array<{ __typename?: 'Asset', url?: string | null, title?: string | null, width?: number | null, height?: number | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null };

export type CoreBodyFieldsFragment = { __typename?: 'Article', body?: { __typename?: 'ArticleBody', json: any, links: { __typename?: 'ArticleBodyLinks', entries: { __typename?: 'ArticleBodyEntries', block: Array<{ __typename?: 'Address', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Article', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'BlogPost', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Branch', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'OpeningTimes', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Partner', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Person', sys: { __typename?: 'Sys', id: string } } | null> }, assets: { __typename?: 'ArticleBodyAssets', block: Array<{ __typename?: 'Asset', url?: string | null, title?: string | null, width?: number | null, height?: number | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null };

export type FetchAssetQueryVariables = Exact<{
  assetId: Scalars['String'];
}>;


export type FetchAssetQuery = { __typename?: 'Query', asset?: { __typename?: 'Asset', title?: string | null, description?: string | null, url?: string | null } | null };

export type FetchHomeQueryVariables = Exact<{
  heroImageId: Scalars['String'];
  articlesLimit: Scalars['Int'];
  newsLimit: Scalars['Int'];
  latestArticlesTagName: Scalars['String'];
  mainBranchTagName: Scalars['String'];
}>;


export type FetchHomeQuery = { __typename?: 'Query', heroImage?: { __typename?: 'Asset', title?: string | null, description?: string | null, url?: string | null } | null, latestArticles?: { __typename?: 'ArticleCollection', items: Array<{ __typename?: 'Article', title?: string | null, slug?: string | null, publishDate?: any | null, sys: { __typename?: 'Sys', id: string }, heroImage?: { __typename?: 'Asset', description?: string | null, title?: string | null, url?: string | null } | null, description?: { __typename?: 'ArticleDescription', json: any, links: { __typename?: 'ArticleDescriptionLinks', entries: { __typename?: 'ArticleDescriptionEntries', block: Array<{ __typename?: 'Address', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Article', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'BlogPost', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Branch', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'OpeningTimes', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Partner', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Person', sys: { __typename?: 'Sys', id: string } } | null> }, assets: { __typename?: 'ArticleDescriptionAssets', block: Array<{ __typename?: 'Asset', url?: string | null, title?: string | null, width?: number | null, height?: number | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null> } | null, newsArticles?: { __typename?: 'ArticleCollection', total: number, items: Array<{ __typename?: 'Article', title?: string | null, slug?: string | null, publishDate?: any | null, sys: { __typename?: 'Sys', id: string }, heroImage?: { __typename?: 'Asset', description?: string | null, title?: string | null, url?: string | null } | null, description?: { __typename?: 'ArticleDescription', json: any, links: { __typename?: 'ArticleDescriptionLinks', entries: { __typename?: 'ArticleDescriptionEntries', block: Array<{ __typename?: 'Address', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Article', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'BlogPost', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Branch', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'OpeningTimes', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Partner', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Person', sys: { __typename?: 'Sys', id: string } } | null> }, assets: { __typename?: 'ArticleDescriptionAssets', block: Array<{ __typename?: 'Asset', url?: string | null, title?: string | null, width?: number | null, height?: number | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null> } | null, mainBranch?: { __typename?: 'BranchCollection', items: Array<{ __typename?: 'Branch', name?: string | null, shortDescription?: string | null, sys: { __typename?: 'Sys', id: string }, mainImage?: { __typename?: 'Asset', url?: string | null } | null, openingTimes?: { __typename?: 'OpeningTimes', mondayTo?: any | null, mondayFrom?: any | null, tuesdayTo?: any | null, tuesdayFrom?: any | null, wednesdayTo?: any | null, wednesdayFrom?: any | null, thursdayTo?: any | null, thursdayFrom?: any | null, fridayTo?: any | null, fridayFrom?: any | null, saturdayFrom?: any | null, saturdayTo?: any | null, sundayTo?: any | null, sundayFrom?: any | null } | null, address?: { __typename?: 'Address', miejscowosc?: string | null, kodPocztowy?: string | null, ulica?: string | null, numer?: string | null, numerTelefonu?: Array<string | null> | null, email?: Array<string | null> | null, lokalizacja?: { __typename?: 'Location', lat?: number | null, lon?: number | null } | null } | null } | null> } | null, branches?: { __typename?: 'BranchCollection', items: Array<{ __typename?: 'Branch', name?: string | null, shortDescription?: string | null, sys: { __typename?: 'Sys', id: string }, mainImage?: { __typename?: 'Asset', url?: string | null } | null, openingTimes?: { __typename?: 'OpeningTimes', mondayTo?: any | null, mondayFrom?: any | null, tuesdayTo?: any | null, tuesdayFrom?: any | null, wednesdayTo?: any | null, wednesdayFrom?: any | null, thursdayTo?: any | null, thursdayFrom?: any | null, fridayTo?: any | null, fridayFrom?: any | null, saturdayFrom?: any | null, saturdayTo?: any | null, sundayTo?: any | null, sundayFrom?: any | null } | null, address?: { __typename?: 'Address', miejscowosc?: string | null, kodPocztowy?: string | null, ulica?: string | null, numer?: string | null, numerTelefonu?: Array<string | null> | null, email?: Array<string | null> | null, lokalizacja?: { __typename?: 'Location', lat?: number | null, lon?: number | null } | null } | null } | null> } | null, partners?: { __typename?: 'PartnerCollection', items: Array<{ __typename?: 'Partner', description?: string | null, name?: string | null, logo?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null } | null> } | null };

export type FetchArticlesQueryVariables = Exact<{
  articlesLimit: Scalars['Int'];
  skip: Scalars['Int'];
}>;


export type FetchArticlesQuery = { __typename?: 'Query', articles?: { __typename?: 'ArticleCollection', total: number, items: Array<{ __typename?: 'Article', title?: string | null, slug?: string | null, publishDate?: any | null, sys: { __typename?: 'Sys', id: string }, heroImage?: { __typename?: 'Asset', description?: string | null, title?: string | null, url?: string | null } | null, description?: { __typename?: 'ArticleDescription', json: any, links: { __typename?: 'ArticleDescriptionLinks', entries: { __typename?: 'ArticleDescriptionEntries', block: Array<{ __typename?: 'Address', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Article', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'BlogPost', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Branch', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'OpeningTimes', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Partner', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Person', sys: { __typename?: 'Sys', id: string } } | null> }, assets: { __typename?: 'ArticleDescriptionAssets', block: Array<{ __typename?: 'Asset', url?: string | null, title?: string | null, width?: number | null, height?: number | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, body?: { __typename?: 'ArticleBody', json: any, links: { __typename?: 'ArticleBodyLinks', entries: { __typename?: 'ArticleBodyEntries', block: Array<{ __typename?: 'Address', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Article', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'BlogPost', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Branch', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'OpeningTimes', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Partner', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Person', sys: { __typename?: 'Sys', id: string } } | null> }, assets: { __typename?: 'ArticleBodyAssets', block: Array<{ __typename?: 'Asset', url?: string | null, title?: string | null, width?: number | null, height?: number | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null> } | null };

export type FetchArticleQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type FetchArticleQuery = { __typename?: 'Query', article?: { __typename?: 'ArticleCollection', items: Array<{ __typename?: 'Article', title?: string | null, slug?: string | null, publishDate?: any | null, sys: { __typename?: 'Sys', id: string }, heroImage?: { __typename?: 'Asset', description?: string | null, title?: string | null, url?: string | null } | null, description?: { __typename?: 'ArticleDescription', json: any, links: { __typename?: 'ArticleDescriptionLinks', entries: { __typename?: 'ArticleDescriptionEntries', block: Array<{ __typename?: 'Address', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Article', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'BlogPost', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Branch', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'OpeningTimes', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Partner', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Person', sys: { __typename?: 'Sys', id: string } } | null> }, assets: { __typename?: 'ArticleDescriptionAssets', block: Array<{ __typename?: 'Asset', url?: string | null, title?: string | null, width?: number | null, height?: number | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, body?: { __typename?: 'ArticleBody', json: any, links: { __typename?: 'ArticleBodyLinks', entries: { __typename?: 'ArticleBodyEntries', block: Array<{ __typename?: 'Address', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Article', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'BlogPost', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Branch', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'OpeningTimes', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Partner', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Person', sys: { __typename?: 'Sys', id: string } } | null> }, assets: { __typename?: 'ArticleBodyAssets', block: Array<{ __typename?: 'Asset', url?: string | null, title?: string | null, width?: number | null, height?: number | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null> } | null };

export type FetchArticlesSlugsQueryVariables = Exact<{
  skip: Scalars['Int'];
}>;


export type FetchArticlesSlugsQuery = { __typename?: 'Query', slugs?: { __typename?: 'ArticleCollection', total: number, skip: number, limit: number, items: Array<{ __typename?: 'Article', slug?: string | null } | null> } | null };

export type FetchArticlesTotalQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchArticlesTotalQuery = { __typename?: 'Query', articlesTotal?: { __typename?: 'ArticleCollection', total: number } | null };

export type CorePageFieldsFragment = { __typename?: 'BlogPost', title?: string | null, slug?: string | null, publishDate?: any | null, sys: { __typename?: 'Sys', id: string }, heroImage?: { __typename?: 'Asset', description?: string | null, title?: string | null, url?: string | null } | null, description?: { __typename?: 'BlogPostDescription', json: any, links: { __typename?: 'BlogPostDescriptionLinks', entries: { __typename?: 'BlogPostDescriptionEntries', block: Array<{ __typename?: 'Address', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Article', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'BlogPost', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Branch', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'OpeningTimes', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Partner', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Person', sys: { __typename?: 'Sys', id: string } } | null> }, assets: { __typename?: 'BlogPostDescriptionAssets', block: Array<{ __typename?: 'Asset', url?: string | null, title?: string | null, width?: number | null, height?: number | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null };

export type CorePageBodyFieldsFragment = { __typename?: 'BlogPost', body?: { __typename?: 'BlogPostBody', json: any, links: { __typename?: 'BlogPostBodyLinks', entries: { __typename?: 'BlogPostBodyEntries', block: Array<{ __typename?: 'Address', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Article', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'BlogPost', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Branch', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'OpeningTimes', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Partner', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Person', sys: { __typename?: 'Sys', id: string } } | null> }, assets: { __typename?: 'BlogPostBodyAssets', block: Array<{ __typename?: 'Asset', url?: string | null, title?: string | null, width?: number | null, height?: number | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null };

export type FetchPageQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type FetchPageQuery = { __typename?: 'Query', page?: { __typename?: 'BlogPostCollection', items: Array<{ __typename?: 'BlogPost', title?: string | null, slug?: string | null, publishDate?: any | null, sys: { __typename?: 'Sys', id: string }, heroImage?: { __typename?: 'Asset', description?: string | null, title?: string | null, url?: string | null } | null, description?: { __typename?: 'BlogPostDescription', json: any, links: { __typename?: 'BlogPostDescriptionLinks', entries: { __typename?: 'BlogPostDescriptionEntries', block: Array<{ __typename?: 'Address', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Article', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'BlogPost', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Branch', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'OpeningTimes', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Partner', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Person', sys: { __typename?: 'Sys', id: string } } | null> }, assets: { __typename?: 'BlogPostDescriptionAssets', block: Array<{ __typename?: 'Asset', url?: string | null, title?: string | null, width?: number | null, height?: number | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, body?: { __typename?: 'BlogPostBody', json: any, links: { __typename?: 'BlogPostBodyLinks', entries: { __typename?: 'BlogPostBodyEntries', block: Array<{ __typename?: 'Address', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Article', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'BlogPost', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Branch', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'OpeningTimes', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Partner', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Person', sys: { __typename?: 'Sys', id: string } } | null> }, assets: { __typename?: 'BlogPostBodyAssets', block: Array<{ __typename?: 'Asset', url?: string | null, title?: string | null, width?: number | null, height?: number | null, description?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null> } | null };
