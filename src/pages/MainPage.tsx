import { useCallback, useState } from "react";
import Layout from "@/components/Layout";
import TodoCard from "@/components/TodoCard";
import TodoForm from "@/components/TodoForm";

export type TTodo = {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
};

const MainPage = (): React.ReactNode => {
  const [todos, setTodos] = useState<TTodo[]>([]);

  const onToggleTodo = useCallback((id: number): void => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id == id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  }, []);

  const onDeleteTodo = useCallback((id: number): void => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  return (
    <Layout>
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold">📝Todo List📝</h1>
        <TodoForm todos={todos} setTodos={setTodos} />

        <h2 className="text-xl font-bold">👨🏻‍💻Working..!👨🏻‍💻</h2>
        {todos
          .filter((e) => !e.isDone)
          .map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              onToggleTodo={onToggleTodo}
              onDeleteTodo={onDeleteTodo}
            />
          ))}

        <h2 className="text-xl font-bold">🎉Done..!🎉</h2>
        {todos
          .filter((e) => e.isDone)
          .map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              onToggleTodo={onToggleTodo}
              onDeleteTodo={onDeleteTodo}
            />
          ))}
      </div>
    </Layout>
  );
};

export default MainPage;
