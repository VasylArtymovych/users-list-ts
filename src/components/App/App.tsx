import AddUserForm from "components/AddUserForm";
import List from "components/UsersList";
import UserCard from "components/UserCard";
import { IUser } from "types";
import { useModal, useUsers } from "hooks";
import Modal from "components/Modal";

function App() {
  const { users, setUsers, isLoading } = useUsers()!;
  const { closeModal } = useModal();

  const addUsers = (data: IUser) => {
    setUsers([...users, data]);
  };

  return (
    <div>
      <Modal>
        <AddUserForm addUsers={addUsers} onCloseModal={closeModal} />
      </Modal>
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <List
          items={users}
          renderItem={(user: IUser, index: number) => (
            <UserCard user={user} key={user._id} index={index} />
          )}
        />
      )}
    </div>
  );
}

export default App;
