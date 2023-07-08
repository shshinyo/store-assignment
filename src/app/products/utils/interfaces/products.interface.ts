export interface GetProduct {
  data: Datum;
  meta: Meta;
}

export interface ProductsList {
  data: Datum[];
  meta: Meta;
}

export interface Datum {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  imageUrl: null | string;
  desc: null | string;
  price: null | string;
  fromDate: Date | null;
  toDate: Date | null;
  discountPercentage: string | null;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
