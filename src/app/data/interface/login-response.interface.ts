import {User} from "./user.interface";

export interface LoginResponseInterface {
  accessToken: string;
  refreshToken: string;
  user: User;
}
