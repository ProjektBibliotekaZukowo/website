import * as Contentful from 'contentful';
import { TypePersonFields } from './TypePerson';

export interface TypeArticleFields {
  title: Contentful.EntryFields.Symbol;
  slug: Contentful.EntryFields.Symbol;
  heroImage: Contentful.Asset;
  description: Contentful.EntryFields.Text;
  body: Contentful.EntryFields.Text;
  author?: Contentful.Entry<TypePersonFields>;
  publishDate: Contentful.EntryFields.Date;
  tags?: ('general' | 'javascript' | 'static-sites')[];
}

export type TypeArticle = Contentful.Entry<TypeArticleFields>;
