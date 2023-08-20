import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodos } from '../hooks';

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    onNewTodo,
    onDeleteTodo,
    onToggleTodo,
  } = useTodos();
  return (
    <>
      <h2>
        TodoApp: {todosCount},<small> pendientes: {pendingTodosCount}</small>
      </h2>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={(todo) => onNewTodo(todo)} />
        </div>
      </div>
    </>
  );
};
