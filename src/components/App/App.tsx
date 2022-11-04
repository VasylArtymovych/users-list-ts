import AddUserForm from 'components/AddUserForm';
import List from 'components/UsersList';
import UserCard from 'components/UserCard';
import { IUser } from 'types';
import { useUsers } from 'hooks';

function App() {
  const { users, setUsers, isLoading } = useUsers()!;

  const addUsers = (data: IUser) => {
    setUsers([...users, data]);
  };

  return (
    <div>
      <AddUserForm addUsers={addUsers} />
      {isLoading ? <div>Loading....</div> : <List items={users} renderItem={(user: IUser, index: number) => <UserCard user={user} key={user._id} index={index} />} />}
    </div>
  );
}

export default App;
