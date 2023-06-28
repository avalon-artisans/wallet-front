/**
 * TodoItem structure
 */
interface TodoItem {
  id: number;
  title: string;
  description?: string|null;
  due?: string|null;
  isDone: boolean;
}

export type { TodoItem };