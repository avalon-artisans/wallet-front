import { useState, useEffect } from 'react';
import TodoService from '@/services/todo.service';
import {TodoItem} from '@/types/todo';
import {Typography} from '@material-tailwind/react';
import TodoList from '@/components/dashboard/TodoList';
import { useDispatch } from 'react-redux';
import {changeAlertColor, changeAlertVisibility, changeMessage} from "@/store/slices/alertSlice";
import _ from 'lodash';
import dayjs from 'dayjs';

import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

/**
 * Dashboard component
 * @author Kenneth Sumang
 */
export default function Dashboard() {
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTodos()
      .then((data) => {
        if (!data.success) {
          dispatch(changeMessage(data.message));
          dispatch(changeAlertColor('red'));
          dispatch(changeAlertVisibility(true));
          return;
        }

        setTodoItems(data.data);
      })
      .catch(() => {
        dispatch(changeMessage('A server error has occurred.'));
        dispatch(changeAlertColor('red'));
        dispatch(changeAlertVisibility(true));
      })
  }, []);

  /**
   * Fetch todos
   * @returns {Promise<Object[]>}
   */
  async function fetchTodos(): Promise<{ success: boolean; data: TodoItem[]; message: string }> {
    const todoService = new TodoService();
    return todoService.fetchTodos();
  }

  function filterItemsDueToday(): TodoItem[] {
    return _.filter(todoItems, (item) => {
      if (item.due !== null) {
        return item.due!.includes(dayjs().utc().format('YYYY-MM-DD'));
      }
      return false;
    });
  }

  function filterItemsNotDueToday() {
    return _.filter(todoItems, (item) => {
      if (item.due === null) {
        return true;
      }

      return !item.due?.includes(dayjs().utc().format('YYYY-MM-DD'));
    });
  }

  return (
    <>
      <div className="mb-5">
        <Typography variant="h5" className="mb-1">Today</Typography>
        <TodoList items={filterItemsDueToday()} />
      </div>
      <div>
        <Typography variant="h5" className="mb-1">Upcoming</Typography>
        <TodoList items={filterItemsNotDueToday()} />
      </div>
    </>
  );
}