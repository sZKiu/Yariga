export interface User {
  uniqueName: string;
  username: string;
  email: string;
  img: string | null;
  age: string | null;
}

export type UserwPassword = User & { error: string | null }