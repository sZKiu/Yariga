export interface User {
  uniqueName: string;
  username: string;
  email: string;
  image: string | null;
  age: string | null;
}

export type UserwError = User & { error: string | null }