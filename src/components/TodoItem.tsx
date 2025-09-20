import {FC, useEffect} from 'react'
type todo = {
  text: string;
  id: number;
}

type TodoItemProps = { item: todo, onDelete: (itemId: number) => void }
const TodoItem: FC<TodoItemProps> = ({item, onDelete}) => {
  useEffect(()=> {
    console.log(`Components rendered for item ${item.id}`);
    return () => {
      console.log(`Components removed for item ${item.id}`);
    }
  }, [item.id]);
  return (
    <div>
      <p>{item.text}</p>
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </div>
  )
}

export default TodoItem