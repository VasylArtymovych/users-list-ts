import { ListContainer } from "./UserList.styled";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}
export default function UsersList<T>({ items, renderItem }: ListProps<T>) {
  return <ListContainer>{items.map(renderItem)}</ListContainer>;
}
