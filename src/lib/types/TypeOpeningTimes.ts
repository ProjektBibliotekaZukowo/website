import * as Contentful from "contentful";

export interface TypeOpeningTimesFields {
    tytul?: Contentful.EntryFields.Symbol;
    mondayFrom?: Contentful.EntryFields.Date;
    mondayTo?: Contentful.EntryFields.Date;
    tuesdayFrom?: Contentful.EntryFields.Date;
    tuesdayTo?: Contentful.EntryFields.Date;
    wednesdayFrom?: Contentful.EntryFields.Date;
    wednesdayTo?: Contentful.EntryFields.Date;
    thursdayFrom?: Contentful.EntryFields.Date;
    thursdayTo?: Contentful.EntryFields.Date;
    fridayFrom?: Contentful.EntryFields.Date;
    fridayTo?: Contentful.EntryFields.Date;
    saturdayFrom?: Contentful.EntryFields.Date;
    saturdayTo?: Contentful.EntryFields.Date;
    sundayFrom?: Contentful.EntryFields.Date;
    sundayTo?: Contentful.EntryFields.Date;
}

export type TypeOpeningTimes = Contentful.Entry<TypeOpeningTimesFields>;
