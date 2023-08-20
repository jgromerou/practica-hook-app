import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const initialState = [
  //   {
  //     id: new Date().getTime(),
  //     description: ' Recolectar la piedra del alma',
  //     done: false,
  //   },
];

const init = () => {
  return JSON.parse(localStorage.getItem('todos') || []);
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const onNewTodo = (newTodo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: newTodo,
    };
    dispatch(action);
  };

  const onDeleteTodo = (id) => {
    const action = {
      type: '[TODO] Remove Todo',
      payload: id,
    };
    dispatch(action);
  };

  const onToggleTodo = (id) => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: id,
    };
    dispatch(action);
  };
  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
    onNewTodo,
    onDeleteTodo,
    onToggleTodo,
  };
};
