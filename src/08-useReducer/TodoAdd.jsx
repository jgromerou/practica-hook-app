import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: '',
  });

  const onFormSubmitNewTodo = (event) => {
    event.preventDefault();
    if (description.length <= 1) return;
    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };
    onNewTodo && onNewTodo(newTodo);
    onResetForm();
  };
  return (
    <form onSubmit={onFormSubmitNewTodo}>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control mb-2"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-outline-primary">
        Agregar
      </button>
    </form>
  );
};
