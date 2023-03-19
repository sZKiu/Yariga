export interface User {
  uniqueName: string;
  username: string;
  email: string;
  image: string | null;
  age: string | null;
}

export type UserwError = User & { error: string | null }

export interface Property {
  _id: string
  name: string;
  description: string;
  type: string;
  price: number;
  image: string;
  location: string;
  authorUniqueName: string
}