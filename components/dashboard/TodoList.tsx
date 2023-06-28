import { TodoItem } from '@/types/todo';
import {Checkbox, List, ListItem, ListItemPrefix} from "@material-tailwind/react";

/**
 * TodoListProps structure
 */
interface TodoListProps {
  items: TodoItem[];
}

export default function TodoList({ items }: TodoListProps) {
  return (
    <List className="p-0">
      {
        items.map((todoItem) => {
          return (
            <ListItem
              className="group font-normal py-1 leading-none"
              key={todoItem.id}
              ripple={false}
            >
              <ListItemPrefix>
                <Checkbox
                  checked={todoItem.isDone}
                  containerProps={{ className: 'p-0' }}
                />
              </ListItemPrefix>
              {todoItem.title}
            </ListItem>
          );
        })
      }
    </List>
  );
}