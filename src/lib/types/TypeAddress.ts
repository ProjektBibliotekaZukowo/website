import * as Contentful from "contentful";

export interface TypeAddressFields {
    miejscowosc?: Contentful.EntryFields.Symbol;
    kodPocztowy?: Contentful.EntryFields.Symbol;
    ulica?: Contentful.EntryFields.Symbol;
    numer?: Contentful.EntryFields.Symbol;
    lokalizacja?: Contentful.EntryFields.Location;
    numerTelefonu?: Contentful.EntryFields.Symbol[];
    email?: Contentful.EntryFields.Symbol[];
}

export type TypeAddress = Contentful.Entry<TypeAddressFields>;
