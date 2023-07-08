export interface CreateEditProductPayload {
  data: {
    id?: string;
    name: string;
    imageUrl: string;
    desc: string;
    price: string;
    fromDate: Date;
    toDate: Date;
    discountPercentage: string;
  };
}
