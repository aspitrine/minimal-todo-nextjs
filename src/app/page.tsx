import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import {prisma} from "@/utils/prisma";

export default async function Home() {
  const todos = await prisma.todo.findMany()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-2">
        <TodoForm />

        <TodoList todos={todos} />
      </div>
    </main>
  );
}
