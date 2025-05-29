import AddTodo from "@/components/todos/AddTodo";
import { prisma } from "@/utils/prisma";
import Image from "next/image";
import Todo from "@/components/todos/Todo";

async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    }
  })
  return data;
}

export default async function Home() {
  const data = await getData();
  return (
    <div className="min-h-screen w-full flex flex-col justify-start items-center py-10 px-4 bg-gradient-to-br from-pink-50 to-rose-100">
      <h1 className="text-4xl font-bold mb-10 text-center text-pink-800">Todo App Apka</h1>
      
      <div className="w-full max-w-2xl flex flex-col items-center space-y-8">
        <div className="w-full">
          <AddTodo />
        </div>
        
        <div className="w-full flex flex-col gap-5 items-center">
          {data.map((todo, id) => (
            <div key={id} className="w-full max-w-lg bg-white/70 backdrop-blur-sm rounded-lg shadow-md border border-pink-200 p-1">
              <Todo todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}