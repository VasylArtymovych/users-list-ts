import React, { createContext, useContext, FC, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { toastOptions } from 'utils';
import { UsersContextType, IUser, IGetUsersResponse } from 'types';

const Context = createContext<UsersContextType | undefined>(undefined);

export const UsersProvider: FC<React.PropsWithChildren> = ({ children }) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setIsLoading(true);
        const { data } = await axios.get<IGetUsersResponse>('/');
        const sortedUsers = data?.users.sort((usr1, usr2) => usr2.rank - usr1.rank);
        setUsers(sortedUsers);
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(false);
        toast.error(error.response.data.error, toastOptions);
      }
    }
    fetchUsers();
  }, [setIsLoading, setUsers]);

  return <Context.Provider value={{ users, setUsers, isLoading, setIsLoading }}>{children}</Context.Provider>;
};

export function useUsers() {
  const context = useContext(Context);
  return context;
}
