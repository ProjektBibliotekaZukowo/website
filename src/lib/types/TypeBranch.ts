import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";
import { TypeAddressFields } from "./TypeAddress";
import { TypeOpeningTimesFields } from "./TypeOpeningTimes";

export interface TypeBranchFields {
    name: Contentful.EntryFields.Symbol;
    shortDescription: Contentful.EntryFields.Text;
    mainImage?: Contentful.Asset;
    openingTimes?: Contentful.Entry<TypeOpeningTimesFields>;
    longDescription: CFRichTextTypes.Block | CFRichTextTypes.Inline;
    gallery?: Contentful.Asset[];
    address?: Contentful.Entry<TypeAddressFields>;
}

export type TypeBranch = Contentful.Entry<TypeBranchFields>;
