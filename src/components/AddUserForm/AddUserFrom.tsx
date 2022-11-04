import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { createUserRoute, toastOptions } from "utils";
import { ICreateUpdateUserResponse, IAddUserForm, IUser } from "types";

interface UserFormProps {
  onCloseModal: () => void;
  addUsers: (data: IUser) => void;
}

function AddUserFrom({ onCloseModal, addUsers }: UserFormProps) {
  const submitHandler = async (e: React.FormEvent<IAddUserForm>) => {
    e.preventDefault();
    const userName = e.currentTarget.elements.userName.value;
    e.currentTarget.reset();

    try {
      const {
        data: { user },
      } = await axios.post<ICreateUpdateUserResponse>(createUserRoute, {
        userName,
      });
      if (user) {
        addUsers(user);
      }
      toast.info(
        `User with name: ${user.userName} and rank: ${user.rank} created.`,
        toastOptions
      );
    } catch (error: any) {
      toast.error(error.response.data.error, toastOptions);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="userName"
        title="Name is required"
        placeholder="User name"
      />
      <button type="submit">Add User</button>
    </form>
  );
}

export default AddUserFrom;
