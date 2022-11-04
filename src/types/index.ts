export interface IUser {
  _id: string;
  userName: string;
  rank: number;
}

export interface ICreateUpdateUserResponse {
  code: number;
  status: string;
  user: IUser;
}

export interface IGetUsersResponse {
  code: number;
  status: string;
  users: IUser[];
}

export interface IDeleteResponse {
  code: number;
  status: string;
}

interface FormElements extends HTMLFormControlsCollection {
  userName: HTMLInputElement;
}

export interface IAddUserForm extends HTMLFormElement {
  readonly elements: FormElements;
}

export type UsersContextType = {
  users: IUser[];
  setUsers: (data: IUser[]) => void;
  isLoading: boolean;
  setIsLoading: (data: boolean) => void;
  sortUsersByRank: (data: IUser[]) => IUser[];
};
