import { AppContainer } from "./App.styled";
import { useModal, useUsers } from "hooks";
import AddUserForm from "components/AddUserForm";
import List from "components/UsersList";
import UserCard from "components/UserCard";
import Modal from "components/Modal";
import Button from "components/Button";
import { IUser } from "types";

function App() {
  const { users, isLoading } = useUsers()!;
  const { isModalOpen, closeModal, openModal } = useModal();

  return (
    <AppContainer>
      {isModalOpen ? (
        <Modal>
          <AddUserForm onCloseModal={closeModal} />
        </Modal>
      ) : (
        <Button onOpenModal={openModal} />
      )}

      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <List
          items={users}
          renderItem={(user: IUser, index: number) => (
            <UserCard user={user} index={index} key={user._id} />
          )}
        />
      )}
    </AppContainer>
  );
}

export default App;
