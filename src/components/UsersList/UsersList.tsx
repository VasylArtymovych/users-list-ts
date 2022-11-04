import { ListContainer } from './UserList.styled';

interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}
export default function UsersList<T>(props: ListProps<T>) {
  return <ListContainer>{props.items.map(props.renderItem)}</ListContainer>;
}
