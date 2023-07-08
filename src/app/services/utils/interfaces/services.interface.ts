import { Meta } from 'src/app/products/utils/interfaces/products.interface';

export interface GetService {
  data: {
    id: number;
    attributes: Attributes;
  };
  meta: Meta;
}
export interface ServicesList {
  data: Datum[];
  meta: Meta;
}

export interface Datum {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  fromDate: Date;
  toDate: Date;
  name: string;
  desc: string;
  additionalFeesPercentege: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  discountPercentage: null | string;
  price: null | string;
}
