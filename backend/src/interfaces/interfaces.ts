export interface IUser {
  userName: String;
  rank: Number;
}

export interface ICustomError {
  message: string;
  status?: number;
  additionalInfo?: any;
}

export interface IUserData {
  userName?: String;
  rank?: Number;
}
