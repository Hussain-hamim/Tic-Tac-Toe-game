import { useState } from "react";
import AddTodo from "./AddTodo.js";
import TaskList from "./TaskList.js";
import { useImmer } from "use-immer";

let nextId = 3;

const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

export default function TaskApp() {
  // const [todos, setTodos] = useState(initialTodos);
  const [todos, updateTodos] = useImmer(initialTodos);

  function handleAddTodo(title) {
    // setTodos([...todos, { id: nextId++, title: title, done: false }]);

    updateTodos((draft) => {
      draft.push({ id: nextId++, title: title, done: false });
    });
    // todos.push({
    //   id: nextId++,
    //   title: title,
    //   done: false,
    // });
  }

  function handleChangeTodo(nextTodo) {
    updateTodos(
      todos.map((todo) => {
        if (todo.id === nextTodo.id) {
          return nextTodo;
        } else {
          return todo;
        }
      })
    );
    // setTodos(
    //   todos.map((todo) => {
    //     if (todo.id === nextTodo.id) {
    //       return nextTodo;
    //     } else {
    //       return todo;
    //     }
    //   })
    // );

    // updateTodos((draft) => {
    //   const todo = draft.find((t) => t.id === nextTodo.id);
    //   todo.title = nextTodo.title;
    //   todo.done = nextTodo.done;
    // });

    // const todo = todos.find((t) => t.id === nextTodo.id);
    // todo.title = nextTodo.title;
    // todo.done = nextTodo.done;
  }

  function handleDeleteTodo(todoId) {
    // setTodos(todos.filter((todo) => todo.id !== todoId));

    updateTodos(todos.filter((todo) => todo.id !== todoId));

    // updateTodos((draft) => {
    //   const index = draft.findIndex((t) => t.id === todoId);
    //   draft.splice(index, 1);
    // });

    // const index = todos.findIndex((t) => t.id === todoId);
    // todos.splice(index, 1);
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
