import React, { FC, useState } from 'react';
import { IUser, IDeleteResponse, ICreateUpdateUserResponse } from 'types';
import { CardContainer } from './UserCard.styled';
import { AiOutlineEdit } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IoIosSave } from 'react-icons/io';
import axios from 'axios';
import { updateUserRoute, deleteUserRoute, toastOptions } from 'utils';
import { toast } from 'react-toastify';
import { useUsers } from 'hooks';

interface IUserCardProps {
  user: IUser;
  index: number;
}

const UserCard: FC<IUserCardProps> = ({ user, index }) => {
  const [isEdited, setIsEdited] = useState(false);
  const [editedValue, setEditedValue] = useState<{ userName?: string; rank?: number }>({});
  const { users, setUsers } = useUsers()!;
  const [currentUser, setCurrentCard] = useState<IUser>()!;

  const editBtnHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isEdited && Object.keys(editedValue).length !== 0) {
      try {
        const { data } = await axios.patch<ICreateUpdateUserResponse>(updateUserRoute + `/${user._id}`, editedValue);
        if (data.code === 200) {
          const updateUser = users.map((u) => (u._id === user._id ? { ...user, ...editedValue } : u));
          setUsers(updateUser);
          toast.info(`User data: ${editedValue?.userName ?? ''} ${editedValue?.rank ?? ''} updated.`, toastOptions);
        }
      } catch (error: any) {
        toast.error(error.response.data.error, toastOptions);
      }
    }
    setIsEdited((prev) => !prev);
  };

  const deleteBtnHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const { data } = await axios.delete<IDeleteResponse>(deleteUserRoute + `/${user._id}`);
      if (data.code === 200) {
        const deleteUser = users.filter((u) => u._id !== user._id);
        setUsers(deleteUser);
        toast.info(`User with name: ${user.userName} deleted.`, toastOptions);
      }
    } catch (error: any) {
      toast.error(error.response.data.error, toastOptions);
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setEditedValue({ ...editedValue, [name]: value });
  };

  // const sortedUsers = (usr1: IUser, usr2: IUser) => usr2.rank - usr1.rank;

  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('rank', user.rank.toString());
    console.log('drag', user);
  };
  const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('leave');
  };
  const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('end');
  };
  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    console.log('over');
  };
  const dropHandler = (e: React.DragEvent<HTMLDivElement>, user: IUser) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('rank');

    console.log('drop', data);
  };

  return (
    <CardContainer
      draggable={true}
      onDragStart={dragStartHandler}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandler(e, user)}
    >
      <span className="order">{index + 1}</span>
      {isEdited ? (
        <>
          <input type="text" name="userName" onChange={onChangeHandler} />
          <input type="number" name="rank" onChange={onChangeHandler} />
          {/* <button type="submit">save</button> */}
        </>
      ) : (
        <>
          <h2>{user.userName}</h2>
          <p>
            <span>Rank:</span>
            {user.rank}
          </p>
        </>
      )}

      <div>
        <button type="button" onClick={editBtnHandler}>
          {isEdited ? <IoIosSave /> : <AiOutlineEdit />}
        </button>
        <button type="button" onClick={deleteBtnHandler}>
          <RiDeleteBin6Line />
        </button>
      </div>
    </CardContainer>
  );
};

export default UserCard;
