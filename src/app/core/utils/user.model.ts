export interface IUserPayload {
  identifier: string;
  password: string;
}

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}
