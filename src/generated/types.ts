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
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The Circle scalar type represents a circle, defined by the coordinates of its center and a radius. The Circle type is used to represent a searchable area together with the '_within_circle' filter. */
  Circle: any;
  /** The Rectangle scalar type represents a rectangle, defined by the coordinates of its top left and bottom right corners. The Rectangle type is used to represent a searchable area together with the '_within_rectangle' filter. */
  Rectangle: any;
};

export type Query = {
  __typename?: 'Query';
  address?: Maybe<Address>;
  addressCollection?: Maybe<AddressCollection>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  blogPost?: Maybe<BlogPost>;
  blogPostCollection?: Maybe<BlogPostCollection>;
  branch?: Maybe<Branch>;
  branchCollection?: Maybe<BranchCollection>;
  entryCollection?: Maybe<EntryCollection>;
  openingTimes?: Maybe<OpeningTimes>;
  openingTimesCollection?: Maybe<OpeningTimesCollection>;
  person?: Maybe<Person>;
  personCollection?: Maybe<PersonCollection>;
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

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
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

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type AddressLinkingCollections = {
  __typename?: 'AddressLinkingCollections';
  branchCollection?: Maybe<BranchCollection>;
  entryCollection?: Maybe<EntryCollection>;
};

export type AddressLinkingCollectionsBranchCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type AddressLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type BranchCollection = {
  __typename?: 'BranchCollection';
  items: Array<Maybe<Branch>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

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
};

/** Branch details [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/branch) */
export type BranchShortDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentfulMetadata: ContentfulMetadata;
  contentType?: Maybe<Scalars['String']>;
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
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  transform?: InputMaybe<ImageTransformOptions>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  blogPostCollection?: Maybe<BlogPostCollection>;
  branchCollection?: Maybe<BranchCollection>;
  entryCollection?: Maybe<EntryCollection>;
  personCollection?: Maybe<PersonCollection>;
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

export type AssetLinkingCollectionsPersonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type BlogPostCollection = {
  __typename?: 'BlogPostCollection';
  items: Array<Maybe<BlogPost>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

/** [See type definition](https://app.contentful.com/spaces/uptjwx8hy2jg/content_types/blogPost) */
export type BlogPost = Entry & {
  __typename?: 'BlogPost';
  author?: Maybe<Person>;
  body?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
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
  shortBio?: Maybe<Scalars['String']>;
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

export type PersonLinkingCollections = {
  __typename?: 'PersonLinkingCollections';
  blogPostCollection?: Maybe<BlogPostCollection>;
  entryCollection?: Maybe<EntryCollection>;
};

export type PersonLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type PersonLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
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

export type PersonCollection = {
  __typename?: 'PersonCollection';
  items: Array<Maybe<Person>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

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
  Webp = 'WEBP',
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
  TopRight = 'TOP_RIGHT',
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
  Thumb = 'THUMB',
}

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

export type BranchLongDescriptionLinks = {
  __typename?: 'BranchLongDescriptionLinks';
  assets: BranchLongDescriptionAssets;
  entries: BranchLongDescriptionEntries;
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

export type OpeningTimesLinkingCollections = {
  __typename?: 'OpeningTimesLinkingCollections';
  branchCollection?: Maybe<BranchCollection>;
  entryCollection?: Maybe<EntryCollection>;
};

export type OpeningTimesLinkingCollectionsBranchCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type OpeningTimesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type Location = {
  __typename?: 'Location';
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
};

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
  UlicaDesc = 'ulica_DESC',
}

export type AddressFilter = {
  AND?: InputMaybe<Array<InputMaybe<AddressFilter>>>;
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
  numer_contains?: InputMaybe<Scalars['String']>;
  numer_exists?: InputMaybe<Scalars['Boolean']>;
  numer_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  numer_not?: InputMaybe<Scalars['String']>;
  numer_not_contains?: InputMaybe<Scalars['String']>;
  numer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  numerTelefonu_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  numerTelefonu_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  numerTelefonu_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  numerTelefonu_exists?: InputMaybe<Scalars['Boolean']>;
  OR?: InputMaybe<Array<InputMaybe<AddressFilter>>>;
  sys?: InputMaybe<SysFilter>;
  ulica?: InputMaybe<Scalars['String']>;
  ulica_contains?: InputMaybe<Scalars['String']>;
  ulica_exists?: InputMaybe<Scalars['Boolean']>;
  ulica_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ulica_not?: InputMaybe<Scalars['String']>;
  ulica_not_contains?: InputMaybe<Scalars['String']>;
  ulica_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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

export type AddressCollection = {
  __typename?: 'AddressCollection';
  items: Array<Maybe<Address>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
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
  WidthDesc = 'width_DESC',
}

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
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
  TitleDesc = 'title_DESC',
}

export type BlogPostFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlogPostFilter>>>;
  author?: InputMaybe<CfPersonNestedFilter>;
  author_exists?: InputMaybe<Scalars['Boolean']>;
  body?: InputMaybe<Scalars['String']>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  body_not?: InputMaybe<Scalars['String']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  body_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroImage_exists?: InputMaybe<Scalars['Boolean']>;
  OR?: InputMaybe<Array<InputMaybe<BlogPostFilter>>>;
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

export type CfPersonNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPersonNestedFilter>>>;
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
  OR?: InputMaybe<Array<InputMaybe<CfPersonNestedFilter>>>;
  phone?: InputMaybe<Scalars['String']>;
  phone_contains?: InputMaybe<Scalars['String']>;
  phone_exists?: InputMaybe<Scalars['Boolean']>;
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone_not?: InputMaybe<Scalars['String']>;
  phone_not_contains?: InputMaybe<Scalars['String']>;
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortBio?: InputMaybe<Scalars['String']>;
  shortBio_contains?: InputMaybe<Scalars['String']>;
  shortBio_exists?: InputMaybe<Scalars['Boolean']>;
  shortBio_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortBio_not?: InputMaybe<Scalars['String']>;
  shortBio_not_contains?: InputMaybe<Scalars['String']>;
  shortBio_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type BranchFilter = {
  address?: InputMaybe<CfAddressNestedFilter>;
  address_exists?: InputMaybe<Scalars['Boolean']>;
  AND?: InputMaybe<Array<InputMaybe<BranchFilter>>>;
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
  OR?: InputMaybe<Array<InputMaybe<BranchFilter>>>;
  shortDescription?: InputMaybe<Scalars['String']>;
  shortDescription_contains?: InputMaybe<Scalars['String']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']>;
  shortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortDescription_not?: InputMaybe<Scalars['String']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']>;
  shortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfAddressNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfAddressNestedFilter>>>;
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
  numer_contains?: InputMaybe<Scalars['String']>;
  numer_exists?: InputMaybe<Scalars['Boolean']>;
  numer_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  numer_not?: InputMaybe<Scalars['String']>;
  numer_not_contains?: InputMaybe<Scalars['String']>;
  numer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  numerTelefonu_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  numerTelefonu_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  numerTelefonu_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  numerTelefonu_exists?: InputMaybe<Scalars['Boolean']>;
  OR?: InputMaybe<Array<InputMaybe<CfAddressNestedFilter>>>;
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
  OR?: InputMaybe<Array<InputMaybe<CfOpeningTimesNestedFilter>>>;
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

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  sys?: InputMaybe<SysFilter>;
};

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
  WednesdayToDesc = 'wednesdayTo_DESC',
}

export type OpeningTimesFilter = {
  AND?: InputMaybe<Array<InputMaybe<OpeningTimesFilter>>>;
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
  OR?: InputMaybe<Array<InputMaybe<OpeningTimesFilter>>>;
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

export type OpeningTimesCollection = {
  __typename?: 'OpeningTimesCollection';
  items: Array<Maybe<OpeningTimes>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

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
  TwitterDesc = 'twitter_DESC',
}

export type PersonFilter = {
  AND?: InputMaybe<Array<InputMaybe<PersonFilter>>>;
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
  OR?: InputMaybe<Array<InputMaybe<PersonFilter>>>;
  phone?: InputMaybe<Scalars['String']>;
  phone_contains?: InputMaybe<Scalars['String']>;
  phone_exists?: InputMaybe<Scalars['Boolean']>;
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone_not?: InputMaybe<Scalars['String']>;
  phone_not_contains?: InputMaybe<Scalars['String']>;
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortBio?: InputMaybe<Scalars['String']>;
  shortBio_contains?: InputMaybe<Scalars['String']>;
  shortBio_exists?: InputMaybe<Scalars['Boolean']>;
  shortBio_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortBio_not?: InputMaybe<Scalars['String']>;
  shortBio_not_contains?: InputMaybe<Scalars['String']>;
  shortBio_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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

export type FetchAssetQueryVariables = Exact<{
  asset_id: Scalars['String'];
}>;

export type FetchAssetQuery = {
  __typename?: 'Query';
  asset?:
    | {
        __typename?: 'Asset';
        title?: string | null | undefined;
        description?: string | null | undefined;
        url?: string | null | undefined;
      }
    | null
    | undefined;
};

export type FetchHomeQueryVariables = Exact<{ [key: string]: never }>;

export type FetchHomeQuery = {
  __typename?: 'Query';
  branches?:
    | {
        __typename?: 'BranchCollection';
        items: Array<
          | {
              __typename?: 'Branch';
              name?: string | null | undefined;
              shortDescription?: string | null | undefined;
              mainImage?:
                | { __typename?: 'Asset'; url?: string | null | undefined }
                | null
                | undefined;
              openingTimes?:
                | {
                    __typename?: 'OpeningTimes';
                    mondayTo?: any | null | undefined;
                    mondayFrom?: any | null | undefined;
                    tuesdayTo?: any | null | undefined;
                    tuesdayFrom?: any | null | undefined;
                    wednesdayTo?: any | null | undefined;
                    wednesdayFrom?: any | null | undefined;
                    thursdayTo?: any | null | undefined;
                    thursdayFrom?: any | null | undefined;
                    fridayTo?: any | null | undefined;
                    fridayFrom?: any | null | undefined;
                    saturdayFrom?: any | null | undefined;
                    saturdayTo?: any | null | undefined;
                    sundayTo?: any | null | undefined;
                    sundayFrom?: any | null | undefined;
                  }
                | null
                | undefined;
              address?:
                | {
                    __typename?: 'Address';
                    miejscowosc?: string | null | undefined;
                    kodPocztowy?: string | null | undefined;
                    ulica?: string | null | undefined;
                    numer?: string | null | undefined;
                    numerTelefonu?: Array<string | null | undefined> | null | undefined;
                    email?: Array<string | null | undefined> | null | undefined;
                    lokalizacja?:
                      | {
                          __typename?: 'Location';
                          lat?: number | null | undefined;
                          lon?: number | null | undefined;
                        }
                      | null
                      | undefined;
                  }
                | null
                | undefined;
            }
          | null
          | undefined
        >;
      }
    | null
    | undefined;
};
