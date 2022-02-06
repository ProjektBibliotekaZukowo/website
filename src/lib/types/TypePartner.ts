import * as Contentful from 'contentful';

export interface TypePartnerFields {
  name: Contentful.EntryFields.Symbol;
  logo?: Contentful.Asset;
  description?: Contentful.EntryFields.Text;
}

export type TypePartner = Contentful.Entry<TypePartnerFields>;
