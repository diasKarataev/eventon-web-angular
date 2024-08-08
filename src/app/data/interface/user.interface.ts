export interface User {
  email: string;
  id: string;
  isActivated: boolean;
  role: string;
  name: string;
  surname: string;
  creationDate: Date;
  birthDate: Date;
  isSubscribed: boolean;
}
