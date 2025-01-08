import { useGetTodosQuery } from "./store/apis/todoApi"

export const TodoApp = () => {

  const {data: todos, isLoading} = useGetTodosQuery();

  if (isLoading) return <p>Cargando...</p>;
  
  return (
    <>
      <h1>Todo App</h1>

      <ul>
        {
          (todos || []).map((todo) => (
            <li  key={todo.id}>{todo.title}</li>
          ))
        }
      </ul>
    </>
  )
}
