import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { GrClose } from "react-icons/gr";
import { createUserRoute, toastOptions } from "utils";
import { ICreateUpdateUserResponse, IAddUserForm } from "types";
import { Form } from "./AddUserForm.styled";
import { useUsers } from "hooks";

interface IAddUserFromProps {
  onCloseModal: () => void;
}

function AddUserFrom({ onCloseModal }: IAddUserFromProps) {
  const { users, setUsers, sortUsersByRank } = useUsers()!;

  const submitHandler = async (e: React.FormEvent<IAddUserForm>) => {
    e.preventDefault();
    const userName = e.currentTarget.elements.userName.value;
    e.currentTarget.reset();

    try {
      const { data } = await axios.post<ICreateUpdateUserResponse>(
        createUserRoute,
        {
          userName,
        }
      );
      if (data.user) {
        setUsers(sortUsersByRank([...users, data.user]));
      }
      toast.info(
        `User with name: ${data.user.userName} and rank: ${data.user.rank} created.`,
        toastOptions
      );
      onCloseModal();
    } catch (error: any) {
      toast.error(error.response.data.error, toastOptions);
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <button type="button" className="close_btn" onClick={onCloseModal}>
        <GrClose />
      </button>

      <input
        type="text"
        name="userName"
        title="Name is required"
        placeholder="User name"
      />

      <button type="submit" className="submit_btn">
        Add User
      </button>
    </Form>
  );
}

export default AddUserFrom;
