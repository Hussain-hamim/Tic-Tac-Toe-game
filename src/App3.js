import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";
import TasksProvider from "./TasksContext.js";

// Reducers let you consolidate a component’s state update logic.
// Context lets you pass information deep down to other components
/** Here is how you can combine a reducer with context:
1. Create the context.
2. Put state and dispatch into context.
3. Use context anywhere in the tree. */

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
