export interface CreateEditServicePayload {
  data: Data;
}

export interface Data {
  id?: string;
  name: string;
  desc: string;
  fromDate: Date;
  price: string;
  toDate: Date;
  discountPercentage: string;
  additionalFeesPercentege: string;
}
